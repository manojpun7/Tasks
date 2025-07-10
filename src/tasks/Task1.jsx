import { useState } from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import emoji1 from "../assets/emoji1.gif";
import emoji2 from "../assets/emoji2.gif";
import emoji3 from "../assets/emoji3.gif";
import emoji4 from "../assets/emoji4.gif";

const Test = () => {
  const [hovered, setHovered] = useState(false);

  const images = [
    {
      id: "user1",
      src: user1,
      alt: "User 1",
      posA: "top-[10px] left-[120px]",
      posB: "top-[-120px] left-[-90px]",
      isPng: true,
      animationDelay: "0s", 
    },
    {
      id: "user2",
      src: user2,
      alt: "User 2",
      posA: "top-[10px] right-[120px]",
      posB: "top-[-130px] right-[-90px]",
      isPng: true,
      animationDelay: "0.8s", 
    },
    {
      id: "user3",
      src: user3,
      alt: "User 3",
      posA: "top-[100px] right-[0px]",
      posB: "top-[100px] right-[-150px]",
      isPng: true,
      animationDelay: "0.4s", 
    },
    {
      id: "user4",
      src: user4,
      alt: "User 4",
      posA: "top-[100px] left-[10px]",
      posB: "top-[100px] left-[-200px]",
      isPng: true,
      animationDelay: "0.6s", 
    },
    {
      id: "user5",
      src: user5,
      alt: "User 5",
      posA: "top-[244px] left-[128px]",
      posB: "top-[370px] left-[50px]",
      isPng: true,
      animationDelay: "1s", 
    },
    {
      id: "user6",
      src: user6,
      alt: "User 6",
      posA: "bottom-[0px] right-[125px]",
      posB: "bottom-[-120px] right-[50px]",
      isPng: true,
      animationDelay: "1.2s",
    },
    {
      id: "emoji1",
      src: emoji1,
      alt: "Emoji 1",
      posA: "top-[213px] left-[10px]",
      posB: "top-[300px] left-[-120px]",
      isPng: false,
      animationDelay: "0s", 
    },
    {
      id: "emoji2",
      src: emoji2,
      alt: "Emoji 2",
      posA: "top-[220px] left-[520px]",
      posB: "top-[300px] left-[650px]",
      isPng: false,
      animationDelay: "0s",
    },
    {
      id: "emoji3",
      src: emoji3,
      alt: "Emoji 3",
      posA: "top-[239px] left-[257px]",
      posB: "top-[350px] left-[257px]",
      isPng: false,
      animationDelay: "0s",
    },
    {
      id: "emoji4",
      src: emoji4,
      alt: "Emoji 4",
      posA: "top-[1px] left-[260px]",
      posB: "top-[-120px] left-[260px]",
      isPng: false,
      animationDelay: "0s",
    },
  ];

  return (
    // Outermost div
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-[1214px] h-[697px] opacity-100
                 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Main content container  */}
      <div
        className="relative w-[1214px] h-[697px] overflow-hidden rounded-lg
                   bg-white flex items-center justify-center"
      >
        {/* Inner container  */}
        <div className="absolute top-[178px] left-[292px] w-[630px] h-[341px] opacity-100">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`absolute w-[96px] h-[97px] rounded-[32px] transition-all duration-700 ease-in-out ${
                hovered ? image.posB : image.posA
              } ${hovered && image.isPng ? 'animate-smooth-up-down' : ''}`}
              // Dynamically apply animation-delay using style prop
              style={hovered && image.isPng ? { animationDelay: image.animationDelay } : {}}
            />
          ))}

          {/* Main textual content container  */}
          <div
            className="flex flex-col items-center justify-center p-5 gap-[20px]
                           w-[399px] h-[131px] absolute top-[114px] left-[120px]"
          >
            <p
              className="text-gray-700 opacity-100 w-[399px] h-[30px]
                             font-normal text-[24px] leading-[100%] tracking-[0%]"
            >
              Hear How They Level Up Their Game!
            </p>

            <h2
              className="flex items-center justify-center w-[336px] h-[38px] gap-[4px]
                             font-bold text-3xl whitespace-nowrap"
            >
              <span>Skill</span>
              <span className="text-green-500">Masters</span>
              <span>Unite!</span>
              <span className="ml-2 text-3xl">🤝</span>
            </h2>

            <a className="text-black flex items-center font-bold cursor-pointer hover:underline">
              View all Testimonials <span className="ml-1 font-bold">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;