const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const panierSchema = new Schema(
  {
    PanierId: { type: String, unique: true, required: true },
    UserId: { type: String, required: false },
    Filiers: [{IdFilier:{ type: String, required: true }, NameFiliers:{ type: String, required: true }}],
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const panier = mongoose.model("panier", panierSchema);
module.exports = panier;



