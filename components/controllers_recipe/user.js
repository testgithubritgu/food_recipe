
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../../models/user');
const dotenv = require('dotenv').config()

exports.userSignup = async (req,res)=>{
    
    const {email,password} = req.body;
    if (!email || !password){
        return res.status(400).json({message:'all fields are required'})
    }
    let Users =await user.findOne({email})
    if (Users){
        return res.status(400).json({message:'email is already exist'})
  
    } 
//   let createduser =   bcrypt.genSalt(10,  (err,salt)=>{
//         bcrypt.hash(password,salt,async (err,hash)=>{
//             const newUser =  user.create({
//                 email,
//                 password:hash})})})
    const hashPWD = await bcrypt.hash(password,10)
    const newUser = await user.create({
        email,
        password:hashPWD


    })
    let token = jwt.sign({email,id:newUser._id},"swapnil")
    req.user = newUser
    res.json({user:newUser,token})
}

exports.userlogin = async (req,res)=>{
    const {email,password} = req.body;
    if (!email || !password){
        return res.status(400).json({message:"email and password is required"})
    
    }
    let existUser = await user.findOne({email}) 
    if(existUser && await bcrypt.compare(password,existUser.password)){
        let token = jwt.sign({email,id:existUser._id},"swapnil")


        return res.status(200).json({token,user:existUser})
    }
    else{
        return res.status(400).json({error:"invalid credientials"})
    }


}

exports.getUser = async (req,res)=>{
    const user1 = await user.findById({_id:req.params.id})
    res.send({find_user:user1})

}