const bd = require('./bd')
const { ObjectId } = require('mongodb')
const colecao = 'PUBLICACAO'

module.exports = class Publicacao {
    constructor(titulo = undefined, texto = undefined, arquivo = undefined, autor = undefined, _id = undefined) {
        this.titulo = titulo;
        this.texto = texto;
        this.arquivo = arquivo;
        this.autor = autor;
        this._id = _id ? new ObjectId(_id) : _id;
    }

    async publicar() {
        const result = await bd.criar(colecao, this);
        console.log(result);
        return result;
    }

    async buscar(busca) {
        const result = await bd.buscar(colecao, busca);
        console.log(result);
        return result;
    }

    async deletar(busca) {
        const result = await bd.deletar(colecao, busca);
        console.log(result);
        return result;
    }
}
