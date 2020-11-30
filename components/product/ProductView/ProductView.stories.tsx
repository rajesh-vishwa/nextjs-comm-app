import * as React from "react";
import { storiesOf } from "@storybook/react";
import ProductView from "./ProductView";
import { IProduct } from "../../../models/product";

storiesOf("Product View", module).add("default", () => {
  const data: IProduct = {
    id: 1,
    name: "Product Name",
    price: 20,
    description: " A storybook product",
    image: "/cap.png",
  };
  return <ProductView product={data} showAction={false} />;
});
