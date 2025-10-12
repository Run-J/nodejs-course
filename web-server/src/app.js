const path = require('path')
const express = require('express')
const { title } = require('process')
const hbs = require('hbs')

const app = express()

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
 
// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Page',
        name: 'Run',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Run'
    })
})

app.get('/help', (req, res) => {
    res.render('Help', {
        title: 'Help page',
        name: 'Run',
        helpText: 'This is some helpful text',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloudy',
        location: 'Beijing',
    })
})

app.get('/help/*', (req, res) => {
    res.render('not-found', {
        title: '404',
        message: 'Help article not found',
        name: 'Run'
    })
})

app.get('*', (req, res) => {
    res.render('not-found', {
        title: '404',
        message: 'My 404 page',
        name: 'Run'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})