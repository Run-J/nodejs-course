const path = require('path')
const express = require('express')
const { title } = require('process')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

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
        helpText: 'This is some helpful text',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloudy',
        location: 'Beijing',
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})