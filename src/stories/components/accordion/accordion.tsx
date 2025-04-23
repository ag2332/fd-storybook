import HeaderLabel from "../atoms/HeaderLabel";
import BodyLabel from "../atoms/BodyLabel";
import Item from "../atoms/item";
import { borderRadiusStyles, positionStyles, widthStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface accordionProps {
  className?: string;
  value?: string;
  title: string;
  ariaLabel: string;
  label: string;
  borderRadius?: string;
  position?: string;
  width?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  backgroundColor: any;
  color: any;
  border: boolean;
  disabled: boolean;
}


const accordion = ({
  className = "",
  value = "",
  title,
  ariaLabel = "placeholder",
  label,
  borderRadius = "md",
  position = "top",
  width = "300",
  headingTextSize = "xl",
  bodyTextSize = "md",
  backgroundColor = "red",
  color = "black",
  border = false,
  disabled = false,
}: accordionProps) => {
  return (
    <div aria-Label={ariaLabel} className={`${borderRadiusStyles(borderRadius)} ${positionStyles(position)} ${widthStyles(width)}`}>
      <div data-value="first">
        test
      </div>
    </div>
  );
};
export default accordion;
