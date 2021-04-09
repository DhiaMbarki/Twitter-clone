const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../mongo')
const mongoose = require('mongoose')
const schema = mongoose.model("schema")
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer jdhvijfhjighfh
    if(!authorization){
      return res.status(401).json({error:"you should be logged in"})
    }
  const token =  authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err) {
         return  res.status(401).json({error:"you should be logged in"})
        }

        const {_id} = payload
        schema.findById(_id).then(userdata=>{
            req.user = userdata
            next()

        })
    })
}