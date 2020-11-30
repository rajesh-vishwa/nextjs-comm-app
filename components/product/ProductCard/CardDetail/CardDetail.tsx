import React from "react";
import s from "./CardDetail.module.css";

const CardDetail: React.FC<{ name: string; price: number }> = ({
  name,
  price,
}) => {
  return (
    <div className={s.cardDetails}>
      <div className={s.productTitle}>
        <span>{name}</span>
      </div>
      <div className={s.productPrice}>${price}</div>
    </div>
  );
};

export default CardDetail;
