import cn from "classnames";
import s from "./LoadingDots.module.css";

const LoadingDots: React.FC = () => {
  return (
    <span
      className={cn(s.root, "inline-flex text-center items-center leading-7")}
    >
      <span className={"bg-accents-6 rounded-full h-2 w-2"} />
      <span />
      <span />
    </span>
  );
};

export default LoadingDots;
