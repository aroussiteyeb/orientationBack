const express = require("express");
const router = express.Router();


const CalculeScoreController = require("../src/Score/CalculeScore.controller");



//router.post("/associationpePost", cleanBody, associationpeController.associationpePost);
router.post("/Score", CalculeScoreController.CalculeScore);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;