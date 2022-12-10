const bd = require('./bd')
const Publicacao = require('./publicacao')
const { ObjectId } = require('mongodb')
const colecao = 'USUARIO'

module.exports = class Usuario {
    constructor(email = undefined, senha = undefined, nome = undefined, tipo = undefined, visualizacoes = 0, _id = undefined) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.tipo = tipo;
        this.visualizacoes = visualizacoes;
        this._id = _id ? new ObjectId(_id) : _id;
    }

    async cadastrar() {
        if (this.nome.length == 0) throw new Error('Nome inválido');
        if (this.email.length == 0) throw new Error('Email inválido');
        if (this.senha.length < 3) throw new Error('Senha muito curta');
        if (this.tipo != 'usuario' && this.tipo != 'admin') throw new Error('Tipo inválido');
        let result
        try {
            result = await this.buscar({ email: this.email });
            if (result.length > 0) throw new Error('Email já cadastrado');
        } catch (e) {
            if (e.message != 'Nenhum usuário encontrado') throw e;
        }
        result = await bd.criar(colecao, this);
        if (result.acknowledged) {
            const usuario = new Usuario(this.email, this.senha, this.nome, this.tipo, this.visualizacoes, result.insertedId);
            delete usuario.senha;
            return usuario;
        }
        throw new Error('Erro ao cadastrar usuário');
    }

    async logar() {
        if (this.email.length == 0) throw new Error('Email inválido');
        if (this.senha.length < 3) throw new Error('Senha muito curta');
        const result = await bd.buscar(colecao, { email: this.email, senha: this.senha });
        if (result.length == 0) throw new Error('Email ou senha inválidos');

        const usuario = new Usuario(result[0].email, result[0].senha, result[0].nome, result[0].tipo, result[0].visualizacoes, result[0]._id);
        delete usuario.senha;
        const publicacoes = await new Publicacao().buscar({ autor: usuario._id });
        return { usuario, publicacoes: publicacoes.length };
    }

    async buscar(busca) {
        if (busca._id && typeof busca._id != ObjectId) busca._id = new ObjectId(busca._id);
        const result = await bd.buscar(colecao, busca);
        if (result.length == 0) throw new Error('Nenhum usuário encontrado');
        const usuarios = [];
        for (let i = 0; i < result.length; i++) {
            const usuario = new Usuario(result[i].email, result[i].senha, result[i].nome, result[i].tipo, result[i].visualizacoes, result[i]._id);
            const publicacoes = await new Publicacao().buscar({ autor: usuario._id });
            delete usuario.senha;
            usuarios.push({ usuario, publicacoes: publicacoes.length });
        }
        return usuarios;
    }

    async publicar(titulo, texto, arquivo, _id = this._id) {
        if (!_id) throw new Error('Usuário inválido');
        if (typeof _id != ObjectId) _id = new ObjectId(_id);
        const user = await this.buscar({ _id });
        if (user.length == 0) throw new Error('Usuário não encontrado');
        if (user[0].usuario.tipo !== 'admin') throw new Error('Usuário não autorizado')
        const result = await new Publicacao(titulo, texto, arquivo, _id).publicar();
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
    async adicionarVisualizacao(_id = this._id, quantidade) {
        if (!_id) throw new Error('Usuário inválido');
        if (typeof _id != ObjectId) _id = new ObjectId(_id);
        if (typeof quantidade != 'number') throw new Error('Quantidade inválida');
        const result = await bd.atualizar(colecao, { _id }, { $inc: { visualizacoes: quantidade } });
        if (result.modifiedCount == 0) throw new Error('Usuário não encontrado');
        if (result.modifiedCount == 1) return true;
    }
}