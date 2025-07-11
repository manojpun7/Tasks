

import personWithLaptop from '../../assets/task2/man.png'; 
import arrowLeft from '../../assets/task2/left.svg';
import arrowRight from '../../assets/task2/right.svg';
const ZeroIndexCard = () => {
  return (
    <div className="relative h-full w-full bg-red-500 rounded-4xl  overflow-hidden">
    
      <img
        src={personWithLaptop}
        alt="Person working on a laptop"
        className="relative bottom-0 left-0 w-[350px] h-full object-cover object-bottom"
      />

      <div className="absolute top-8 right-8 text-white text-2xl font-semibold w-1/3 text-center z-10">
        Clarity unlocked— stickers, sips, and skills all in one go!
      </div>

      <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20">
        <img src={arrowLeft} alt="Previous" className="w-6 h-6" />
      </button>

      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20">
        <img src={arrowRight} alt="Next" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ZeroIndexCard;