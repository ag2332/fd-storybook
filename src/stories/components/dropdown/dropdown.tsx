import { useState, useRef, useEffect } from "react";
import { borderRadiusStyles } from "../../utilities/styles";

interface DropDownProps {
  label: string;
  backgroundColor: string;
  borderRadius: string;
}

const DropDown = ({
  label = "select",
  backgroundColor = "black",
  borderRadius = "md",
}: DropDownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activeFocusedIndex, setActiveFocusedIndex] = useState<number | null>(
    null
  );
  const [value, setValue] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    {
      name: "Ferrari",
      title: "Ferrari SF90 Stradale",
      value: 986,
    },
    {
      name: "Lamborghini",
      title: "Lamborghini Aventador SVJ",
      value: 759,
    },
    {
      name: "Mclaren",
      title: "McLaren 765LT",
      value: 755,
    },
    {
      name: "Bugatti",
      title: "Bugatti Chiron Super Sport",
      value: 1578,
    },
    {
      name: "Porsche",
      title: "Porsche 911 Turbo S",
      value: 641,
    },
  ];

  const handleClick = () => setOpenDropdown((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!openDropdown) {
        setOpenDropdown(true);
        setActiveFocusedIndex(0);
      } else if (activeFocusedIndex !== null) {
        setSelectedIndex(activeFocusedIndex);
        setOpenDropdown(false);
      }
      return;
    }

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
    } else if (e.key === "Escape") {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    if (activeFocusedIndex !== null && optionRefs.current[activeFocusedIndex]) {
      optionRefs.current[activeFocusedIndex]?.focus();
    }
  }, [activeFocusedIndex]);

  const displayLabel =
    selectedIndex !== null
      ? `${items[selectedIndex].title}: ${items[selectedIndex].value} BHP`
      : label;

  const selectedValue =
    value !== null
      ? `${items[value].value}`
      : "";

  console.log(selectedValue)

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        style={{ ...(backgroundColor && { backgroundColor }) }}
        className={`absolute w-65 text-right mt-2 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
          openDropdown ? "opacity-100 max-h-[100rem]" : "opacity-0 max-h-0"
        } ${borderRadiusStyles(borderRadius)}`}
      >
        {items.map((item, index) => {
          const isFocused = activeFocusedIndex === index;
          const isSelected = selectedIndex === index;

          return (
            <div
              key={index}
              ref={(e) => {
                optionRefs.current[index] = e;
              }}
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
              <div className="w-full bg-transparent border-none outline-none">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
