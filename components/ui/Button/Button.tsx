import cn from "classnames";
import React, {
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from "react";
import mergeRefs from "react-merge-refs";
import s from "./Button.module.css";
import LoadingDots from "../LoadingDots";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "flat" | "slim";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    onClick,
    width,
    Component = "button",
    loading = false,
    disabled = false,
    style = {},
  } = props;
  const ref = useRef<typeof Component>(null);

  const rootClassName = cn(
    "bg-secondary text-accents-1 cursor-pointer inline-flex px-10 rounded-sm leading-6  transition ease-in-out duration-150 shadow-sm font-semibold text-center justify-center uppercase py-4 border border-transparent items-center",
    {
      [s.slim]: variant === "slim",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
});

export default Button;