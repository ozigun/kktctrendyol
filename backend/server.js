const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const port2 = process.env.PORT || 5002;
const port3 = process.env.PORT || 5003;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb successful");
});

const siparisRouter = require("./routes/siparis");

app.use("/siparisler", siparisRouter);

app.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});

app.get("/", (req, res) => {
  res.send("Hello World Siparis!");
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World user!");
});

const pricesRouter = require("./routes/prices");

app.use("/prices", pricesRouter);

app.listen(port3, () => {
  console.log(`Example app listening at http://localhost:${port3}`);
});

app.get("/", (req, res) => {
  res.send("Hello World prices!");
});
