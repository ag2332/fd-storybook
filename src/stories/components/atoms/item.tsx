import { borderRadiusStyles, headingTextStyles, bodyTextStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface ItemProps {
  headerLabel: string;
  bodyLabel: string;
  borderRadius?: string;
  backgroundColor?: string;
  isSelected: boolean;
  headingTextSize: TextSize;
  bodyTextSize: TextSize;
  ariaLabel: string;
  className: string;
}

const Item = ({
  headerLabel = "default heading",
  bodyLabel = "default body",
  isSelected,
  borderRadius = "md",
  backgroundColor = "red",
  headingTextSize = "xl",
  bodyTextSize = "md",
  ariaLabel = "placeholder",
  className = "",
}: ItemProps) => {
  return (
    <div aria-Label={ariaLabel}
    style={{
      ...(backgroundColor && { backgroundColor }),
    }}
      className={`${borderRadiusStyles(borderRadius)} ${className} ${
        isSelected ? "text-white" : "text-black"
      }`}
    >
      <h1 className={`${headingTextStyles(headingTextSize)}`}>{headerLabel}</h1>
      <p className={`${bodyTextStyles(bodyTextSize)}`}>{bodyLabel}</p>
    </div>
  );
};

export default Item;