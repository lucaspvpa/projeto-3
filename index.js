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
    try {
        const { email, senha, nome, tipo } = req.body;
        const usuario = new Usuario(email, senha, nome, tipo);
        const result = await usuario.cadastrar();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
});

app.post('/usuario/logar', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = new Usuario(email, senha);
        const result = await usuario.logar();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ erro: e.message });
    }
});

app.post('/publicacao', async (req, res) => {
    try {
        const { titulo, texto, arquivo } = req.body;
        const autor = undefined
        // const publicacao = new Publicacao(titulo, texto, arquivo, autor);
        const result = await publicacao.publicar();
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
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


(async () => {
    try {
        console.log(
            // await new Usuario().deletarPublicacao('638a0ccfe16ca1acb08f64e3', '638a067596d14da319ae3a6c')
        )
    } catch (e) {
        console.log(e);
    }
})();

app.listen(5000);

module.exports = app;