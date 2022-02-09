const ProductsModel = require('../models/products')

async function get (req, res){
    const {id} = req.params

    const obj = id ? {_id: id} : null // O objeto tem um id? Se sim, atribui ao obj o objeto _id: id, caso contrário será nulo
    

    const products = await ProductsModel.find(obj)

    res.send(products)
}

module.exports = {
    get,
}

