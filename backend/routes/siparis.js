const router = require("express").Router();
let Siparis = require("../models/siparis.model");

router.route("/").get((req, res) => {
  Siparis.find()
    .then((siparisler) => res.json(siparisler))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const username = req.body.username;
  const ilce = req.body.ilce;
  const address = req.body.address;
  const phone = req.body.phone;

  const newSiparis = new Siparis({
    name,
    surname,
    username,
    ilce,
    address,
    phone,
  });

  newSiparis
    .save()
    .then(() => res.json("Siparis added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Siparis.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Siparis.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").post((req, res) => {
  Siparis.findById(req.params.id)
    .then((users) => {
      users.username = req.body.username;
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
