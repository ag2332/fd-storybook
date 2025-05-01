interface CarouselItemProps {}

const CarouselItem = ({}: CarouselItemProps) => {
  return (
    <div>
      <label className="inline-block">
        <div className="flex items-center justify-center w-[16vw] h-[43.5vh] bg-black border-[2.4px] border-black rounded-[0.8rem] [perspective:62.5rem]">
          <h1 className="text-white">Carousel Item</h1>
        </div>
      </label>
    </div>
  );
};

export default CarouselItem;
