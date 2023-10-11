import React, { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "@geist-ui/icons";

const ImageSlider = ({ slides }) => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const goToPrev = () => {
    const isFirst = currentIdx === 0;
    const idx = isFirst ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(idx);
  };
  const goToNext = () => {
    const isLast = currentIdx === slides.length - 1;
    const idx = isLast ? 0 : currentIdx + 1;
    setCurrentIdx(idx);
  };
  return (
    <div className="w-full lg:max-w-7xl h-full">
      <div className="h-full   relative px-3 py-1 md:px-10">
        <ArrowLeftCircle
          onClick={goToPrev}
          size={36}
          className="absolute top-[40%] md:top-[50%] md:translate-x-[50%] left-4 md:left-8 text-5xl hover:bg-white rounded-full cursor-pointer"
        />
        <ArrowRightCircle
          onClick={goToNext}
          size={36}
          className="absolute top-[40%] md:top-[50%] md:translate-x-[-50%] right-4 md:right-8 text-5xl hover:bg-white rounded-full cursor-pointer"
        />
        <div
          className="w-full h-full rounded-sm bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url(${slides[currentIdx].url})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
