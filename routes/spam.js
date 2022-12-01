const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");

const spamController = require("../src/SpamDetector/spam.controller");


router.post("/predict", cleanBody, spamController.spam);
//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;