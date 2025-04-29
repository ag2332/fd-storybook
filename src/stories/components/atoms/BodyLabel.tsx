import { bodyTextStyles } from "../../utilities/styles";

interface BodyLabelProps {
  text: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  backgroundColor?: string;
}

const BodyLabel = ({
  text = "",
  textSize = "md",
  backgroundColor = "orange",
}: BodyLabelProps) => {

  return (
    <div
      className={`${bodyTextStyles(textSize)} p-1.5 px-4`}
      style={{
        ...(backgroundColor && {
          backgroundColor: backgroundColor,
        }),
      }}
    >
      {text}
    </div>
  );
};

export default BodyLabel;