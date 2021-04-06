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

const customMiddleware = (req, res, next) => {
  console.log("middleware working fine");
  next();
};
app.use(customMiddleware);

app.get("/", (req, res) => {
  console.log("test");
  res.send("hey there");
});

app.get("/about", customMiddleware, (req, res) => {
  console.log("about");
  res.send("about page");
});

app.listen(PORT, () => {
  console.log("server jawou behi", PORT);
});
