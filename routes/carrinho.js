const express = require('express');
const router = express.Router();

let carrinho = [];

router.get('/', (req, res) => {
    res.json(carrinho);
});

router.post('/adicionar', (req, res) => {
    const { id, nome, preco, tamanho, quantidade } = req.body;
    
    const existente = carrinho.find(item => item.id === id && item.tamanho === tamanho);
    
    if (existente) {
        existente.quantidade += quantidade || 1;
    } else {
        carrinho.push({ id, nome, preco, tamanho: tamanho || 'M', quantidade: quantidade || 1 });
    }
    
    res.json({ mensagem: '✅ Item adicionado!', carrinho });
});

router.delete('/remover/:id', (req, res) => {
    const { id } = req.params;
    carrinho = carrinho.filter(item => item.id !== id);
    res.json({ mensagem: '🗑️ Item removido!', carrinho });
});

router.delete('/limpar', (req, res) => {
    carrinho = [];
    res.json({ mensagem: '🧹 Carrinho limpo!', carrinho });
});

module.exports = router;
