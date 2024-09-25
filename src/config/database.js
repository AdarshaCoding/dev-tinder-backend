const mogoose = require("mongoose");

//Get connection string from mongoDB
const connectDB = async () => {
  await mogoose.connect(
    "mongodb+srv://adarshapc4467:28oc2jwu31DguNMK@namastenode.hn59a.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
