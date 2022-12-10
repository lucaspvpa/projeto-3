const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const Usuario = require('./model/usuario');
const Publicacao = require('./model/publicacao');
const bd = require('./model/bd');
const jwt = require('jsonwebtoken');
const secret = 'super-secret-key';

function verifyJWT(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json({ erro: 'Nenhum token encontrado.' });
    const token = req.headers.authorization.replace('Bearer ', '');
    jwt.verify(token, secret, function (err, data) {
        if (err) return res.status(400).json({ erro: 'Falha ao autenticar token.' });
        req.token = token;
        req.data = data;
        next();
    });
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '/view/build/')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/usuario/cadastrar', async (req, res) => {
    try {
        const { email, senha, nome, tipo } = req.body;
        const result = await new Usuario(email, senha, nome, tipo).cadastrar();
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
});

app.post('/usuario/logar', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await new Usuario(email, senha).logar();
        const token = jwt.sign({ usuario }, secret)
        res.status(200).json({ usuario, auth: true, token });
    } catch (e) {
        res.status(403).json({ erro: e.message, auth: false });
    }
});

app.get('/usuario/', verifyJWT, async (req, res) => {
    try {
        const result = await new Usuario().buscar({ _id: req.data.usuario._id });
        res.status(200).json(result[0]);
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
});

app.post('/publicacao', verifyJWT, bd.enviarArquivo, async (req, res) => {
    try {
        const { titulo, texto } = req.body;
        const result = await new Usuario().publicar(titulo, texto, req.file.id, req.data.usuario._id);
        res.status(200).send(result);
    } catch (e) {
        res.json({ erro: e.message });
    }
});

// app.get('/publicacao', async (req, res) => {
//     const result = await bd.buscar('PUBLICACAO', {});
//     res.send(result);
// });

app.get('/publicacao/:busca', verifyJWT, async (req, res) => {
    try {
        const busca = req.params.busca;
        const query = { $or: [{ titulo: { $regex: busca, $options: 'i' } }, { texto: { $regex: busca, $options: 'i' } }] }
        const result = await new Publicacao().buscar(query);
        res.status(200).json(result);
    } catch (e) {
        res.json({ erro: e.message });
    }
});

// app.delete('/publicacao/:id', async (req, res) => {
//     const id = req.params.id;
//     const result = await bd.deletar('PUBLICACAO', { _id: new ObjectId(id) });
//     res.send(result);
// });

app.get("/arquivo/:_id", verifyJWT, bd.buscarArquivo);

app.listen(5000);

module.exports = app;