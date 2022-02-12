const express = require('express')
//const path = require('path')

const db = require('./database/db') // SE O NOME DO ARQUIVO NÃO FOR INDEX É NECESSÁRIO INFORMAR O NOME DO ARQUIVO JS
const routes = require('./routes')

const app = express()

// CONEXÃO COM O BANCO DE DADOS
db.connect()

// habilita server para receber dados no formato jason
app.use(express.json())

// definindo as rotas
app.use('/api', routes)
app.use('/', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))


