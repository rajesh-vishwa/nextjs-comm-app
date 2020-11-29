import cn from "classnames";
import { FC } from "react";

interface Props {
  label?: string;
  variant?: "size" | "color" | string;
  color?: string;
}

const Swatch: FC<Props> = ({ color = "white", label, variant = "size" }) => {
  const border = variant === "size" ? "2x solid black" : "0x solid black";
  return (
    <div
      className={cn("rounded-full h-12 w-12 flex items-center justify-center", {
        "border-current": label,
      })}
      style={{ backgroundColor: color }}
    >
      {variant === "size" ? label : null}
    </div>
  );
};

export default Swatch;
