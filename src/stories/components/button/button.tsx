import type { PropsWithChildren } from "react";
import { variants, type ButtonVariants } from "./button-variants";

type ButtonProps = PropsWithChildren<ButtonVariants & {
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}>;

const Button = ({
  children = "Button",
  ariaLabel,
  variant,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <div aria-label={ariaLabel} className={variants({ variant })}>
      <button
        type="button"
        className="text-center cursor-pointer"
      >
        {children}
        </button>
    </div>
  );
};

export default Button;