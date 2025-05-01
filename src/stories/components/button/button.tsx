import type { PropsWithChildren } from "react";
import { variants, type ButtonVariants } from "./button-variants";

type ButtonProps = PropsWithChildren<
  ButtonVariants & {
    ariaLabel: string;
    onClick?: () => void;
    className?: string;
  }
>;

const Button = ({
  children = "Button",
  ariaLabel,
  variant,
  onClick,
  className,
}: ButtonProps) => {
  return (
      <button
        type="button"
        className={`${variants({ variant })} cursor-pointer flex justify-center w-full`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
  );
};

export default Button;
