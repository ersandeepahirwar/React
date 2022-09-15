import React from "react";

import Slot from "./Slot";

const Machine = ({ x, y, z }) => {
  if (x === y && y === z) {
    return (
      <div className="slot active">
        <Slot x={x} y={y} z={z} />
      </div>
    );
  } else {
    return (
      <div className="slot">
        <Slot x={x} y={y} z={z} />
      </div>
    );
  }
};

export default Machine;
