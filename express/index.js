import app from "./app.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient

//WARNING: I included the password and username for the database 
//in the code below you are NOT supposed to do this the main reason
//I did it was for simplicity purposes. The way you would do it safley 
//is by creating a "system environemnt variable" and use that instead 
//for the password and username in the future

const mongo_username = gamesight
const mongo_password = jakestarandy
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.g4xuvug.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

MongoClient.connect(
    uri,
    {
        //the max amount of people that can be on at once
        maxPoolSize: 50,
        //the longest amount of time a connection can try to connect before it times out (25s)
        wtimeoutMS: 2500,
        //this some mongodb stuff (idk)
        useNewUrlParser: true
    }
)
//this deals with errors that may happen
.catch(err => {
    //this tells the console that there is an error
    console.error(err.stack)
    //this ends the program
    process.exit(1)
})
//this is an async function which runs while other stuff runs
.then(async client => {
    //how you start the server
    app.listen(port, () => {
        console.log('listening on port ' + port)// the ${port} is not working for some reason
    })
})