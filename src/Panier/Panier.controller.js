const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");



const panier = require("./Panier.modal");


const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.PanierPost = async (req, res) => {
  const user = await panier.findOne({ UserId: req.body.data.UserId });

  // NOT FOUND - Throw error
  if (!user) {
    try {
      const result = req.body
      if (result.error) {
        console.log(result.error.message);
        return res.json({
          error: true,
          status: 400,
          message: result.error.message,
        });
      }
      //Check if the email has been already registered.
   
  console.log("res",result.data)
      const id = uuid(); //Generate unique id for the user.
       result.data.PanierId = id;
      const newPanier= new panier(result.data);
      await newPanier.save();
  
      return res.status(200).json({
        success: true,
        message: "Filier Saved",
        
      });
    } catch (error) {
      console.error("signup-error", error);
      return res.status(500).json({
        error: true,
        message: "Cannot save",
      });
    }
  }
  else{
    try {
      console.log(req.body.data)
      var data={IdFilier:req.body.data.Filiers.IdFilier,NameFiliers:req.body.data.Filiers.NameFiliers}
      console.log(data)

      panier.findOneAndUpdate(
         { UserId: req.body.data.UserId }, 
          {$push:{Filiers:data}},
          
         ).exec(function(err, doc2) {
          if (err) res.send(err);
          else    
           res.json({ success: true,
            message: "Filier added to panier",});  // Will be called second.
           }  )
      
    } catch (error) {
      console.error("signup-error", error);
      return res.status(500).json({
        error: true,
        message: "Cannot save",
      });
      
    }
   
  }


};


/* exports.sectionGetAll = async (req, res) => {
    Section.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  }; */


  exports.panierGetById= async (req, res) => {
   
       
    try {
      const { UserId } = req.body;
      console.log(UserId)
      if (!UserId) {
        return res.send({
          status: 400,
          error: true,
          message: "Cannot be processed",
        });
      }
      const user = await panier.findOne({
        UserId: UserId,
      });
      if (!user) {
        return res.send({
          success: true,
          message:
            "Section not found",
        });
      }
      return res.send({
        success: true,
        data:user,
        message:
          "succes",
      });
    } catch (error) {
      console.error("forgot-password-error", error);
      return res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }  









