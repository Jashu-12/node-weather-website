const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=883ed3a5c4b704daf3ff73c5ea018687&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the server", undefined);
    } else if (response.body.error) {
      callback("Coordinates error", undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        description: response.body.current.weather_descriptions[0],
        feelslike: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;