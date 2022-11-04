const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 5000;

const authRoutes = require("./routes/users");
const score = require("./routes/sections");
const Etablisement = require("./routes/etablisement");
const filiere = require("./routes/filiere");
const domaine = require("./routes/domaine");
const parcours = require("./routes/parcours");
const associationfe = require("./routes/associationfe");
const associationpe = require("./routes/associationpe");
const simpleFiltring = require("./routes/Filtring/simple");
const CalculeScore = require("./routes/Score");







mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "orienation",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.use("/users", authRoutes);
app.use("/section", score);
app.use("/etablisement", Etablisement);
app.use("/filiere", filiere);
app.use("/domaine", domaine);
app.use("/parcours", parcours);
app.use("/associationfe", associationfe);
app.use("/associationpe", associationpe);
app.use('/simpleFiltring',simpleFiltring);
app.use('/CalculeScore',CalculeScore);
//app.post('/advencedFiltring',advencedFiltring); //new user



app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});
