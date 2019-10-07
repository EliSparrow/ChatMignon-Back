// Package import
require ('dotenv').config();
const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();



// File import
const connectDb = require("./config/connectDb");

// Port
const port = process.env.PORT || 4242;

connectDb();


mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({extended: false}));

var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: function(origin, callback) {
        if (!origin)
            return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow acces from specified origin.';
            return(callback(new Error(msg), false));
        }

        return(callback(null, true));
    }
}));

// Test API
app.get('/', (req,res) => {
    res.send("API is running")
})

// app.use("/users", user);
// app.use("/events", event);
// app.use("/search", search);
// app.use("/orders", order);

app.listen(port, () => console.log(`Server run on port ${port}.`));

module.exports = app;