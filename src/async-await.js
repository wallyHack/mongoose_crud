
require('./database/database'); // conection

const Product = require('./models/Product'); // model

async function insertProduct(){
    const newProducto = new Product({
        name: "pepsi",
        description: "de 600 ml",
        price: 41
    });

    const productSaved = await newProducto.save();
    console.log(productSaved);
}   

insertProduct()
.then(productSaved => console.log(productSaved))
.catch(err => console.log(err))