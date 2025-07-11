import { useState } from "react";

import user1 from "../assets/task1/user1.png";
import user2 from "../assets/task1/user2.png";
import user3 from "../assets/task1/user3.png";
import user4 from "../assets/task1/user4.png";
import user5 from "../assets/task1/user5.png";
import user6 from "../assets/task1/user6.png";
import emoji1 from "../assets/task1/emoji1.gif";
import emoji2 from "../assets/task1/emoji2.gif";
import emoji3 from "../assets/task1/emoji3.gif";
import emoji4 from "../assets/task1/emoji4.gif";
import rating from "../assets/task1/rating.png";
import TestimonialCard from "../components/task1/TestimonialCard";
import previewVideo from "../assets/task1/video.mp4";

const Task1 = () => {
  const [mainHovered, setMainHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

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
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-[1214px] h-[697px] opacity-100
                 overflow-hidden cursor-pointer"
      onMouseEnter={() => setMainHovered(true)}
      onMouseLeave={() => {
        setMainHovered(false);
        setHoveredId(null);
      }}
    >
      <div
        className="relative w-[1214px] h-[697px] overflow-hidden rounded-lg
                   bg-white flex items-center justify-center"
      >
        <div className="absolute top-[178px] left-[292px] w-[630px] h-[341px] opacity-100">
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                onMouseEnter={() => {
                  if (
                    mainHovered &&
                    (image.id === "user1" || image.id === "user6")
                  ) {
                    setHoveredId(image.id);
                  }
                }}
                onMouseLeave={() => {
                  if (image.id === "user1" || image.id === "user6") {
                    setHoveredId(null);
                  }
                }}
                className={`absolute w-[96px] h-[97px] rounded-[32px] transition-all duration-700 ease-in-out 
        ${mainHovered ? image.posB : image.posA} 
        ${mainHovered && image.isPng ? "animate-smooth-up-down" : ""}`}
                style={
                  mainHovered && image.isPng
                    ? { animationDelay: image.animationDelay }
                    : {}
                }
              />
              <img
  src={rating}
  alt="Rating for User1"
  className={`absolute w-[70px] h-auto z-40 transition-all duration-700 ease-in-out animate-blink2s-user1
    ${mainHovered ? "top-[-120px] left-[-5px]" : "top-[25px] left-[200px]"}`}
/>

<img
  src={rating}
  alt="Rating for User6"
  className={`absolute w-[70px] h-auto z-40 transition-all duration-700 ease-in-out animate-blink2s-user6
    ${mainHovered ? "bottom-[-100px] right-[0px]" : "bottom-[20px] right-[70px]"}`}
/>

            </div>
          ))}

          {mainHovered && hoveredId === "user1" && (
            <div className="absolute top-[-40px] left-[-90px] z-50">
              <TestimonialCard />
            </div>
          )}

          {mainHovered && hoveredId === "user6" && (
            <div className="absolute bottom-[-10px] right-[-25px] z-50 w-[250px] h-[300px] rounded-lg overflow-hidden shadow-lg">
              <video
                src={previewVideo}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="flex flex-col items-center justify-center p-5 gap-[20px]
                       w-[399px] h-[131px] absolute top-[114px] left-[120px]"
          >
            <p className="text-gray-700 w-[399px] h-[30px] font-normal text-[24px] leading-[100%] tracking-[0%]">
              Hear How They Level Up Their Game!
            </p>

            <h2 className="flex items-center justify-center w-[336px] h-[38px] gap-[4px] font-bold text-3xl whitespace-nowrap">
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

export default Task1;
