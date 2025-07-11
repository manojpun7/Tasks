import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import ZeroIndexCard from "./ZeroIndexCard";
import OneIndexCard from "./OneIndexCard";

const HoverSwitchCard = ({cardIndex}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isHoverable = cardIndex < 2;

  const handleMouseEnter = () => {
    if (isHoverable) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isHoverable) setIsHovered(false);
  };

  let content;
  if (isHovered && cardIndex === 0) {
    content = <ZeroIndexCard />;
  } else if (isHovered && cardIndex === 1) {
    content = <OneIndexCard />;
  } else {
    content = <FeatureCard {...props} />;
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {content}
    </div>
  );
};

export default HoverSwitchCard;
