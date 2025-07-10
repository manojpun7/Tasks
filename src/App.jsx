import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const HoverSwitcher = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <ComponentB /> : <ComponentA />}
    </div>
  );
};

export default HoverSwitcher;
