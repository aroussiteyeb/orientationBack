const express = require("express");
const router = express.Router();


const simpleFiltring = require("../../src/filtring/simple.controller");

//router.post("/associationpePost", cleanBody, associationpeController.associationpePost);
router.post("/filter", simpleFiltring.simpleFiltring);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
