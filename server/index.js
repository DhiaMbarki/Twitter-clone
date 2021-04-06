const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const { MONGOURI } = require("./mongo");

require('./models/schema')
app.use(express.json())

app.use(require('./auth/auth'))

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



app.listen(PORT, () => {
  console.log("server jawou behi", PORT);
});
