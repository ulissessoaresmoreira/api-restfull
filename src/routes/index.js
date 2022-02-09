const router = require('express').Router()
const ProductController = require('../Controller/products')

router.get('/products', ProductController.get)
    



module.exports = router