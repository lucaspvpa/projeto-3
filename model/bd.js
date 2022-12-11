const { MongoClient, ServerApiVersion, GridFSBucket, ObjectId } = require('mongodb');
const { GridFsStorage } = require("multer-gridfs-storage");
const util = require('util');
const multer = require('multer');

const url = 'mongodb+srv://root:rootAdmin@pw3.ylhqytp.mongodb.net/';
const banco = 'PW3';
const bucketName = 'ARQUIVOS';

const data = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

const client = new MongoClient(url + '?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const bd = client.db(banco)
const storage = new GridFsStorage({
    bd,
    file: (req, file) => { return { bucketName, filename: `${data}-${file.originalname.replace(' ', '_')}`, }; }
});

module.exports.enviarArquivo = util.promisify(multer({ storage }).single("arquivo"));

module.exports.criar = async (colecao, objeto) => {
    const result = await bd.collection(colecao).insertOne(objeto);
    return result;
}

module.exports.buscar = async (colecao, busca) => {
    const cursor = bd.collection(colecao).find(busca);
    const results = await cursor.toArray();
    return results;
}

module.exports.atualizar = async (colecao, busca, data) => {
    const result = await bd.collection(colecao).updateOne(busca, data);
    return result;
}
module.exports.deletar = async (colecao, busca) => {
    const result = await bd.collection(colecao).deleteOne(busca);
    return result;
}
module.exports.buscarArquivo = async (req, res) => {
    try {
        const id = req.params._id
        const _id = new ObjectId(id)
        if (!_id) {
            res.status(400).json({ erro: "_id faltando" })
            return;
        }
        this.buscar(`${bucketName}.files`, { _id }).then((arquivo) => {
            if (arquivo.length == 0) {
                res.status(404).json({ erro: "Não encontrado." })
                return;
            }
            res.contentType(arquivo[0].contentType);
        }).finally(() => {
            const bucket = new GridFSBucket(bd, { bucketName });
            return new Promise(() => {
                const stream = bucket.openDownloadStream(_id)
                stream.on("data", data => res.status(200).write(data));
                stream.on("error", erro => { throw erro; });
                stream.on("end", () => res.end());
            })
        })
    } catch (erro) {
        return res.status(500).json({ erro: erro.message ? erro.message : "Erro ao buscar arquivo." })
    }
}
