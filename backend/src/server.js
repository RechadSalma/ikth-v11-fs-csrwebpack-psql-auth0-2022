require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { auth, requiresAuth } = require("express-openid-connect");

const app = express();
const dummyroute = require("./routes/dummyroute.js");
const dbRoute = require("./routes/dbRoute.js");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const allowlist = [
  "https://ikth-v11-frontend.herokuapp.com",
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

// Auth0 config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:4000",
  clientID: "kzJbtMIsJFSkiIOqVquLj0Tm6eMt531z",
  issuerBaseURL: "https://dev-4-jkyr2v.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

//routes
app.get("/", (req, res) => {
  // res.send("iK server is working");
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use("/dummyroute", dummyroute);

app.use("/db", dbRoute);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`iK server connection on http://localhost:${port}/`)
);
