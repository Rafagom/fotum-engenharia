const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(require("cors")());
app.use(bodyParser.json());
const upload = require("multer")();

app.post("/send", upload.single("anexo"), (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;

  (req, res) => {
    res.statusCode = 200;
    res.send({ email, username });
  };
});
