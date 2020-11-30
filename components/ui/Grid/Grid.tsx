import React, { FC, ReactNode, Component } from "react";

interface Props {
  children?: ReactNode[] | Component[] | any[];
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">{children}</div>
  );
};

export default Grid;
