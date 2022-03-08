require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const allowlist = [
  "https://ikth-v11-frontend.herokuapp.com",
  "http://example2.com",
  "http://localhost:3000",
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

const data = { iKname: "rechad kheerdali", dob: 19441111 };

app.get("/api", (req, res) => {
  res.json(data).status(200);
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`iK server connection on http://localhost:${port}/`)
);
