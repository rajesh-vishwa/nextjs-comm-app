import * as React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./Grid";

storiesOf("Loading", module).add("default", () => {
  return (
    <Grid>
      {["A", "B", "C", "E", "F"].map((el) => (
        <div key={el} className="px-2 py-2">
          {el}
        </div>
      ))}
    </Grid>
  );
});
