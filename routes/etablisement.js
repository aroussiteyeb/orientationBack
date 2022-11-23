const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const EtablisementController = require("../src/etablisement/etablisement.controller");


router.post("/EtablisementPost", cleanBody, EtablisementController.EtablisementPost);
router.get("/etablisementGetAll", EtablisementController.etablisementGetAll);

//router.get("/sectionGetByName", SectionController.sectionGetByName);



module.exports = router;
