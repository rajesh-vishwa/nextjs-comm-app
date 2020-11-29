import { FC, useState } from "react";
import { IProduct } from "../../../models/product";
import { Container } from "../../ui";
import cn from "classnames";
import Image from "next/image";
import s from "./ProductView.module.css";
import Swatch from "../Swatch/Swatch";

interface Props {
  className?: string;
  children?: any;
  product: IProduct;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className={"grid gap-8 grid-cols-2 overflow-hidden"}>
        <div
          className={cn(
            s.productDisplay,
            "relative flex px-0 relative box-border col-span-1 bg-violet"
          )}
        >
          <Image
            className={cn("w-full", "h-auto", "max-h-full", "objct-cover")}
            src={product.image}
            alt={product.name}
            width={1050}
            height={1050}
            quality="85"
          />
        </div>
        <div
          className={
            "flex flex-col col-span-1 mx-aito max-w-8xl px-gw-full h-full"
          }
        >
          <section style={{ paddingTop: "50px" }}>
            <h1
              className={cn(
                s.name,
                "px-6 py-2 bg-primary text-primary font-bold"
              )}
            >
              {product.name}
            </h1>
            <div className="px-6 py-2 pb-4 bg-primary text-primary font-bold inline-block tracking-wide">
              ${product.price}
            </div>
            <div className="px-6">COLOR</div>
            <div className="flex flex-row py-6 px-6">
              {["yellow", "red", "blue", "gray"].map((color, ids) => (
                <div className="px-2" key={ids}>
                  <Swatch variant="color" color={color} />
                </div>
              ))}
            </div>
            <div className="px-6">SIZE</div>
            <div className="flex flex-row py-6 px-6">
              {["S", "M", "L"].map((size, ids) => (
                <div className="px-2" key={ids}>
                  <Swatch label={size} />
                </div>
              ))}
            </div>
          </section>
          <div className="pb-14 break-words w-full max-w-xl px-6">
            {product.description}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
