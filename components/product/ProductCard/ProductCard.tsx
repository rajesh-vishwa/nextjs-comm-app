import React from "react";

import s from "./ProductCard.module.css";
import { IProduct } from "../../../models/product";
import CardDetail from "./CardDetail/CardDetail";

interface Props {
  product: IProduct;
  imgWidth: number | string;
  imgHeight: number | string;
}

const ProductCard: React.FC<Props> = ({ product, imgWidth, imgHeight }) => {
  return (
    <>
      <div className={"pt-4 border-2 border-gray-400"}>
        <div className={s.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={s.image}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <CardDetail name={product.name} price={product.price} />
      </div>
    </>
  );
};

export default ProductCard;
