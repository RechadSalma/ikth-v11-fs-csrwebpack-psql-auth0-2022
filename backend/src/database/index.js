const { Pool } = require("pg");
//EXAMPLE ONLINE
// const pool = new Pool({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })

//IK MY PREVIOUS CONNECTION TO LOCALHOST PSQL DATABASE
// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

//Connection to my heroku psql database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// the recommended way to use psql for most case by the npm pg documentation
module.exports = {
  query: (text, params) => pool.query(text, params),
};
