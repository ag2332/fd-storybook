import { useState, useRef, useEffect } from "react";
import { borderRadiusStyles } from "../../utilities/styles";

interface DropDownProps {
  headerLabel: string;
  backgroundColor: string;
  borderRadius: string;
  items: { headerLabel: string }[];
  numberOfItems?: number;
  children: string;
}

const DropDown = ({
  children = "select",
  backgroundColor = "black",
  borderRadius = "md",
  items = [],
}: DropDownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeFocusedIndex, setActiveFocusedIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = () => setOpenDropdown((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!openDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveFocusedIndex((prev) =>
        prev === null || prev === items.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveFocusedIndex((prev) =>
        prev === null || prev === 0 ? items.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && activeFocusedIndex !== null) {
      setSelectedIndex(activeFocusedIndex);
      setOpenDropdown(false);
    } else if (e.key === "Escape") {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    if (activeFocusedIndex !== null && optionRefs.current[activeFocusedIndex]) {
      optionRefs.current[activeFocusedIndex]?.focus();
    }
  }, [activeFocusedIndex]);

  const displayLabel = selectedIndex !== null ? items[selectedIndex].headerLabel : children;

  return (
    <div
      className="relative inline-block text-left"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      >
      <div
        onClick={handleClick}
        className="cursor-pointer inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white"
      >
        {displayLabel}
        <svg
          className="w-4 h-4 ml-2 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div
        style={{ ...(backgroundColor && { backgroundColor }) }}
        className={`absolute w-45 text-right mt-2 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
          openDropdown ? "opacity-100 max-h-[100rem]" : "opacity-0 max-h-0"
        } ${borderRadiusStyles(borderRadius)}`}
      >
        {items.map((item, index) => {
          const isFocused = activeFocusedIndex === index;
          const isSelected = selectedIndex === index;

          return (
            <div
              key={index}
              ref={(e) => {optionRefs.current[index] = e}}
              tabIndex={-1}
              role="option"
              aria-selected={isSelected}
              onClick={() => {
                setSelectedIndex(index);
                setOpenDropdown(false);
              }}
              onMouseEnter={() => setActiveFocusedIndex(null)}
              className={`
                cursor-pointer text-center border border-white/5 p-1 text-sm text-white transition outline-none
                ${isSelected ? "bg-white/10" : ""}
                ${isFocused ? "bg-white/30" : ""}
                hover:bg-white/20
              `}
            >
              {item.headerLabel}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
