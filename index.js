const express = require("express")
const app = express(
)
require("dotenv").config()

const route = require("./routes/route.js")
 


//Routes 

app.get("/" , (req , res)=>{
    res.send("This is a  Free Route")
})

//Middlewares
app.use("/api" , route)





//Listners
const PORT = process.env.PORT || 6025
app.listen(PORT , (req , res)=>{
    console.log(`Server Started at http://localhost:${PORT}`)
})