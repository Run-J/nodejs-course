const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?' +
                'access_key=9d6023f8febf1ba1eb7d7bcafb274402' +
                `&query=${latitude},${longitude}&units=f`

    // console.log(url);

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(`${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip} chance of rain.`)

            callback(undefined, {
                weatherDescriptions: response.body.current.weather_descriptions,
                currentTemperature: response.body.current.temperature,
                precipitation: response.body.current.precip,
            })
        }
    });
}

module.exports = forecast;