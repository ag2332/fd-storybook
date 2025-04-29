import { headingTextStyles } from "../../utilities/styles";

interface HeaderLabelProps {
  text: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  backgroundColor?: string;
  icon?: string;
  isOpen?: boolean;
  iconVisible?: boolean;
}

const HeaderLabel = ({
  text = "",
  textSize = "xl",
  backgroundColor = "red",
  icon,
  isOpen,
  iconVisible = true,
}: HeaderLabelProps) => {
  return (
    <div
      className={`${headingTextStyles(textSize)} flex justify-between font-bold p-1.5 cursor-pointer`}
      style={{
        ...(backgroundColor && {
          backgroundColor,
        }),
      }}
    >
      <span>{text}</span>
      <span className={`${isOpen ? "rotate-180 transition-all duration-400 ease-in-out" : "rotate-0 transition-all duration-400 ease-in-out"} ${iconVisible ? "opacity-100" : "opacity-0"}`}>{icon}</span>
    </div>
  );
};

export default HeaderLabel;