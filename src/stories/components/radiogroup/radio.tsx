import InputLayout from "../atoms/InputLayout";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface RadioProps {
  headerLabel: string;
  bodyLabel: string;
  borderRadius?: string;
  backgroundColor?: string;
  isSelected: boolean;
  headingTextSize: TextSize;
  bodyTextSize: TextSize;
  ariaLabel: string;
  id: string;
  backgroundToggle?: boolean;
  layoutToggle?: boolean;
  accentColor: string;
}

const Radio = ({
  headerLabel = "default heading",
  bodyLabel = "default body",
  isSelected,
  borderRadius = "md",
  backgroundColor = "transparent",
  accentColor = "white",
  headingTextSize = "xl",
  bodyTextSize = "md",
  ariaLabel = "placeholder",
  id = "radio",
  layoutToggle,
}: RadioProps) => {

  return (
    <InputLayout
    headingTextSize={headingTextSize}
    bodyTextSize={bodyTextSize}
    headerLabel={headerLabel}
    bodyLabel={bodyLabel}
    ariaLabel={ariaLabel}
    accentColor={accentColor}
    isSelected={isSelected}
    id={id}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    layoutToggle={layoutToggle}
    />
  );
};

export default Radio;