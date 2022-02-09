const router = require('express').Router()
const ProductController = require('../Controller/products')

router.get('/products/:id?', ProductController.get)
    



module.exports = router