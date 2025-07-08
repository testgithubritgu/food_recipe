const express  =  require('express');
const { getRecipes, addrecipe, putrecipe, deleterecipe, upload, getRecipesbyId, seeRecipes } = require('../components/controllers_recipe/recipe');
const veryfyToken = require('../components/middelware/auth');
const router = express.Router()

router.get('/',getRecipes) // get all recipe
router.get('/data',seeRecipes) // get all recipe
router.get('/:id',getRecipesbyId) // get recipe by id
router.post('/', addrecipe)//add recipe
router.put('/:id', putrecipe) // edit recipe
router.delete('/:id',deleterecipe)//deletrecipe




module.exports = router