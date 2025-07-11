import cartoon1 from "../../assets/task2/cartoon1.png";
const FirstCard = () => {
  const isHoverable = true;
//   const textAlignClass = cardIndex % 2 === 0 ? "md:text-right" : "md:text-left";
//   const flexItem = cardIndex % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const animationClass = isHoverable ? "animate-task2-animation" : "";

  return (
    <div
      className={"relative rounded-4xl p-8 text-white bg-red-500 flex flex-row h-full w-full items-center  md:items-start gap-8 "}
    >
      <div
        style={{
          position: "absolute",
          width: "235px",
          height: "400px",
          top: "0px",
          left: "-125px",
          zIndex: 10,
        }}
        className={`${animationClass}`}
      >
        <img
          src={cartoon1}
          alt="cartoon 1"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>

      <div className="w-20" />

      <div className={`flex flex-col text-center md:text-right`}>
        <h3 className="text-3xl font-bold mb-2">"Start with Clarity"</h3>
        <p className="text-xl font-semibold mb-4">
          "Step into a better learning path."
        </p>
        <p className="text-base">
          "Overwhelmed by too many learning options? SkillShikshya provides a
          clear, curated roadmap from the start. Whether you're a beginner or
          upskilling, we have a path tailored to your growth."
        </p>
      </div>
    </div>
  );
};

export default FirstCard;
