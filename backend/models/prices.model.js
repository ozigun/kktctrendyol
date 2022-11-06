const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pricesSchema = new Schema(
  {
    gumrukOrani: { type: String, required: true },
    turkiyeKargoBedeli: { type: String, required: true },
    adaKargoBedeli: { type: String, required: true },
    karOrani: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Prices = mongoose.model("Prices", pricesSchema);

module.exports = Prices;
