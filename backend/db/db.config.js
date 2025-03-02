const mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect(){
    const connectionString = `mongodb://localhost:27017/Finance`
    // const connectionString = process.env.DB_CONNECTION

    try {
        await mongoose.connect(connectionString)
        console.log("Database Connected.");
    } catch (error) {
        console.log("Database error: " + error);
    }
}

module.exports = dbConnect