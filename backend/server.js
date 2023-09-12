require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')

//express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to app'})
})

//listen for requests
//process.env.PORT makes it so when pushing to github people cant see these variables that are made private
app.listen(process.env.PORT, () =>{
    console.log("listening on port", process.env.PORT)
});

process.env