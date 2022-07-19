const path = require('path')
const express = require("express")
const rootdir = require('../util/path')
const router = express.Router()



router.get('/',(req, res)=>{
    // res.sendFile(path.join(__dirname,'../', 'views','shop.html'))
    res.sendFile(path.join(rootdir, 'views','shop.html'))
    // console.log("shop sendfiel",path.join(__dirname,'../', 'views','shop.html'))
    // console.log("shop sendfile without ../ ",path.join(__dirname, 'views','shop.html'))
    // console.log("shop dir",__dirname)
})

module.exports = router;





