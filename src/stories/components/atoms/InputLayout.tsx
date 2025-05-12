import {
  borderRadiusStyles,
  headingTextStyles,
  bodyTextStyles,
} from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface InputLayoutProps {
  headerLabel: string;
  bodyLabel: string;
  borderRadius?: string;
  backgroundColor?: string;
  accentColor: string;
  isSelected: boolean;
  headingTextSize: TextSize;
  bodyTextSize: TextSize;
  ariaLabel: string;
  id: string;
  backgroundToggle?: boolean;
  layoutToggle?: boolean;
  onClick: () => void;
}

const InputLayout = ({
  headerLabel = "default heading",
  bodyLabel = "default body",
  isSelected,
  borderRadius = "md",
  backgroundColor = "transparent",
  accentColor = "white",
  headingTextSize = "xl",
  bodyTextSize = "md",
  ariaLabel = "placeholder",
  id = "InputLayout",
  layoutToggle = true,
  onClick,
}: InputLayoutProps) => {
  const hasNoBackground =
    backgroundColor === "transparent" || backgroundColor === "";

  return (
    <span
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ ...(backgroundColor && { backgroundColor }) }}
      className={`${borderRadiusStyles(borderRadius)}
        flex ${
          layoutToggle ? "justify-between" : "flex-row-reverse"
        } gap-6.5 items-center cursor-pointer my-5 z-50 transition-all duration-200 hover:scale-105
        ${isSelected && !hasNoBackground ? "text-white" : "text-black"}
        ${
          hasNoBackground
            ? ""
            : "p-6 shadow-lg hover:border-black hover:border-2 hover:shadow-2xl"
        }
        `}
    >
      <label htmlFor={id} className={``}>
        <h1 className={`${headingTextStyles(headingTextSize)}`}>
          {headerLabel}
        </h1>
        <p className={`${bodyTextStyles(bodyTextSize)}`}>{bodyLabel}</p>
      </label>
      <input
        type="radio"
        id={id}
        checked={isSelected}
        onChange={() => {}}
        className="hidden"
      />
      <span
      style={{ background: isSelected ? accentColor : "" }}
        className={` w-6 h-6 rounded-full border-2 border-black flex items-center justify-center `}
      >
        {isSelected && (
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
        )}
      </span>
    </span>
  );
};

export default InputLayout;
