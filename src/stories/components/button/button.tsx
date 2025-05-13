import type { PropsWithChildren } from "react";
import { variants, type ButtonVariants } from "./button-variants";

type ButtonProps = PropsWithChildren<
  ButtonVariants & {
    ariaLabel: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    tabIndex?: number;
  }
>;

const Button = ({
  children = "Button",
  ariaLabel,
  variant,
  onClick,
  className,
  onKeyDown,
  tabIndex
}: ButtonProps) => {
  return (
      <button
        type="button"
        className={`${variants({ variant })} cursor-pointer flex justify-center w-full`}
        onClick={onClick}
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
      >
        {children}
      </button>
  );
};

export default Button;
