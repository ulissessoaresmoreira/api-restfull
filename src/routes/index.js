const router = require('express').Router()
const ProductController = require('../Controller/products')

router.get('/products/:id?', ProductController.get) 
router.post('/products', ProductController.post) // VAI RECEBER OS DADOS E CADASTRAR
router.put('/products/:id', ProductController.put)
router.del('/products/:id', ProductController.del)


module.exports = router