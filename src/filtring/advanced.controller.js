const Parcours = require("../Parcours/parcours.model");
const Etablissment = require("../etablisement/etablisement.model");
const AssoParcoursEtablissment = require("../AssociationParcourEtablisement/associationpe.model");
const AssoEtablissmentFiliere = require("../AssociationFiliereEtablisement/associationfe.model");
const Filiere = require("../Filiere/filiere.model");
const Domaine = require("../Domaine/domaine.model");


const resultSimple = require("../filtring/helpers/resultSimple.json");
const { string } = require("joi");
//let  output2 = require("../filtring/helpers/output.json");
var output2 = { etablissment: [], parcours: [], fileires: []  }
var finalResult ;
var response ;
var responsesucess = {  success: true, data: '', message: "data loaded", }
var responseerror = {   error: true,status: 400, message: 'no data exist ', }


exports.advencedFiltring = async (req, res) => {

  try {
    
    /* await Etablissment.updateMany(
      {
        etablisementId: '2562bc92-8d96-4528-a130-c082a06c031f'
      },
      {
        $set: {avatar: 'ssdf' },
       
      },
      {
        upsert: true
      }
    );
       */
    //fetch parcours
    var result = await Parcours.find({ 'typeBac.score': req.body.score, 'typeBac.type': req.body.type });

    if (result.length > 0) {
var output = [];

      for (let index = 0; index < result.length; index++) {
        // fetch table asso parcours etablissment
        const parcour = result[index];

        AssoParcoursEtablissment.find({ parcourId: parcour.parcoursId }).then(value => {
          // console.log("test simple parcours", element.parcoursId)

          value.forEach(async assoPE => {

            // fetch  etablismment 

            var resultEablissment = await Etablissment.find({ etablisementId: assoPE.etablisementId ,ville: req.body.place , type:req.body.universityType}).then(etablissments => {
                if(etablissments.length > 0)
                {
                    etablissments.forEach(etablissment => {
                        // fetch table asso etablissment filiere 
        
                        AssoEtablissmentFiliere.find({ etablisementId: etablissment.etablisementId }).then((value) => {
                          value.forEach(assoEF => {
        
                            //fetch filieres
        
                            Filiere.find({ filiereId: assoEF.filiereId }).then((filieres) => {
        
                              //fetch domaine
        
                              filieres.forEach(filiere => {
                                Domaine.find({ domaineId: filiere.domaineId , namedomaine:req.body.domaine }).then((domaine) => {
                                    if(domaine.length > 0)
                                    {
                                        output2.etablissment.push(etablissment)
                                        output2.parcours.push(parcour)
                                        output2.fileires.push(filieres)
                                        const res = output2.fileires.map( (data, index) => ({...data, domaine:domaine}) );
                                        output2.fileires = res 
                                        output.push(output2)
                                        output2 = { etablissment: [], parcours: [], fileires: []  }
                                        finalResult = output
                                        responsesucess.data = finalResult
                                        response = responsesucess
                                        console.log(response)

                                    }
                                    else
                                    {
                                   response = responseerror
                                  console.log(response)

                                   
                                    }
                                
        
                                });
                                
                              });
                         
        
        
                            })
        
                          });
        
                        })
        
        
                      });
                }else
                {
                    response = responseerror
                    console.log(response)


                    
                }
              

            })

          });

        })


      };


      return res.status(200).json({
        response

      });
    } else {
      return res.json({
        error: true,
        status: 400,
        message: 'no data exist ',
      });
    }

    

  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


