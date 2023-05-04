require("dotenv").config();
const mongoose = require("mongoose");

const listendataschema = new mongoose.Schema
     ({
        
         District:{
            type:String,
            required:true
         },
         CollegeName:{
            type:String,
            required:true
         },

         CollegeCodeId:{
            type:String,
            required:true
         }
     });
 
module.exports = mongoose.model("data", listendataschema);