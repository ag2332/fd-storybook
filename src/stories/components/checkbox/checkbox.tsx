import { bodyTextStyles, headingTextStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface CheckBoxProps {
    accentColor?: string;
    headingTextSize?: TextSize;
    bodyTextSize?: TextSize;
    headerLabel?: string;
    bodyLabel?: string;
}

const CheckBox = ({
    accentColor = 'black',
    headingTextSize = 'xl',
    bodyTextSize = 'md',
    headerLabel = 'default heading',
    bodyLabel = 'default body',
}: CheckBoxProps) => {
  return (
    <div className="flex items-center">
      <input
      style = {{...(accentColor && { accentColor })}}
      type="checkbox"
      className="cursor-pointer w-6 h-6 accent-black transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      />
      <div className="grid mx-3">
        <label
          className={`${headingTextStyles(headingTextSize)} text-md font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
        >
          {headerLabel}
        </label>
        <p className={`${bodyTextStyles(bodyTextSize)}text-sm text-muted-foreground`}>
          {bodyLabel}
        </p>
      </div>
    </div>
  );
};

export default CheckBox;