const express = require("express")
const {home}= require("../controller/api.js")

const route = express.Router()

route.get("/home" , home)

module.exports= route