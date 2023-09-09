
import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient

const dbUri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.g4xuvug.mongodb.net/?retryWrites=true&w=majority`
let db

const port = 8000

MongoClient.connect(
    dbUri,
    {
        //the max amount of people that can be on at once
        maxPoolSize: 50,
        //the longest amount of time a connection can try to connect before it times out (25s)
        wtimeoutMS: 2500,
        //this is the url parser which breaks down a url into fragments
        useNewUrlParser: true
    },

    //This is a callback function that establishes a connection to a MongoDB server and handles the connection's results
    { useUnifiedTopology: true }, (err, client) => {
        if (err) return console.error(err);
        console.log('Connected to Database');
        db = client.db('GamesightDatabase');
    }
)

//this function is to begin the process of collection data from users when they register
app.post('/collectData', (req, res) => {
    const userInfo = req.body;
    
    db.collection('Users').insertOne(userInfo, (err, result) => {
        if (err) return res.sendStatus(500)
        res.sendStatus(200)
    })
})




//this is an async function which runs while other stuff runs
.then(async client => {
    //how you start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)// the ${port} is not working for some reason
    })
})