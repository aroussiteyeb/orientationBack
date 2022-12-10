const express = require("express");
const router = express.Router();


const advencedFiltring = require("../../src/filtring/advanced.controller");

//router.post("/associationpePost", cleanBody, associationpeController.associationpePost);
router.post("/filter", advencedFiltring.advencedFiltring);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
