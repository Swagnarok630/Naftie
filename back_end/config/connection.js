const mongoose = require("mongoose"); 
require("dotenv").config();
console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
;

module.exports = mongoose.connection;


// const CONNECTION_URL =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naftie";
// const PORT = process.env.PORT || 5000;