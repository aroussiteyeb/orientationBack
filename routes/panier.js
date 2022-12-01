const express = require("express");
const router = express.Router();


const Panier = require("../src/Panier/Panier.controller");



//router.post("/associationpePost", cleanBody, associationpeController.associationpePost);
router.post("/PanierPost", Panier.PanierPost);

router.post("/panierGetById", Panier.panierGetById);



module.exports = router;