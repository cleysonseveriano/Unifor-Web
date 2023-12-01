const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importe o pacote cors
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000; // O programa vai rodar na porta 3000
const Aluno = mongoose.model('Aluno',{
    nome: String,
    idade: Number, 
    matricula: String
});

// Verbos HTTP
app.get('/', async (req,res) => {
    const alunos = await Aluno.find();
    res.send(alunos);
});

app.delete("/:id", async (req,res) => {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    return res.send(aluno);
});

app.put('/:id', async (req,res) => {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        idade: req.body.idade,
        matricula: req.body.matricula
    }, {
        new: true
    });
    return res.send(aluno);
});

app.post('/', async (req,res) => {
    const aluno = new Aluno({
        nome: req.body.nome,
        idade: req.body.idade,
        matricula: req.body.matricula
    });

    await aluno.save();
    res.send(aluno);
});

const DB_PASSWORD = ''
app.listen(port, () => {
    mongoose.connect(`mongodb+srv://cleysontab:${DB_PASSWORD}@uniforweb-api.heqjtce.mongodb.net/?retryWrites=true&w=majority`);
    console.log('App is running...')
});