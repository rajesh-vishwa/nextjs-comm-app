import React from "react";
import Link from "next/link";
import { IProduct } from "../../../models/product";
import { Button, Container } from "../../ui";
import cn from "classnames";

import Color from "../../ui/Color/Color";
import Size from "../../ui/Size/Size";

interface Props {
  className?: string;
  children?: any;
  product: IProduct;
  showAction?: boolean;
}

const ProductView: React.FC<Props> = ({ product, showAction = true }) => {
  return (
    <Container>
      <div className={"grid gap-8 grid-cols-2 overflow-hidden pt-4"}>
        <div
          className={cn(
            "h-full min-w-full border-gray-500 border-2",
            "relative flex px-0 relative rounded col-span-1 bg-violet"
          )}
        >
          <img
            className={cn("w-full", "h-auto", "max-h-full", "objct-cover")}
            src={product.image}
            alt={product.name}
            width={1050}
            height={1050}
          />
        </div>
        <div
          className={
            "flex flex-col col-span-1 mx-aito max-w-8xl px-gw-full h-full"
          }
        >
          <section className="pt-5">
            <h1
              className={cn(
                "text-3xl",
                "px-6 py-2 bg-primary text-primary font-bold"
              )}
            >
              {product.name}
            </h1>
            <div className="px-6 py-2 pb-4 bg-primary text-primary font-bold inline-block tracking-wide">
              ${product.price}
            </div>

            <Color />
            <Size />
          </section>
          <div className="pb-14 break-words w-full max-w-xl px-6">
            {product.description}
          </div>
          {showAction && (
            <div className="grid grid-cols-2 gap-2 px-6">
              <Button text="Add To Card" onClick={() => {}} />
              <Link href="/product-list">
                <a>Back</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
