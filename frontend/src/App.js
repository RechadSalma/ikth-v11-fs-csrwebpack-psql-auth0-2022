import React from "react";

import RequestButton from "./components/RequestButton.js";

// /*iK simple App setup */
const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <div className="AppComponent">
      <RequestButton />
    </div>
  ); /*END return */
}; /*END App component*/

export default App;
