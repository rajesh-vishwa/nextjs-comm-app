import * as React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./Grid";

storiesOf("Grid", module).add("default", () => {
  return (
    <Grid>
      {["Item-A", "Item-B", "Item-C", "Item-E", "Item-F"].map((el) => (
        <div key={el}>{el}</div>
      ))}
    </Grid>
  );
});
