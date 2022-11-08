const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { array, number } = require("joi");
const Schema = mongoose.Schema;

const EtablisementSchema = new Schema(
  {
    etablisementId: { type: String, unique: true, required: true },
    nameEtablisement: { type: String, unique: true, required: true },
    position: { type: String, unique: true, required: true },
    rating: { type: String, unique: true, required: true },
    ville: { type: String, unique: true, required: true },
    region: { type: String, unique: true, required: true },
    description: { type: String, unique: true, required: true },
    avatar: { type: String,  required: true },
    type: { type: String,  required: true },
    galorie: [{path:{ type: String, required: true }}],
   
   
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const etablisement =mongoose.models.etablisement ||  mongoose.model("etablisement", EtablisementSchema);

module.exports = etablisement;



