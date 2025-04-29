type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export function bodyTextStyles(bodyTextSize: string) {
const bodytext = textStyles(bodyTextSize as TextSize) || "text-base";
return bodytext;
}

export function headingTextStyles(headingTextSize: string) {
const headingtext = textStyles(headingTextSize as TextSize) || "text-xl";
return headingtext;
}

export function textStyles(textSize: string) {
const textStylesList = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  }[textSize];
    return textStylesList;
}

export function borderRadiusStyles(radius: string) {
  const borderRadiusStylesList = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }[radius];
  return borderRadiusStylesList;
}

const yPosition = "left-1/2 -translate-x-1/2";
const xPosition = "top-1/2 -translate-y-1/2";

export function positionStyles(position: string) {
  const positionStylesList = {
    top: `bottom-full ${yPosition} mb-10`,
    bottom: `top-full ${yPosition} mt-10`,
    left: `right-full ${xPosition} mr-10`,
    right: `left-full ${xPosition} ml-10`,
  }[position];
  return positionStylesList;
}

export function triangleStyles(position: string) {
const triangleStylesList = {
    top: `top-full ${yPosition} rotate-135 -mt-3`,
    bottom: `bottom-full ${yPosition} rotate-315 -mb-3`,
    left: `left-full ${xPosition} rotate-45 -ml-3`,
    right: `right-full ${xPosition} rotate-225 -mr-3`,
  }[position];
    return triangleStylesList;
}

export function widthStyles(width: string) {
const widthStylesList = {
    100: "w-[100px]",
    200: "w-[200px]",
    300: "w-[300px]",
    400: "w-[400px]",
    500: "w-[500px]",
    600: "w-[600px]",
  }[width];
    return widthStylesList;
}
