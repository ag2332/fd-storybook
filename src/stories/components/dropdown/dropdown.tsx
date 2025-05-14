import { useState, useRef, useEffect } from "react";
import { borderRadiusStyles } from "../../utilities/styles";

interface DropDownProps {
  label: string;
  backgroundColor: string;
  borderRadius: string;
  selectSize: boolean
}

const DropDown = ({
  label = "select",
  backgroundColor = "black",
  borderRadius = "md",
  selectSize = true,
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
      } else if (openDropdown && activeFocusedIndex === null) {
        setOpenDropdown(false);
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

  const selectedValue = value !== null ? `${items[value].value}` : "";

  return (
    <>
      <div className={`max-w-[500px]`}>
        <div
          className="relative text-left"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            onClick={handleClick}
            className={`${borderRadiusStyles(
              borderRadius
            )} cursor-pointer ${selectSize ? "flex justify-between w-full" : "inline-flex"} items-center gap-2 bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white`}
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
            className={`absolute w-full text-right mt-2 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
              openDropdown ? "opacity-100 max-h-[100rem]" : "opacity-0 max-h-0"
            }
            ${borderRadiusStyles(borderRadius)}
            `}
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
                cursor-pointer text-center border border-white/5 p-3 text-sm text-white transition outline-none
                ${isSelected ? "bg-white/10" : ""}
                ${isFocused ? "bg-white/30" : ""}
                hover:bg-white/20 w-full text-left
              `}
                >
                  <div className="w-full bg-transparent border-none outline-none">
                    {`${item.name} — ${item.title}: ${item.value} BHP`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
