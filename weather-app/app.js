const { error } = require('console');
const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=9d6023f8febf1ba1eb7d7bcafb274402&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(`${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip} chance of rain.`)
//     }
// });


// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL = "https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoicnVuLWoiLCJhIjoiY21nOHRoOTQ2MGJsOTJrcHR2Y3V0bmgybCJ9.BSU06na5LzFeZ8h9LcXunw&limit=1";

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location. Try another search');
//     } else {
//         const longtitude = response.body.features[0].geometry.coordinates[0];
//         const latitude = response.body.features[0].geometry.coordinates[1];

//         console.log(`longtitude: ${longtitude}`);
//         console.log(`latitude: ${latitude}`);
//     }
// })



geocode('Beijing', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})