const express = require('express')
const app = express()

const PORT = 8000;
// Js2bFlOsoetlNQNk

const customMiddleware = (req,res,next) =>{
    console.log("middleware working fine" )
    next()
}
app.use(customMiddleware)


app.get('/', (req,res)=>{
    console.log("test")
    res.send("hey there")
})


app.get('/about',customMiddleware, (req,res)=>{
    console.log("about")
    res.send("about page")
})




app.listen(PORT,()=> {
    console.log("server jawou behi", PORT)
})