
require('./../database/database'); // conection

const User = require('./../models/User'); // model

async function createUser(){
    const newUser = new User({
        username: "danny",
        password: "phantom21"
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
}

createUser();