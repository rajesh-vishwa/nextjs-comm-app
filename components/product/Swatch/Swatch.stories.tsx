import * as React from "react";
import { storiesOf } from "@storybook/react";
import Swatch from "./Swatch";

storiesOf("Swatch", module)
  .add("with XL Size", () => {
    return <Swatch label={"XL"} />;
  })
  .add("with red Color", () => {
    return <Swatch variant="color" color={"red"} />;
  })
  .add("with green Color", () => {
    return <Swatch variant="color" color={"green"} />;
  });
