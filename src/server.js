const express = require('express')
//const path = require('path')

//const db = require('./database') // NÃO PRECISA INFORMAR O NOME DO ARQUIVO INDEX
const routes = require('./routes')

const app = express()

// CONEXÃO COM O BANCO DE DADOS
//db.connect()

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}))

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))