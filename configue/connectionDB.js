

const mongoose = require('mongoose');



const connectDB = async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log("DB connected")
    })
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














