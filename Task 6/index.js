const path = require('path')
const express = require('express')
const app = express()
const adminRoute = require("./routes/admin")
const shopRoute = require("./routes/shop")
const successRoute = require("./routes/success")
const contactRoute = require("./routes/contactus")
// servere css file with help of "express static"
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRoute)
app.use(shopRoute)
app.use(contactRoute)
app.use(successRoute)
 const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))

app.use((req,res)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  //console.log(path.join(__dirname,'../','views','404.html'))
   //console.log(path.join(__dirname,'views','404.html')) //this is right
 })
 app.listen(3000, ()=>{
    console.log("index dir",__dirname)
 })

