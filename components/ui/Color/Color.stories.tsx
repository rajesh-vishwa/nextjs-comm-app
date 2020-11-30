import * as React from "react";
import { storiesOf } from "@storybook/react";
import Color from "./Color";

storiesOf("Product Color", module).add("default", () => {
  return <Color />;
});
