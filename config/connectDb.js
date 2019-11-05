require ('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.DB_URI;

//Function to open the connection de the DB
const connectDb = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('You are now connected to the Cat-abase.');

    } catch (err) {
        console.error(err.message);
        
        //Exit process with failure
        process.exit(1)
    }
};

module.exports = connectDb;