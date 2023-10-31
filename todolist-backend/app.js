const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // 이게 있어야 req.body가 객체로 인식됨
app.use(bodyParser.json()); // 이게 있어야 req.body가 객체로 인식됨

app.use("/api", indexRouter);
const mongoURI = process.env.MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("server on 5000");
});
