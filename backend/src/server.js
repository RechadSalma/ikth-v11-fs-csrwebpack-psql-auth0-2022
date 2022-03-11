require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const dummyroute = require("./routes/dummyroute.js");
const dbRoute = require("./routes/dbRoute.js");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const allowlist = [
  "https://ikth-v11-frontend.herokuapp.com",
  "http://example2.com",
  "http://localhost:3000",
  "http://localhost:9000",
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

//routes
app.get("/", (req, res) => {
  res.send("iK server is working");
});

app.use("/dummyroute", dummyroute);

app.use("/db", dbRoute);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`iK server connection on http://localhost:${port}/`)
);
