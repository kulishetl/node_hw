const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const config = require("./config/config");
const app = express();

app.use((req, res, next) => {
  const requestKey = req.get("Master-Key");
  const { masterKey } = config.auth;

  if (requestKey === masterKey) {
    next();
  } else {
    res.status(401).end();
  }
});

app.use(express.static(__dirname + "/view"));

app.use(bodyParser.json());

app.use("/", router);

app.listen(3000);

console.log("Running adress: http://localhost:3000");
