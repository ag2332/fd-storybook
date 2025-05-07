import {
  borderRadiusStyles,
  headingTextStyles,
  bodyTextStyles,
} from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface RadioProps {
  headerLabel: string;
  bodyLabel: string;
  borderRadius?: string;
  backgroundColor?: string;
  isSelected: boolean;
  headingTextSize: TextSize;
  bodyTextSize: TextSize;
  ariaLabel: string;
  id: string;
}

const Radio = ({
  headerLabel = "default heading",
  bodyLabel = "default body",
  isSelected,
  borderRadius = "md",
  backgroundColor = "red",
  headingTextSize = "xl",
  bodyTextSize = "md",
  ariaLabel = "placeholder",
  id = "radio",
}: RadioProps) => {
  return (
    <span
      aria-label={ariaLabel}
      style={{ ...(backgroundColor && { backgroundColor }) }}
      className={`${borderRadiusStyles(borderRadius)} ${
        isSelected ? "text-white" : "text-black"
      } flex justify-between items-center cursor-pointer my-5 p-6 shadow-lg w-80 z-50 hover:border-black hover:border-2 transition-all duration-200 hover:scale-105 hover:shadow-2xl`}
    >
      <label htmlFor={id} className="flex flex-col">
        <h1 className={`${headingTextStyles(headingTextSize)}`}>
          {headerLabel}
        </h1>
        <p className={`${bodyTextStyles(bodyTextSize)}`}>{bodyLabel}</p>
      </label>
      {isSelected && (
        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-4">
          <svg
            className="w-3 h-3 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      )}
      <input type="radio" onChange={() => {}} id={id} className="hidden" />
    </span>
  );
};

export default Radio;
