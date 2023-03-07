const express = require("express"); //same instance use
const router = express.Router(); //return router MW

const homeController = require("../controllers/homeController"); //action

router.get("/", homeController.home);

module.exports = router;
console.log(router);