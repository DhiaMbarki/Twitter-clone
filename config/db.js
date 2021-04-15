const mongoose = require("mongoose");

mongoose
  .connect(
     process.env.DB_USER_PASS ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB wjawou behi :)"))
  .catch((err) => console.log("Failed to connect to MongoDB :(", err));
