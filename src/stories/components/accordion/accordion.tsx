import BodyLabel from "../atoms/BodyLabel";
import HeaderLabel from "../atoms/HeaderLabel";
import Item from "../atoms/item";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface accordionProps {
  backgroundColor: string;
  secondaryBackgroundColor: string;
  color?: string;
  headerLabel?: React.ReactNode;
  bodyLabel?: React.ReactNode;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  isOpen?: boolean;
  onClick?: () => void;
  index?: number;
  totalItems?: number;
}

const Accordion = ({
  backgroundColor,
  secondaryBackgroundColor,
  headingTextSize = "xl",
  bodyTextSize = "md",
  headerLabel,
  bodyLabel,
  isOpen,
  onClick,
  index,
  totalItems,
}: accordionProps) => {
  return (
    <div>
      headerLabelProps=
      {{
        textSize: headingTextSize,
        backgroundColor: backgroundColor,
        text: headerLabel,
      }}
      bodyLabelProps=
      {{
        textSize: bodyTextSize,
        backgroundColor: secondaryBackgroundColor,
        text: bodyLabel,
      }}
      isOpen={isOpen},
      onClick={onClick},
      index={index},
      totalItems={totalItems}

      <div
      className={`${
        index !== (totalItems ?? 0) - 1
          ? "border-b border-solid border-black"
          : ""
      }`}
    >
      <button onClick={onClick} className={`w-full text-left font-bold`}>
        <HeaderLabel {...headerLabelProps}/>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? "1000px" : "0",
        }}
      >
        <BodyLabel {...bodyLabelProps} />
      </div>
    </div>
    </div>
  );
};
export default Accordion;
