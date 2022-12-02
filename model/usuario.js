const bd = require('./bd')
const Publicacao = require('./publicacao')
const { ObjectId } = require('mongodb')
const colecao = 'USUARIO'

module.exports = class Usuario {
    constructor(email = undefined, senha = undefined, nome = undefined, tipo = undefined, _id = undefined) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.tipo = tipo
        this._id = _id ? new ObjectId(_id) : _id;
    }

    async cadastrar() {
        if (this.nome.length == 0) throw new Error('Nome inválido');
        if (this.email.length == 0) throw new Error('Email inválido');
        if (this.senha.length < 3) throw new Error('Senha muito curta');
        if (this.tipo != 'usuario' && this.tipo != 'admin') throw new Error('Tipo inválido');
        let result = await this.buscar({ email: this.email });
        if (result.length > 0) throw new Error('Email já cadastrado');
        result = await bd.criar(colecao, this);
        if (result.acknowledged) return new Usuario(this.email, this.senha, this.nome, this.tipo, result.insertedId);

        throw new Error('Erro ao cadastrar usuário');
    }

    async logar() {
        if (this.email.length == 0) throw new Error('Email inválido');
        if (this.senha.length < 3) throw new Error('Senha muito curta');
        const result = await bd.buscar(colecao, { email: this.email, senha: this.senha });
        if (result.length == 0) throw new Error('Email ou senha inválidos');

        const usuario = new Usuario(result[0].email, result[0].senha, result[0].nome, result[0].tipo, result[0]._id);
        delete usuario.senha;
        return usuario;
    }

    async buscar(busca) {
        const result = await bd.buscar(colecao, busca);
        if (result.length == 0) throw new Error('Nenhum usuário encontrado');
        const usuarios = [];
        for (let i = 0; i < result.length; i++) {
            const usuario = new Usuario(result[i].email, result[i].senha, result[i].nome, result[i].tipo, result[i]._id);
            delete usuario.senha;
            usuarios.push(usuario);
        }
        return usuarios;
    }

    async publicar(titulo, texto, arquivo, _id = this._id) {
        if (!_id) throw new Error('Usuário inválido');
        if (typeof _id != ObjectId) _id = new ObjectId(_id);
        const publicacao = new Publicacao(titulo, texto, arquivo, _id);
        const result = await publicacao.publicar();
        return result;
    }
    async deletarPublicacao(_idPublicacao, _id = this._id) {
        if (!_id) throw new Error('Usuário inválido');
        if (typeof _id != ObjectId) _id = new ObjectId(_id);
        if (!_idPublicacao) throw new Error('Publicação inválida');
        if (typeof _idPublicacao != ObjectId) _idPublicacao = new ObjectId(_idPublicacao);
        const result = await new Publicacao().deletar({ _id: _idPublicacao, autor: _id });
        if (result.deletedCount == 0) throw new Error('Publicação não encontrada');
        if (result.deletedCount == 1) return true;
    }
}