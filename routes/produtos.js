const express = require('express');
const router = express.Router();

const produtos = [
    { id: '1', nome: 'Camisa Social', categoria: 'masculino', preco: 89.90 },
    { id: '2', nome: 'Vestido Floral', categoria: 'feminino', preco: 149.90 },
    { id: '3', nome: 'Relógio Prata', categoria: 'acessorios', preco: 199.90 }
];

router.get('/', (req, res) => {
    res.json(produtos);
});

router.get('/categoria/:categoria', (req, res) => {
    const { categoria } = req.params;
    const filtrados = produtos.filter(p => p.categoria === categoria);
    res.json(filtrados);
});

module.exports = router;
