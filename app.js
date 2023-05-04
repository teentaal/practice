require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const listendata_routes = require("./routes/listendata");
const connectDB = require("./MONGODB/connect")
app.get("/", (req,res) => {
    res.send("this server is alive");
});

//middelewares api
app.use("/data",listendata_routes);


const start = async() => {
   try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
        console.log(`server listening to ${PORT}`);
    });
   
   } catch (error) {
    console.log(error);
   } 
};
start();
