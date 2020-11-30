import * as React from "react";

type Props = {
  text: string;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const Button: React.FC<Props> = ({ text, onClick }) => (
  <button
    className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
    onClick={onClick}
  >
    {text}
  </button>
);
export default Button;
