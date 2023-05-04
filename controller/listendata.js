const data = require("../model/datastructure")




const getlist = async(req,res) => {
    // const Mydata = await data.find({});
    const Mydata = await data.find(req.query);

    var filData = Mydata.filter(function (el){
        return el.CollegeName == "Mahavidyalaya,Wadwani";
    });

    console.log(filData[0].CollegeCodeId);

    res.status(200).json({Mydata});
};



const getCollegeCode = async(req,res) => {
    // const Mydata = await data.find({});
    const Mydata = await data.find(req.query);

    var filData = Mydata.filter(function (el){
        return el.CollegeName == req.query.CollegeName;
    });

    console.log(filData[0].CollegeCodeId);

    res.status(200).json(filData[0].CollegeCodeId);
};




module.exports = {getlist, getCollegeCode};