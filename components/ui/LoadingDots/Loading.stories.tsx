import * as React from "react";
import { storiesOf } from "@storybook/react";
import LoadingDots from "./LoadingDots";

storiesOf("LoadingDots", module).add("default", () => {
  return <LoadingDots />;
});
