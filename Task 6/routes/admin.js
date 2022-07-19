const express = require("express")
const router = express.Router()
const path = require('path')
const rootdir = require('../util/path')
router.get('/add-product',(req, res)=>{
 // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  res.sendFile(path.join(rootdir,'views','add-product.html'))
 })

 router.post('/add-product', (req, res)=>{
//     res.send(req.body)
//    console.log(req.body)
res.redirect('/')
 })


 module.exports = router