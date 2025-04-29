import { useState } from "react";
import Accordion from "./accordion";
import { borderRadiusStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface accordionGroupProps {
  backgroundColor: string;
  secondaryBackgroundColor?: string;
  color: string;
  border: boolean;
  borderRadius?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  numberOfItems?: number;
  iconVisible?: boolean;
  items: {headerLabel: string, bodyLabel: string}[];
}

const AccordionGroup = ({
  backgroundColor = "red",
  secondaryBackgroundColor = "orange",
  color = "black",
  headingTextSize = "xl",
  bodyTextSize = "md",
  border = false,
  borderRadius = "md",
  iconVisible = true,
  items = [],
}: accordionGroupProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`${borderRadiusStyles(borderRadius)} overflow-hidden ${border ? "border-2 border-solid border-black" : ""} w-[200px]`}
      style={{
        ...(color && { color }),
        ...(backgroundColor && { backgroundColor }),
        ...(secondaryBackgroundColor && { backgroundColor: secondaryBackgroundColor }),
      }}
    >
      {items.map((item, index) => {
        return (
          <Accordion
            key={index}
            headingTextSize={headingTextSize}
            bodyTextSize={bodyTextSize}
            backgroundColor={backgroundColor}
            secondaryBackgroundColor={secondaryBackgroundColor}
            color={color}
            isOpen={openAccordion === index}
            onClick={() => handleClick(index)}
            headerLabel={item.headerLabel ?? ""}
            bodyLabel={item.bodyLabel ?? ""}
            index={index}
            totalItems={items.length}
            iconVisible={iconVisible}
            icon={"⇓"}
          />
        );
      })}
    </div>
  );
};

export default AccordionGroup;