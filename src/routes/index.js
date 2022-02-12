const router = require('express').Router()
const ProductController = require('../Controller/products')
const IndexController = require('../controller/index')

router.get('/products/:id?', ProductController.get) 
router.post('/products', ProductController.post) // VAI RECEBER OS DADOS E CADASTRAR
router.put('/products/:id', ProductController.put)
router.move('/products/:id', ProductController.move)



router.get('/', IndexController.index)


module.exports = router


