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
  .then(() => console.log("you Connected to Mongodb w Jawek behi :)"))
  .catch((err) => console.log("you Failed to connect to Mongodb :(", err));
