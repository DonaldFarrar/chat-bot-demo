var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://us-zip-code-information.p.rapidapi.com/',
  params: {zipcode: '30043'},
  headers: {
    'x-rapidapi-host': 'us-zip-code-information.p.rapidapi.com',
    'x-rapidapi-key': '4aebd532b6msh3819f4cf9ce9832p159cd1jsnf8a23581c895'
  }
};

function getLocation() {
  axios
    .request(options)
    .then(function (response) {
      console.log("inside axios call: ", response.data);
      return response.data;
      
    })
    .catch(function (error) {
      console.error(error);
    });
}

// export const getAtmData = getLocation();
export default getLocation();