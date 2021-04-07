const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const { MONGOURI } = require("./mongo");



mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo with successfully :)");
});
mongoose.connection.on("ERROR", (error) => {
  console.log("there is error :( ", error);
});


require('./models/schema')
require('./models/post')


app.use(express.json())

app.use(require('./path/auth'))
app.use(require('./path/post'))



app.listen(PORT, () => {
  console.log("server jawou behi", PORT);
});
