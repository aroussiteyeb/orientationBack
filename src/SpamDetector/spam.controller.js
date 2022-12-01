const axios = require('axios').default;


exports.spam = async (req, res) => {

    let data = req.body
    console.log(data)

     axios.post('http://127.0.0.1:8000/predict', data)
    .then(function (response) {
      console.log(response.data);
      return res.send({
        success: response.data.data,
        message:
        response.data.message,
      });
    }) 
  
};


