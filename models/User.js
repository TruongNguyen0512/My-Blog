const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar : {
        type : String 
    }, 
    role : {
        type : Boolean , 
        enum : ['admin','user'] , 
        default : 'user' 
    }, 
    isActive :  {
        type : Boolean , 
        default : true  
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);