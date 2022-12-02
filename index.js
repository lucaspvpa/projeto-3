const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const Usuario = require('./model/usuario');
const Publicacao = require('./model/publicacao');
const bd = require('./model/bd');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/view/build/')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/usuario', async (req, res) => {
    const { nome, email, senha } = req.body;
    const usuario = new Usuario(nome, email, senha);
    const result = await usuario.cadastrar();
    res.send(result);
});

app.post('/usuario/logar', async (req, res) => {
    const { email, senha } = req.body;
    const usuario = new Usuario(undefined, email, senha);
    const result = await usuario.logar();
    res.send(result);
});

app.post('/publicacao', async (req, res) => {
    const { titulo, texto, arquivo, autor } = req.body;
    const publicacao = new Publicacao(titulo, texto, arquivo, autor);
    const result = await publicacao.publicar();
    res.send(result);
});

app.get('/publicacao', async (req, res) => {
    const result = await bd.buscar('PUBLICACAO', {});
    res.send(result);
});

app.get('/publicacao/:busca', async (req, res) => {
    const busca = req.params.busca;
    const result = await bd.buscar('PUBLICACAO', { _id: new ObjectId(id) });
    res.send(result);
});

app.delete('/publicacao/:id', async (req, res) => {
    const id = req.params.id;
    const result = await bd.deletar('PUBLICACAO', { _id: new ObjectId(id) });
    res.send(result);
});

app.listen(5000, () => console.log(`http://localhost:5000/`));

module.exports = app;