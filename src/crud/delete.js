
require('./../database/database'); // conection

const User = require('./../models/User'); // model

async function deleteUser(){
    const result = await User.findOneAndDelete({
        username: "danny"
    });

    console.log(result);
}

deleteUser();