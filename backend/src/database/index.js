const { Pool } = require("pg");
// const pool = new Pool({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// pool.query("SELECT * FROM iktable", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// const client = new Client({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

// client.connect();

// client.query("SELECT * FROM iktable", (err, res) => {
//   console.log(err, res);
//   client.end();
// });
