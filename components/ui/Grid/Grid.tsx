import React, { FC, ReactNode, Component } from "react";
import s from "./Grid.module.css";

interface Props {
  children?: ReactNode[] | Component[] | any[];
}

const Grid: FC<Props> = ({ children }) => {
  return <div className={s.grid}>{children}</div>;
};

export default Grid;
