import React, { useState } from "react";
import SliderComponent from "./SliderComponent";
import img1 from "../../assets/task2/two-man.png";
import img2 from "../../assets/task2/many-man.png";

const OneIndexCard = () => {
  const sliderData = [
    {
      description: "Focused faces--Learning mode: ON!",
      imageUrl: img1,
      imageAlt: "Person thinking with glasses",
    },
    {
      description: "Laptops, lessons, and a whole lot of growth",
      imageUrl: img2,
      imageAlt: "Person writing on a notepad",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = sliderData[currentIndex];

  return (
    <div className="relative bg-teal-500 text-white rounded-4xl p-6 overflow-hidden w-full h-full">
      <SliderComponent
        description={currentSlide.description}
        imageUrl={currentSlide.imageUrl}
        imageAlt={currentSlide.imageAlt}
        onNext={goNext}
        onPrev={goPrev}
      />
    </div>
  );
};

export default OneIndexCard;
