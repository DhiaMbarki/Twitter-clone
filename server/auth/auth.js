const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey");
});



router.post('/signup', (req,res)=> {
const{name,email,password} = req.body
if(!email || !password || !name) {
    res.json({error:"error, add all the fields"})
}
res.json({message:"you have successfuly posted"})
})

module.exports = router;
