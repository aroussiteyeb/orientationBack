//const Parcours = require("../Parcours/parcours.model");
//const Section = require("../Score/section.model");
//const AssoParcoursEtablissment = require("../AssociationParcourEtablisement/associationpe.model");
//const AssoEtablissmentFiliere = require("../AssociationFiliereEtablisement/associationfe.model");
//const Filiere = require("../Filiere/filiere.model");

//const resultSimple = require("../filtring/helpers/resultSimple.json");

var output = [];
global.output2 ;


exports.CalculeScore = async (req, res) => {
    console.log("tt",req.body)

try{
    const section=req.body.data.section
    
    var FG2=0
  var FG2
       const json=req.body.data.data.forEach(element => {
        const note=element.note
        const coif=element.coif
        const matiere=element.matieres
        const mg=element.mg

        FG1= 4*parseInt(mg)
        FG2=FG2+parseInt(coif)*parseInt(note)  

       });
      var FG=FG1+FG2
       console.log("fg",FG)
       
    console.log("ss",section) 

    return res.status(200).json({
        success: true,
        data :FG,
        message: "votre score est calcule",

      });
       
    }catch (error) {
        console.error("signup-error", error);
        return res.status(500).json({
          error: true,
          message: "Cannot save",
        });
      }
 
};


