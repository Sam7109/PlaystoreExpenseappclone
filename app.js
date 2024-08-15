const express = require('express')


const body_parser = require('body-parser')
const app = express()

const path = require('path')
const sequelize  = require('./utils/sequelize')

app.use(body_parser.json())  

const port = 1200



    app.listen(port,() => {
            console.log(`Running on ${port}`)
    })


    app.use('/home', (req, res) => {
        res.sendFile(path.join(__dirname, 'view', 'homepage.html'));
    });
     