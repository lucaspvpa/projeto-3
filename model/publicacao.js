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
        if (this.titulo.length < 3) throw new Error('Título muito curto');
        if (this.texto.length < 3) throw new Error('Texto muito curto');
        if (!this.arquivo) throw new Error('Arquivo inválido');
        if (!this.autor) throw new Error('Autor inválido');
        const result = await bd.criar(colecao, this);
        if (result.acknowledged) return new Publicacao(this.titulo, this.texto, this.arquivo, this.autor, result.insertedId);
        throw new Error('Erro ao publicar');
    }

    async buscar(busca) {
        const result = await bd.buscar(colecao, busca);
        if (result.length == 0) throw new Error('Nenhuma publicação encontrada');
        const publicacoes = [];
        for (let i = 0; i < result.length; i++) {
            const publicacao = new Publicacao(result[i].titulo, result[i].texto, result[i].arquivo, result[i].autor, result[i]._id);
            publicacoes.push(publicacao);
        }
        return publicacoes;
    }

    async deletar(busca) {
        const result = await bd.deletar(colecao, busca);
        if (result.acknowledged) return result;
        throw new Error('Erro ao deletar');
    }
}
