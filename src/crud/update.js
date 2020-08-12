
require('./../database/database'); // conection

const User = require('./../models/User'); // model

// funcion que busca y actualiza un documento en mongo
// const someFunction = async ()=>{
//    const user = await User.findOneAndUpdate({
//         username: "Chino"
//     }, {
//         name: "Chino Antrax"
//     }, {new: true});

//     console.log(user);
// }

// función que actualiza un documento en mongo
async function updateUser(){
    const user = await User.updateOne({
        username: "danny"
    }, {
        password: "danny el calacas"
    });

    console.log(user);
}

updateUser();
// someFunction();