const express = require('express')
const cors = require('cors')


const db = require('./database/db') // SE O NOME DO ARQUIVO NÃO FOR INDEX É NECESSÁRIO INFORMAR O NOME DO ARQUIVO JS
const routes = require('./routes')

const app = express()

// CONEXÃO COM O BANCO DE DADOS
db.connect()

// HABILITA CORS
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

// habilita server para receber dados no formato jason
app.use(express.json())

// definindo as rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))


