import React from "react";
import Swatch from "../../product/Swatch/Swatch";

const Color = () => {
  return (
    <>
      <div className="px-6">COLOR</div>
      <div className="flex flex-row py-6 px-6">
        {["yellow", "red", "blue", "gray"].map((color, ids) => (
          <div className="px-2" key={ids}>
            <Swatch variant="color" color={color} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Color;
