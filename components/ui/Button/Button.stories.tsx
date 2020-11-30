import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("with text", () => {
    return <Button text="Click Me" onClick={() => {}} />;
  })
  .add("with On Click Event", () => {
    return <Button text="Save" onClick={() => console.log("clicked...")} />;
  });
