require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//grabs all different routes attached to router in user.js and uses them in the app
app.use('/api/workouts', workoutRoutes)

//listen for requests
//process.env.PORT makes it so when pushing to github people cant see these variables that are made private
app.listen(process.env.PORT, () =>{
    console.log("listening on port", process.env.PORT)
});

process.env