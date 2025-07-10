import React from 'react';

const FeatureCard = ({
  title,
  subtitle,
  description,
  bgColor,
  imageUrl,
  imageAlt,
  cardIndex,
  imageCustomStyle,
}) => {
  const textAlignClass = cardIndex % 2 === 0 ? "md:text-right" : "md:text-left";
  const flexItem = cardIndex % 2 === 0 ? "flex-row" : "flex-row-reverse";

  // Apply bounce animation only to the first two cards
  const animationClass = cardIndex < 2 ? 'animate-task2-animation' : '';

  return (
    <div
      className={`relative rounded-4xl p-8 text-white ${bgColor} flex ${flexItem} items-center md:items-start gap-8`}
    >
      {/* Image container with animation */}
      <div style={imageCustomStyle} className={`${animationClass}`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="w-20" />

      <div className={`flex flex-col text-center ${textAlignClass}`}>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-xl font-semibold mb-4">{subtitle}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
