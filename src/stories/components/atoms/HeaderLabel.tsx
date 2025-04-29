import { headingTextStyles } from "../../utilities/styles";

interface HeaderLabelProps {
  text: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  backgroundColor?: string;
}

const HeaderLabel = ({
  text = "",
  textSize = "xl",
  backgroundColor = "red",
}: HeaderLabelProps) => {

  return (
    <div
      className={`${headingTextStyles(textSize)} font-bold p-1.5`}
      style={{
        ...(backgroundColor && {
          backgroundColor,
        }),
      }}
    >
      {text }
    </div>
  );
};

export default HeaderLabel;
