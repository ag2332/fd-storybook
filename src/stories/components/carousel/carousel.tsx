import { useState, useRef, useEffect } from "react";
import CarouselItem from "./carousel-item";

interface CarouselProps {
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  border?: boolean;
  alwaysShowButtons?: boolean;
  alwaysShowSelector?: boolean;
  children: string
  removeSelectorBG?: boolean;
}

const Carousel = ({
  children = "Carousel Content",
  borderRadius = "md",
  backgroundColor = "red",
  color = "white",
  width = "300",
  border = false,
  alwaysShowButtons = true,
  alwaysShowSelector = true,
  removeSelectorBG = false,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const CarouselItems = Array.from({ length: 10 }, (_, i) => (
    <CarouselItem
    key={i}
    children={children}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    color={color}
    width={width}
    border={border}
    />
  ));

  const SelectorItems = Array.from({ length: CarouselItems.length }, (_, i) => (
    <button
      key={i}
      onClick={() => selectCount(i)}
      className={`cursor-pointer w-2.5 h-2.5 rounded-full hover:bg-gray-400 ${
        i === currentIndex ? "bg-black" : "bg-gray-300"
      }
      ${alwaysShowSelector ? "opacity-100" : "opacity-0"}`}
    ></button>
  ));

  const countUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselItems.length);
  };

  const countDown = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + CarouselItems.length) % CarouselItems.length
    );
  };

  const selectCount = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const current = itemsRef.current[currentIndex];
    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div className="overflow-x-hidden py-20">
        <div className="flex gap-[3rem]">
          {CarouselItems.map((item, index) => (
            <div
              key={index}
              ref={(itemRef) => {
                itemsRef.current[index] = itemRef;
              }}
              className={`shrink-0 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full top-full flex flex-col items-center gap-4 z-10">
        <div
        style={{
            ...(!removeSelectorBG && backgroundColor && { backgroundColor }),
        }}
        className="flex justify-center gap-[1rem] p-3 rounded-lg">
          {SelectorItems}
        </div>
        <div className={`${alwaysShowButtons ? "opacity-100" : "opacity-0"} flex gap-[1rem] justify-center items-center w-full`}>
          <button
            onClick={countDown}
            className="cursor-pointer flex items-center justify-center w-12 h-12 border-2 border-black rounded-full text-black hover:bg-gray-100"
          >
            &lt;
          </button>
          <button
            onClick={countUp}
            className="cursor-pointer flex items-center justify-center w-12 h-12 border-2 border-black rounded-full text-black hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;