import React from "react";

import Machine from "./Machine";

const Main = () => {
  const apple = "https://img.icons8.com/emoji/96/000000/red-apple.png";
  const banana = "https://img.icons8.com/emoji/96/000000/banana-emoji.png";
  const coconut = "https://img.icons8.com/emoji/96/000000/coconut-emoji.png";
  const grapes = "https://img.icons8.com/emoji/96/000000/grapes-emoji.png";
  const mango = "https://img.icons8.com/emoji/96/000000/mango-emoji.png";

  return (
    <div className="main">
      <Machine x={apple} y={coconut} z={banana} />
      <Machine x={banana} y={banana} z={banana} />
      <Machine x={banana} y={grapes} z={mango} />
    </div>
  );
};

export default Main;
