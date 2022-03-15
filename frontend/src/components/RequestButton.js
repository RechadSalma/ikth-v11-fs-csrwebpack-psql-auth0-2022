import React from "react";
import axios from "axios";

export default function RequestButton() {
  const backendUrl =
    process.env.NODE_ENV === "production"
      ? "https://ikth-v11-backend.herokuapp.com"
      : "http://localhost:4000";

  const axiosClick = () => {
    axios.get(`${backendUrl}/db`).then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>iK request button to Heroku psql database</h1>
      <button onClick={axiosClick}>SELECT * FROM iktest2;</button>
    </div>
  );
}
