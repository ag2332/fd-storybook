import React, { ReactElement, useState } from "react";
import Accordion from "./accordion";
import { bodyTextStyles, borderRadiusStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface ItemProps {
  isOpen?: boolean;
  onClick?: () => void;
  index?: number;
  totalItems?: number;
}

interface accordionGroupProps {
  backgroundColor: string;
  secondaryBackgroundColor?: string;
  color: string;
  border: boolean;
  borderRadius?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  numberOfItems?: number;
  items: {headerLabel: React.ReactNode, bodyLabel: React.ReactNode}[];
}

const AccordionGroup = ({
  backgroundColor = "red",
  secondaryBackgroundColor = "orange",
  color = "black",
  headingTextSize = "xl",
  bodyTextSize = "md",
  border = false,
  borderRadius = "md",
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
            headerLabel={item.headerLabel}
            bodyLabel={item.bodyLabel}
            index={index}
            totalItems={items.length}
          />
        );
      })}
    </div>
  );
};

export default AccordionGroup;