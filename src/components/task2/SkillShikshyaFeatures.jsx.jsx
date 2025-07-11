import { useState } from 'react';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';
import FourthCard from './FourthCard';
import ZeroIndexCard from './ZeroIndexCard';
import OneIndexCard from './OneIndexCard';

const SkillShikshyaFeatures = () => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);

  return (
    <div
      className="mx-auto p-25 grid grid-cols-1 md:grid-cols-2 gap-8"
      style={{ width: '70vw', height: '90vh' }}
    >
      {/* First card hover */}
      <div 
        onMouseEnter={() => setIsHoveredFirst(true)}
        onMouseLeave={() => setIsHoveredFirst(false)}
        className="cursor-pointer"
      >
        {isHoveredFirst ? <ZeroIndexCard /> : <FirstCard />}
      </div>

      {/* Second card hover */}
      <div
        onMouseEnter={() => setIsHoveredSecond(true)}
        onMouseLeave={() => setIsHoveredSecond(false)}
        className="cursor-pointer"
      >
        {isHoveredSecond ? <OneIndexCard /> : <SecondCard />}
      </div>

      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export default SkillShikshyaFeatures;