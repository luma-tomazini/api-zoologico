import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { json } from 'stream/consumers';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave(10, 'Papagaio', 30, 'Masculino');
    let reptil: Reptil = new Reptil('Cicloides', 'Lagarto', 2, 'Femea');
    let mamifero: Mamifero = new Mamifero('Femea', 'Doberman', 102, 'Femea');
    res.json([ave, reptil, mamifero]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:/${port}`);
})

server.post('/ave', (req, res) => {
const { nome, idade, genero, envergadura } = req.body;
const novaAve = new Ave(nome, idade, genero, envergadura);
res.json(['Está é a nova ave do Zoologico', novaAve])
})

server.post(`/habitat`, (req, res) =>{
    const { nome, animais} = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json(`Habitat Criado`);
});

server.post(`/atracao`, (req, res) => {
    const { nome, habitat} = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json(`Atração criada`);
});

server.post(`/zoologico`, (req, res) => {
    const {nome, atracao} = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json(`Zoologico criado`);
});




