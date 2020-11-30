import * as React from "react";
import { storiesOf } from "@storybook/react";
import Size from "./Size";

storiesOf("Product Size", module).add("default", () => {
  return <Size />;
});
