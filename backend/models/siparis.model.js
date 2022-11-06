const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const siparisSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    ilce: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Siparis = mongoose.model("Siparis", siparisSchema);

module.exports = Siparis;
