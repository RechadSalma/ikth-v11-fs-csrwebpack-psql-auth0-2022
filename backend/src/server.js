const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

//whtielist
// const corsOptions = {
//   origin: "http://localhost:9000",
//   // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
const whitelist = [
  "http://localhost:9000",
  "http://localhost:3000",
  "https://ikth-v11-frontend.herokuapp.com/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

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
