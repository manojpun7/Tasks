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

const Task2 = () => {
  return (
    // Outermost div
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-[1214px] h-[697px] opacity-100
                 bg-white border border-gray-300
                 overflow-hidden"
    >
      {/* New Div */}
      <div
        className="absolute top-[178px] left-[292px]
                   w-[630px] h-[341px] opacity-100
                   bg-white border border-gray-300"
      >
        {/* Images and GIFs positioned around the main content */}
        <img
          src={user1}
          alt="Emoji 1"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[10px] left-[120px]"
        />
        <img
          src={user2}
          alt="User 2"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[10px] right-[120px]"
        />
        <img
          src={user3}
          alt="User 3"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[100px] right-[0px]"
        />
        <img
          src={user4}
          alt="User 4"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[100px] left-[10px]"
        />
        <img
          src={user5}
          alt="User 5"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[244px] left-[128px]"
        />
        <img
          src={user6}
          alt="User 6"
          className="absolute w-[96px] h-[97px] rounded-[32px] bottom-[0px] right-[125px]"
        />
        <img
          src={emoji1}
          alt="Emoji 1"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[213px] left-[10px]"
        />
        <img
          src={emoji2}
          alt="Emoji 2"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[220px] left-[520px]"
        />
        <img
          src={emoji3}
          alt="User 3"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[239px] left-[257px]"
        />
        <img
          src={emoji4}
          alt="Emoji 4"
          className="absolute w-[96px] h-[97px] rounded-[32px] top-[1px] left-[260px]"
        />

        {/* Main content container */}
        <div
          className="flex flex-col items-center justify-center p-5
                     w-[399px] h-[131px] gap-[20px]
                     border border-gray-400
                     absolute top-[114px] left-[120px]"
        >
          <p
            className="text-gray-700 opacity-100
                       w-[399px] h-[30px]
                       font-outfit font-normal text-[24px]
                       leading-[100%] tracking-[0%]"
          >
            Hear How They Level Up Their Game!
          </p>

          <h2
            className="flex items-center justify-center
                       w-[336px] h-[38px] gap-[4px]
                       font-bold font-sans
                       text-3xl whitespace-nowrap"
          >
            <span>Skill</span>
            <span className="text-green-500">Masters</span>
            <span>Unite!</span>
            <span className="emoji-container">🤝</span>
          </h2>

          <p className="text-black hover:underline flex items-center font-sans font-bold">
            View all Testimonials <span className="ml-1">→</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task2;
