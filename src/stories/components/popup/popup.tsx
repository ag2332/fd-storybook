import Button from "../button/button";
import { borderRadiusStyles, positionStyles, triangleStyles, widthStyles, headingTextStyles, bodyTextStyles } from "../../utilities/styles";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface PopUpProps {
  title: string;
  ariaLabel: string;
  label: string;
  borderRadius?: string;
  position?: string;
  width?: string;
  headingTextSize?: TextSize;
  bodyTextSize?: TextSize;
  backgroundColor: any;
  color: any;
  border: boolean;
  alwaysShow: boolean;
};

const PopUp = ({
  title,
  ariaLabel = "placeholder",
  label,
  borderRadius = "md",
  position = "top",
  width = "300",
  headingTextSize = "xl",
  bodyTextSize = "md",
  backgroundColor = "red",
  color = "black",
  border = false,
  alwaysShow = false,
}: PopUpProps) => {

  const triangle = `${
    border ? "border-2 border-black" : ""
  } absolute z-10 w-6 h-6 [clip-path:polygon(0_1%,_100%_100%,_100%_0)]`;

  return (
    <div aria-label={ariaLabel} className="group relative cursor-pointer">
      <div
        className={`absolute ${borderRadiusStyles(borderRadius)} ${positionStyles(position)} ${widthStyles(width)} ${
          border ? "border-2 border-solid border-black" : ""
        } inline-block p-4 group-hover:flex flex-col transition-opacity duration-200 ease-in-out ${alwaysShow ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
        style={{
          ...(backgroundColor && { backgroundColor }),
        }}
      >
        <div
          className={`${triangleStyles(position)}
          ${triangle}`}
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
        ></div>

        <div style={{ ...(color && { color }) }}>
          <h2 className={`font-bold ${headingTextStyles(headingTextSize)} my-3`}>{title}</h2>
          <p className={`leading-snug ${bodyTextStyles(bodyTextSize)} mb-3`}>{label}</p>
        </div>
      </div>
      <Button ariaLabel={""} />
    </div>
  );
};

export default PopUp;
