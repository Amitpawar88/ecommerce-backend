const mongoose = require('mongoose');

const connectDB = (uri) => {
    // console.log("connect.js file ke line 6 me");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;