const mongoose = require('mongoose');
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.b98wy3j.mongodb.net/sample_airbnb`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true
    }
  )
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log(err));
