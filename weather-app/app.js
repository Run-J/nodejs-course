const { error } = require('console');
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('Beijing', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// })

forecast(116.391276, 39.906217, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})