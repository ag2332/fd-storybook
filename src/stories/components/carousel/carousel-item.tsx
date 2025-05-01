import { borderRadiusStyles, widthStyles } from "../../utilities/styles";

interface CarouselItemProps {
  children: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  border?: boolean;
}

const CarouselItem = ({
  children = "Carousel Content",
  borderRadius = "md",
  backgroundColor = "black",
  color = "white",
  width = "300",
  border = false,
}: CarouselItemProps) => {
  return (
    <div>
      <label className="inline-block">
        <div
          style={{ ...(backgroundColor && { backgroundColor }) }}
          className={`${borderRadiusStyles(
            borderRadius
          )} flex items-center justify-center ${widthStyles(
            width
          )} h-[43.5vh] ${
            border ? "border-2 border-solid border-black" : ""
          }  [perspective:62.5rem]`}
        >
          <h1 style={{ ...(color && { color }) }}>{children}</h1>
        </div>
      </label>
    </div>
  );
};

export default CarouselItem;
