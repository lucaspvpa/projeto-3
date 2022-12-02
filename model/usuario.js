const bd = require('./bd')
const Publicacao = require('./publicacao')
const { ObjectId } = require('mongodb')
const colecao = 'USUARIO'

module.exports = class Usuario {
    constructor(nome = undefined, email = undefined, senha = undefined, _id = undefined) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this._id = _id ? new ObjectId(_id) : _id;
    }

    async cadastrar() {
        const result = await bd.criar(colecao, this);
        console.log(result);
        return result;
    }

    async logar() {
        const result = await bd.buscar(colecao, this);
        console.log(result);
        return result;
    }

    async buscar(busca) {
        const result = await bd.buscar(colecao, busca);
        console.log(result);
        return result;
    }

    async publicar(titulo, texto, arquivo) {
        const publicacao = new Publicacao(titulo, texto, arquivo, this._id);
        const result = await publicacao.publicar();
        console.log(result);
        return result;
    }
}