// const mongoose = require("mongoose"); //obj data model,help connect our server to mongodb server

// mongoose
//   .connect("mongodb://127.0.0:27017/ISSUE_TRACKER_DEVELOPMENT")

const mongoose = require("mongoose"); //server connect to mongodb ,(odm)

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1/ISSUE_TRACKER_DEVELOPMENT");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error while connecting to db"));
db.once("open", function () {
  console.log("db is running fine.......");
});

module.exports = db;
