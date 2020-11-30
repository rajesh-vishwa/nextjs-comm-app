import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <Link href={`/product/${product.id}`}>
      <div className={s.cardContainer}>
        <div className={s.imageContainer}>
          <Image
            quality="85"
            src={product.image}
            alt={product.name}
            className={s.image}
            width={imgWidth}
            height={imgHeight}
          />
        </div>

        <CardDetail name={product.name} price={product.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
