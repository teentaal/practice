require("dotenv").config();
const { default: mongoose } = require("mongoose");
constmongose = require("mongoose");



const connectDB = (uri) => {
    console.log("connectedDB");
    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};
module.exports = connectDB;