const express = require("express")
const router = express.Router()
const path = require('path')
const rootdir = require('../util/path')



 router.get('/success', (req, res)=>{ 
    console.log("success html is runing")
    console.log(path.join(rootdir,"views","success.html"))
   res.sendFile(path.join(rootdir,"views","success.html"))
 })


 module.exports = router