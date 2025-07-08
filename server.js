const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const getRecipes = require('./routs/recipe')
const path = require("path")
const PORT = process.env.PORT || 3001
const cors = require('cors')
const cookie = require("cookie-parser")
require("dotenv").config()
const db_connect = require('./configue/connectionDB')
db_connect()
app.use(express.static(path.join( __dirname ,"public")))

app.use(cookie())





app.use(express.json())
app.use(express.urlencoded({extended:true}))


 
 



app.use(cors())
app.use('/recipe',getRecipes)
app.use('/',require('./routs/user'))



  



app.listen(3000,()=>{
    console.log(process.env.PORT)
})