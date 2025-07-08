
const model = require('../../models/recipe')
const usermodel = require("../../models/user")
const multer = require("multer")
const { post } = require('../../routs/recipe')
const recipe = require('../../models/recipe')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})


exports.upload = multer({ storage: storage })




exports.getRecipes  =async (req,res)=>{
    
    const recipes = await model.find()
    
    return recipes? res.json({recipes:recipes}):res.json({message:"something wrong"})
    
} 
exports.seeRecipes  =async (req,res)=>{
    
    const recipes = await model.find()

    return recipes? res.json(recipes):res.json({msg:"something wrong"})
    
} 
exports.getRecipesbyId  =async (req,res)=>{
    
    const recipes = await model.find({_id:req.params.id})

    return recipes? res.json({recipes}):res.json({msg:"something wrong"})
    
} 
exports.addrecipe  =async(req,res)=>{
    console.log(req.body.idFromLocal)
    const{title,ingredients,instructions,time} = req.body;
    if (!title || !ingredients || !instructions){
       return res.json({message:'required field cant empty'})
    }
    
    const user = await model.create({
        title,
        userPost:req.body.idFromLocal,
        ingredients,
        instructions,
        time:time?time:"0min"
})
    const postUser =await usermodel.findOne({_id:req.body.idFromLocal})
    postUser.myPost.push(user)
    await postUser.save()

    //  showUser.myPost.push(user)
    //  await showUser.save()


   
     
  
 return res.status(200).json(user)

    


 
} 



exports.postrecipe= async (req,res)=>{
    const {title,ingredients,instructions,time} = req.body;
    if (!title || !ingredients || !instructions){
        res.send('all fields are required')
    }
   const newRecipe = await model.create({
    title,ingredients,instructions
   })
   return res.json({newRecipe})

}

exports.putrecipe= async (req,res)=>{
    const {title,ingredients,instructions,time} = req.body;
    let recipe = await model.findById(req.params.id)
    try{
            if (recipe){
        await model.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.json({title,ingredients,instructions,time}) }
    }
    catch(err){
        res.status(404).send(' not found')
        return;

    }
   
}

exports.deleterecipe= async (req,res)=>{
   try{
    await model.deleteOne({_id:req.params.id})

    res.status(200).json({message:"deleted successfully"})
   }catch(err){
    res.status(400).json({message:"recipe not found for delete"})
}
}