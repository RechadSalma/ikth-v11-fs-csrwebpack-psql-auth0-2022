const expressRoute = require("express").Router();
const { queryTable } = require("../controllers/dbController.js");

expressRoute.get("/", queryTable);

module.exports = expressRoute;
