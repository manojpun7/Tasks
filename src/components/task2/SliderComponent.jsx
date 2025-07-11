import React from "react";
import arrowLeft from "../../assets/task2/left.svg";
import arrowRight from "../../assets/task2/right.svg";

const SliderComponent = ({
  description,
  imageUrl,
  imageAlt,
  onNext,
  onPrev,
}) => {
  return (
    <div className="relative w-full h-full rounded-4xl">
      <div className="absolute top-8 right-8 text-white text-2xl font-semibold w-1/3 text-center z-10">
        {description}
      </div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom"
      />

      <button
        onClick={onPrev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20"
      >
        <img src={arrowLeft} alt="Previous" className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20"
      >
        <img src={arrowRight} alt="Next" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SliderComponent;
