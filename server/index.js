const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("../config");

const app = express();

mongoose.connect(
  config.mongoURI,
  { userNewUrlParser: true }
);

mongoose.connection
  .once('open', () => console.log("Connecté a la base"))
  .on('error', error => console.log("Erreur de connexion à Mlab :", error));

app.use(cors());
app.use(bodyParser.json({type: "*/*"}));

require("./route")(app);

app.listen(4000);
