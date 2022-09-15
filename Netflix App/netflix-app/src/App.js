import React from "react";

import data from "./data";

import Card from "./components/Card";

const App = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        {data.map(({ id, source, text, title, link }) => {
          return (
            <Card
              key={id}
              source={source}
              text={text}
              title={title}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
