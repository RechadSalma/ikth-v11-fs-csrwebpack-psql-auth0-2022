import React from "react";

import RequestButton from "./components/RequestButton.js";

// /*iK simple App setup */
const App = (props) => {
  console.log(props);

  return (
    <div className="AppComponent">
      <RequestButton />
    </div>
  ); /*END return */
}; /*END App component*/

export default App;
