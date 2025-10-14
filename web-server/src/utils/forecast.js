const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?' +
                'access_key=9d6023f8febf1ba1eb7d7bcafb274402' +
                `&query=${latitude},${longitude}&units=f`

    // console.log(url);

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(`${body.current.weather_descriptions}. It is currently ${body.current.temperature} degress out. There is a ${body.current.precip} chance of rain.`)

            callback(undefined, 
                `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degress out. There is a ${body.current.precip} chance of rain.`
            )
        }
    });
}

module.exports = forecast;