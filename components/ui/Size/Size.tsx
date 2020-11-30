import React from "react";
import Swatch from "../../product/Swatch/Swatch";

const Size = () => {
  return (
    <>
      <div className="px-6">SIZE</div>
      <div className="flex flex-row py-6 px-6">
        {["S", "M", "L"].map((size, ids) => (
          <div className="px-2" key={ids}>
            <Swatch label={size} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Size;
