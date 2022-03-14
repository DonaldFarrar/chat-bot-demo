var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://kfc-locations.p.rapidapi.com/kfc/location/0",
  headers: {
    "x-rapidapi-host": "kfc-locations.p.rapidapi.com",
    "x-rapidapi-key": "50a940bfe9msh4b7acc0eab8aa9bp1bab77jsnc3342cb0f0dd",
  },
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