import React from "react";

const Slot = ({ x, y, z }) => {
  return (
    <>
      <img src={x} alt="Fruit Overview" />
      <img src={y} alt="Fruit Overview" />
      <img src={z} alt="Fruit Overview" />
    </>
  );
};

export default Slot;
