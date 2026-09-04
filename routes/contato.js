const express = require('express');
const router = express.Router();

let mensagens = [];

router.post('/enviar', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;
    
    if (!nome || !email || !mensagem) {
        return res.status(400).json({ erro: '❌ Preencha todos os campos!' });
    }
    
    const novaMensagem = {
        id: Date.now().toString(),
        nome,
        email,
        assunto: assunto || 'Sem assunto',
        mensagem,
        data: new Date().toLocaleString('pt-BR')
    };
    
    mensagens.push(novaMensagem);
    console.log(`📩 Mensagem de ${nome}: ${mensagem}`);
    
    res.json({ mensagem: '✅ Mensagem enviada com sucesso!' });
});

module.exports = router;