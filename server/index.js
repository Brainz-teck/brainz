const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));

app.get("*.jsx", (req, res, next) => {
  res.set("Content-Type", "text/javascript");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "index.html"));
});
app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Middleware Server listening at ${process.env.PORT || 8080}... 👍`
  );
});
