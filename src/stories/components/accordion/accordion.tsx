import BodyLabel from "../atoms/BodyLabel";
import HeaderLabel from "../atoms/HeaderLabel";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface accordionProps {
  backgroundColor: string;
  secondaryBackgroundColor: string;
  color?: string;
  headerLabel: string;
  bodyLabel: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  isOpen?: boolean;
  onClick?: () => void;
  index?: number;
  totalItems?: number;
  icon: string;
  iconVisible?: boolean;
  logoUrl?: string;
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
  icon = "",
  iconVisible = true,
  logoUrl,
}: accordionProps) => {
  return (
    <div
      className={`${
        index !== (totalItems ?? 0) - 1
          ? "border-b border-solid border-black"
          : ""
      }`}
    >
      <button onClick={onClick} className={`w-full text-left font-bold`}>
        <HeaderLabel
          isOpen={isOpen}
          textSize={headingTextSize}
          backgroundColor={backgroundColor}
          text={headerLabel}
          icon={icon}
          iconVisible={iconVisible}
          logoUrl={logoUrl}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <BodyLabel
          textSize={bodyTextSize}
          backgroundColor={secondaryBackgroundColor}
          text={bodyLabel}
        />
      </div>
    </div>
  );
};
export default Accordion;
