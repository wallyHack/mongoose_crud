
require('./database/database');

const Product = require('./models/Product');

const newProducto = new Product({
    name: "jumex",
    description: "sabor uva",
    price: 45
});

newProducto.save((error, document) =>{
    if(error) console.log(error);
    console.log(document);
});

console.log(newProducto);