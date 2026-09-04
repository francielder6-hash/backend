const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/carrinho', require('./routes/carrinho'));
app.use('/api/contato', require('./routes/contato'));
app.use('/api/produtos', require('./routes/produtos'));

app.get('/api/health', (req, res) => {
    res.json({
        status: 'Servidor rodando! 🚀',
        mensagem: 'Backend do Trajado funcionando!'
    });
});

app.get('/', (req, res) => {
    res.json({
        nome: 'API Trajado',
        versao: '1.0.0',
        rotas: {
            produtos: '/api/produtos',
            carrinho: '/api/carrinho',
            contato: '/api/contato',
            health: '/api/health'
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`🛒 Carrinho: http://localhost:${PORT}/api/carrinho`);
    console.log(`📧 Contato: http://localhost:${PORT}/api/contato`);
    console.log(`📦 Produtos: http://localhost:${PORT}/api/produtos`);
    console.log(`🧪 Teste: http://localhost:${PORT}/api/health`);
});