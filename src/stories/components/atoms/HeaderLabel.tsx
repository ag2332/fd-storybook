import { headingTextStyles } from "../../utilities/styles";

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

interface HeaderLabelProps {
  text: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  backgroundColor?: string;
  icon?: string;
  isOpen?: boolean;
  iconVisible?: boolean;
  logoUrl?: string;
}

const HeaderLabel = ({
  text = "",
  textSize = "xl",
  backgroundColor = "red",
  icon,
  isOpen,
  iconVisible = true,
  logoUrl = "https://www.svgrepo.com/show/80156/down-arrow.svg",
}: HeaderLabelProps) => {

  const isValidLogoUrl = isValidHttpUrl(logoUrl);

  return (
    <div
      className={`${headingTextStyles(
        textSize
      )} flex justify-between font-bold p-1.5 px-4 cursor-pointer`}
      style={{
        ...(backgroundColor && {
          backgroundColor,
        }),
      }}
    >
      <span>{text}</span>
      <span
        className={`${
          isOpen
            ? "rotate-180 transition-all duration-400 ease-in-out"
            : "rotate-0 transition-all duration-400 ease-in-out"
        } ${iconVisible ? "opacity-100" : "opacity-0"}`}
      >

        {logoUrl && isValidLogoUrl && (
          <img src={logoUrl} alt="logo" className="w-6.5 h-6.5" />
        )}

        {logoUrl &&  !isValidLogoUrl && (logoUrl
        )}



      </span>
    </div>
  );
};

export default HeaderLabel;
