const expressRoute = require("express").Router();

const { simpleMessage } = require("../controllers/dummycontroller.js");

expressRoute.get("/", simpleMessage);

module.exports = expressRoute;
