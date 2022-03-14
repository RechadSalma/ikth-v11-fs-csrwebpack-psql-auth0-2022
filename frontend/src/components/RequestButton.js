import React from "react";
import axios from "axios";

export default function RequestButton() {
  const backendUrl =
    process.env.NODE_ENV === "production"
      ? "https://ikth-v11-backend.herokuapp.com"
      : "http://localhost:4000";

  const axiosClick = () => {
    axios.get(`${backendUrl}/login`).then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>iK request button is working</h1>
      <button onClick={axiosClick}>make axios request</button>
    </div>
  );
}
