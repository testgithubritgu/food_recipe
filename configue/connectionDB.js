

const mongoose = require('mongoose');



const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://swapnilraut1698:J8Ppz7vlWGPlIUpn@cluster0.7hjsuvq.mongodb.net/recipe_find?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB connected")
}

module.exports = connectDB;


// const user = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     ingredients:{
//         type:String,
//         required:true
//     },
//     instructions:{
//         type:String,
//         required:true
//     },
//     time:{
//         type:String,
      
//     },
//     coverImage:{
//         type:String,
      
//     },
// })
// module.exports = mongoose.model('recipe',user)














