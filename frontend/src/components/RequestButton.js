import React from "react";
import axios from "axios";

export default function RequestButton() {
  const axiosClick = () => {
    axios.get("http://localhost:4000/api").then((res) => console.log(res.data));
  };

  return (
    <div>
      <h1>iK request button is working</h1>
      <button onClick={axiosClick}>make axios request</button>
    </div>
  );
}
