const express = require("express")
const router = express.Router()
const path = require('path')
const rootdir = require('../util/path')

router.get('/contactus',(req, res)=>{
 
  res.sendFile(path.join(rootdir,'views','contact.html'))
 })

 router.post('/contactus', (req, res)=>{ 
    res.sendFile(path.join(rootdir,"views","success.html"))  // by direct to success page
    // res.redirect('/success') // by redirect to success page
 })


 module.exports = router