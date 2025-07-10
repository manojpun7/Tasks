import React from 'react';

import cartoon1 from '../../assets/task2/cartoon1.png';
import cartoon2 from '../../assets/task2/cartoon2.png';
import cartoon3 from '../../assets/task2/cartoon3.png';
import cartoon4 from '../../assets/task2/cartoon4.png';
import FeatureCard from './FeatureCard';

const SkillShikshyaFeatures = () => {
  const features = [
    {
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      description:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      bgColor: "bg-red-500",
      imageUrl: cartoon1,
      imageAlt: "Person thinking with glasses",
    },
    {
      title: "Learn by Doing",
      subtitle: "Practical skills, real projects.",
      description:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      bgColor: "bg-teal-500",
      imageUrl: cartoon2,
      imageAlt: "Person writing on a notepad",
    },
    {
      title: "Get Mentored & Supported",
      subtitle: "You're not learning alone.",
      description:
        "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
      bgColor: "bg-purple-700",
      imageUrl: cartoon3,
      imageAlt: "Person with headphones",
    },
    {
      title: "Achieve & Showcase",
      subtitle: "Build your portfolio, get job-ready.",
      description:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      bgColor: "bg-amber-700",
      imageUrl: cartoon4,
      imageAlt: "Person working on a laptop",
    },
  ];


  const imageCustomPositions = [
    { // Style for cartoon1 (index 0)
      position: 'absolute',
      width: '257.39px',
      height: '338.59px', 
      top: '15px',       
      left: '-100px',     
      zIndex: 10,
    },
    { // Style for cartoon2 (index 1)
      position: 'absolute',
      width: '200px',   
      height: '400px',   
      top: '-10px',       
      right: '-70px',     
      zIndex: 10,
    },
    { // Style for cartoon3 (index 2)
      position: 'absolute',
      width: '307px',
      height: '250px',
      bottom: '-55px',    
      left: '-140px',      
      zIndex: 10,
    },
    { // Style for cartoon4 (index 3)
      position: 'absolute',
      width: '280px',
      height: '310px',
      top: '50px',     
      right: '-70px',    
      zIndex: 10,
    },
  ];

  return (
    <div
      className="mx-auto p-25 grid grid-cols-1 md:grid-cols-2 gap-8"
      style={{ width: '70vw', height: '90vh' }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          subtitle={feature.subtitle}
          description={feature.description}
          bgColor={feature.bgColor}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
          cardIndex={index}
          imageCustomStyle={imageCustomPositions[index]}
        />
      ))}
    </div>
  );
};

export default SkillShikshyaFeatures;