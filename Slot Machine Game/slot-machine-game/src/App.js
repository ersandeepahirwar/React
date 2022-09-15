import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
