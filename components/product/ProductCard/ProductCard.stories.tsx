import * as React from "react";
import { storiesOf } from "@storybook/react";
//import ProductCard from "./ProductCard";
import { IProduct } from "../../../models/product";

storiesOf("Product Card", module).add("default", () => {
  const data: IProduct = {
    id: 1,
    name: "Product",
    price: 20,
    description: " A storybook product",
    image: "",
  };
  return <div>story will be created</div>;
});
