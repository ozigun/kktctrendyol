const router = require("express").Router();
let Prices = require("../models/prices.model");

router.route("/").get((req, res) => {
  Prices.find()
    .then((prices) => res.json(prices))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const gumrukOrani = req.body.gumrukOrani;
  const turkiyeKargoBedeli = req.body.turkiyeKargoBedeli;
  const adaKargoBedeli = req.body.adaKargoBedeli;
  const karOrani = req.body.karOrani;

  const newPrices = new Prices({
    gumrukOrani,
    turkiyeKargoBedeli,
    adaKargoBedeli,
    karOrani,
  });

  newPrices
    .save()
    .then(() => res.json("Prices added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Prices.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Prices.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").post((req, res) => {
  Prices.findById(req.params.id)
    .then((users) => {
      users.username = req.body.username;
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
