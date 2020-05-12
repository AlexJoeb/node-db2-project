// * Express
const express = require('express');
const server = express();

const cors = require('cors');

const db = require('./data/Database');

server.use(cors());
server.use(express.json());

server.get('/cars', (req, res) => {
    return db('cars').then(resp => res.status(200).json(resp)).catch(error => res.status(500).json(error))
});
server.post('/cars', (req, res) => {
    return db('cars').insert(req.body).then(resp => res.status(200).json(resp)).catch(error => res.status(500).json(error))
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server is running.`);
})