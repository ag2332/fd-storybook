import { useState } from "react";
import InputLayout from "../atoms/InputLayout";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface CheckBoxProps {
  accentColor?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  headerLabel?: string;
  bodyLabel?: string;
  ariaLabel: string;
  id: string;
  onClick: () => void;
  backgroundColor: string
  inputStyle?: "checkbox" | "radio";
}

const CheckBox = ({
  accentColor = "white",
  headingTextSize = "xl",
  bodyTextSize = "md",
  headerLabel = "default heading",
  bodyLabel = "default body",
  ariaLabel,
  id,
  onClick,
  backgroundColor = "transparent",
  inputStyle = "checkbox",
}: CheckBoxProps) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected((prev) => !prev);
  }

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
      backgroundColor={backgroundColor}
      onClick={handleToggle}
      inputStyle={inputStyle}
    />
  );
};

export default CheckBox;