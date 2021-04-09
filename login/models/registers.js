const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    imageId:{
        type:String,
        required:true
    }
})

//create a collection {as table in SQL}

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;