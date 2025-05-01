import { useState, useRef, useEffect } from "react";
import CarouselItem from "./carousel-item";

interface CarouselProps {}

const Carousel = ({}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const CarouselItems = Array.from({ length: 10 }, (_, i) => (
    <CarouselItem key={i} />
  ));

  const SelectorItems = Array.from({ length: CarouselItems.length }, (_, i) => (
    <button
      key={i}
      className={`w-2 h-2 rounded-full ${
        i === currentIndex ? "bg-black" : "bg-gray-300"
      }`}
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
    <>
      <div className="overflow-auto">
        <div className="flex gap-[2rem] px-4 py-10">
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
        <div className="flex my-12 justify-center gap-[1rem]">
            {SelectorItems}
        </div>
      <div className=" w-full flex gap-[1rem] mt-5 justify-center">
        <button
          onClick={countDown}
          className="cursor-pointer top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 border-2 border-black rounded-full text-black hover:bg-gray-100"
        >
          &lt;
        </button>
        <button
          onClick={countUp}
          className="cursor-pointer top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 border-2 border-black rounded-full text-black hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carousel;
