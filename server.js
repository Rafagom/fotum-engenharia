const path = require("path");
const express = require("express");
const { json } = require("express/lib/response");

const app = express();

app.use(require("cors")());
app.use(express.json());

const upload = require("multer")();
app.post("/send", upload.single("anexo"), (req, res, next) => {
  const username = req.body.username;
  // console.log({ username, email });
  const email = req.body.email;
  const subject = req.body.subject;
  const cost = req.body.cost;
  const message = req.body.message;
  const anexo = req.file;
  // console.log({ username, email, subject, cost, message, anexo });

  require("./src/services/mailService.js")(
    email,
    username,
    message,
    cost,
    subject,
    anexo
  )
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
});

app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, () => console.log("server start"));
