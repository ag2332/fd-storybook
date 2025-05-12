import { useState } from "react";
import Radio from "./radio";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface RadioGroupProps {
  headerLabel: string;
  bodyLabel: string;
  borderRadius?: string;
  backgroundColor?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  direction: boolean;
  ariaLabel: string;
  layoutToggle: boolean;
  accentColor: string;
}

const RadioGroup = ({
  headerLabel = "default heading",
  bodyLabel = "default body",
  borderRadius = "md",
  backgroundColor = "transparent",
  headingTextSize = "xl",
  bodyTextSize = "md",
  direction = true,
  ariaLabel = "placeholder",
  layoutToggle = true,
  accentColor = "red"
}: RadioGroupProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelected((prev) => (prev === index ? 0 : index));
  };

  return (
    <div
      className={`flex ${
        direction ? "flex-row" : "flex-col"
      } justify-center gap-3`}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Radio
            isSelected={selected === index}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            headerLabel={headerLabel}
            bodyLabel={bodyLabel}
            headingTextSize={headingTextSize}
            bodyTextSize={bodyTextSize}
            ariaLabel={ariaLabel}
            id={"radio" + index}
            layoutToggle={layoutToggle}
            accentColor={accentColor}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;