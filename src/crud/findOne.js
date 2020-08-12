 
require('./../database/database'); // conection

const User = require('./../models/User'); // model

// obtenemos un solo documento(registro) de la db
async function getUser(){
    const user = await User.findOne({
        username: "danny"
    });
    console.log(user);
}

getUser(); 
