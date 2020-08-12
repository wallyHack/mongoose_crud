
require('./../database/database'); // conection

const Product = require('./../models/Product'); // model

// obtenemos todos los documentos(Registros) de la base de datos
async function getProducts(){
    const products = await Product.find();
    console.log(products);
}

getProducts();
