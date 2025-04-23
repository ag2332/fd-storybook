import type { PropsWithChildren } from "react";
import { variants, type CalloutVariants } from "./callout-variants";
import Button from "../button/button";

type CalloutProps = PropsWithChildren<CalloutVariants & {
  title: string;
  ariaLabel: string;
  label: string
}>;

const Callout = ({ children, title, ariaLabel, label, variant }: CalloutProps) => {
  return (
    <div aria-label={ariaLabel} className={variants({ variant })}>
      <h2 className="font-bold">{title}</h2>
      <p>{children}</p>
      <Button ariaLabel={ariaLabel}>{label}</Button>
    </div>
  );
};

export default Callout;