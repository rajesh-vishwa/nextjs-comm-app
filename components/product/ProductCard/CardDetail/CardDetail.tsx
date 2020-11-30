import React from "react";

const CardDetail: React.FC<{ name: string; price: number }> = ({
  name,
  price,
}) => {
  return (
    <div className={"pl-2 pt-1 pb-1"}>
      <div className={"text-lg font-bold tracking-wide"}>
        <span>{name}</span>
      </div>
      <div className={"pt-5 font-semibold text-blue-400"}>${price}</div>
    </div>
  );
};

export default CardDetail;
