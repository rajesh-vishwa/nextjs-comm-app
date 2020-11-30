import * as React from "react";
import { storiesOf } from "@storybook/react";
import CardDetail from "./CardDetail";

storiesOf("Card Detail", module).add("default", () => {
  return <CardDetail name="Product Name" price={10} />;
});
