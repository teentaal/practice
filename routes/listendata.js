const express = require('express');
const router = express();

const{getlist, getCollegeCode} = require("../controller/listendata");

router.route("/").get(getlist);
router.route("/getCollegeCode").get(getCollegeCode);

module.exports = router;