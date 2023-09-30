// Import necessary Node.js modules
const express = require("express"); // Import Express.js to create a web server
// const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const cors = require("cors"); // Import Cors for handling Cross-Origin Resource Sharing
// const UserModel = require("./model/Users"); // Import the User model from the models/users.js file
const https = require("https");

// Create an instance of the Express.js application
const app = express();

// Middleware setup:
app.use(express.json()); // Parse JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable Cross-Origin Resource Sharing to allow requests from other domains

app.post("/fetch-steam-data", (req, res) => {
    try {
        //let steamdID = req.body.steamID; In this case we request data from the front end essentially asking the user for their Steam ID the storing value into this variable
        const profileID = 76561198086529570;
        const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=F3870D737164C4E9C5156BA53161AF93&steamid=${profileID}&format=json`;
        https.get(url, (apiRes) => {
            let responseData = "";
            apiRes.on("data", (dataChunk) => {
                responseData += dataChunk;
            });

            apiRes.on("end", () => {
                try {
                    const responseJSON = JSON.parse(responseData);
                    console.log(responseJSON);
                    /*
                    latitude = responseJSON.results[0].geometry.location.lat;
                    longitude = responseJSON.results[0].geometry.location.lng;
                    latitude = Number(latitude.toPrecision(6));
                    longitude = Number(longitude.toPrecision(6));
                    console.log(`Latitude ${latitude}`);
                    console.log(`Longitude ${longitude}`);
                    const result = { latitude, longitude };
                    */
                    res.json({ result: responseJSON });
                } catch (error) {
                    console.error("Error", error);
                    res.status(500).json({ error: "Internal sever erorr" });
                }
            });
        });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the web server and listen on port 3001
app.listen(3001, () => {
    console.log("server is running");
});
