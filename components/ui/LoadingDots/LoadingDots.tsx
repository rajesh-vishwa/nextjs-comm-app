import React from "react";
import cn from "classnames";
import s from "./LoadingDots.module.css";

const LoadingDots: React.FC = () => {
  return (
    <span
      className={cn(
        s.root,
        "inline-flex text-center items-center leading-7 py-2"
      )}
    >
      <span className={"animate-ping bg-gray-400 rounded-full h-2 w-2"} />
      <span className={"animate-ping bg-gray-600 rounded-full h-2 w-2"} />
      <span className={"animate-ping bg-gray-800 rounded-full h-2 w-2"} />
    </span>
  );
};

export default LoadingDots;
