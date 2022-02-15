const ProductsModel = require('../models/products')

async function get (req, res){
    const {id} = req.params

    const obj = id ? {_id: id} : null // O objeto tem um id? Se sim, atribui ao obj o objeto _id: id, caso contrário será nulo
    

    const products = await ProductsModel.find(obj)

    res.send(products)
}


async function post (req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    console.log(req.body)

    const product = await new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()
    res.send({
        message: 'sucess'
    })
}

async function put (req, res){
    const {id} = req.params
    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, { new: true})
    res.send({
        message: 'Sucesss!',
        product,
    })
}



/* 
NESTE TRECHO DE CÓDIGO NÃO RETORNOU O ITEM ATUALIZADO AO POSTMAN, MAS RETORNOU AO COMPASS CORRETAMENTE 
async function put (req, res){
    const {id} = req.params
    const product = await ProductsModel.findOne({_id: id}) // pode ser também findByID
    await product.updateOne(req.body)
    res.send({
        message: 'Sucess!',
        product,
    })
}
 */

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id:id })

    const message = remove.ok? 'error!': 'sucess'

    res.send({
        message,
    })
}





module.exports = {
    get,
    post,
    put,
    remove,
}

