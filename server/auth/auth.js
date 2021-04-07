const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schema = mongoose.model("schema");
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "try to add your informations" });
  }
  schema
    .findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user is already exist!" });
      }
      bcrypt.hash(password, 15).then((hahedpassword) => {
        const user = new schema({
          email,
          password: hahedpassword,
          name
        });

        
        user.save()
          .then((user) => {
            res.json({ message: " data saved" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});



router.post('/signin',(req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
    res.status(422).json()
  }
})
module.exports = router;
