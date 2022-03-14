import React from "react";

import RequestButton from "./components/RequestButton.js";

// Auth0
import LoginButton from "./components/login.js";
import LogoutButton from "./components/logout.js";
import Profile from "./components/Profile.js";

// /*iK simple App setup */
const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <div className="AppComponent">
      <RequestButton />

      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  ); /*END return */
}; /*END App component*/

export default App;
