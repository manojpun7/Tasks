import { useState } from 'react';
import { motion } from 'framer-motion';
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
      className="mx-auto p-20 grid grid-cols-1 md:grid-cols-2 gap-8"
      style={{ width: '70vw', height: '90vh' }}
    >
      <motion.div
        onMouseEnter={() => setIsHoveredFirst(true)}
        onMouseLeave={() => setIsHoveredFirst(false)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {isHoveredFirst ? <ZeroIndexCard /> : <FirstCard />}
      </motion.div>

      <motion.div
        onMouseEnter={() => setIsHoveredSecond(true)}
        onMouseLeave={() => setIsHoveredSecond(false)}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {isHoveredSecond ? <OneIndexCard /> : <SecondCard />}
      </motion.div>
      
      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export default SkillShikshyaFeatures;
