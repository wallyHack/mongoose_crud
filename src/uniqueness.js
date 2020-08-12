
require('./database/database'); // conection

const User = require('./models/User'); // model

async function createtUser(){
    const newUser = new User({
        username: "mary",
        password: "la orgullosa"        
    });

    const saveUser = await newUser.save();
    console.log(saveUser);
}

createtUser();