const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoibm9kanMiLCJhIjoiY2t1aG84MGl1MTVqcjJ2dDlzcWcwNDllNyJ9._4_vtSGRslzcQYbCmNf4QA&limit=1";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find the location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
