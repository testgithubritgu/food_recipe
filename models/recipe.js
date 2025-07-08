const mongoose = require("mongoose");

const recipe = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    userPost:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    ingredients:{
        type:Array,
        required:true
    },

    instructions:{
        type:String,
        required:true
    },

    time:{
        type:String,
       
    },

    coverImage:{
        type:String,
    
    }

    
},{timestamps:true})
module.exports = mongoose.model('recipe',recipe)






