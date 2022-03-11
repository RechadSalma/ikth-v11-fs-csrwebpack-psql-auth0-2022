const db = require("../database/index.js");

function errdb() {
  db.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
}

exports.queryTable = (req, res) => {
  db.query("SELECT * FROM iktest2;")
    .then((response) => {
      console.log(response);
      res.json(response.rows);
    })
    .catch((err) =>
      setImmediate(() => {
        res
          .json({ success: false, msg: "iK something went wrong" })
          .status(400);
      })
    );
};
