const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/search/geocode/v6/forward?q=" 
        + encodeURIComponent(address) 
        + "&access_token=pk.eyJ1IjoicnVuLWoiLCJhIjoiY21nOHRoOTQ2MGJsOTJrcHR2Y3V0bmgybCJ9.BSU06na5LzFeZ8h9LcXunw&limit=1";
    
    // just to check the final URL
    // you can now use this url in fetch or reques
    // console.log(url); 

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            const longitude = response.body.features[0].geometry.coordinates[0];
            const latitude = response.body.features[0].geometry.coordinates[1];

            callback(undefined, {
                longitude: response.body.features[0].geometry.coordinates[0],
                latitude: response.body.features[0].geometry.coordinates[1],
                location: response.body.features[0].properties.full_address
            })
        }
    })
};




module.exports = geocode;