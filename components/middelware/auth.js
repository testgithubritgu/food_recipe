const  jwt = require("jsonwebtoken")

exports.veryfyToken = (req,res,next)=>{
    const token = req.headers["authorization"]
    if (token){
        jwt.verify(token,"swapnil",(err,decode)=>{
            if (err){
                return res.status(400).json({message:"invalide crediential"})
            }
            console.log(decode)
            req.user = decode
        })
        next()
    }
    else{
        return res.status(400).json({message:"invalid token"})
    }




}