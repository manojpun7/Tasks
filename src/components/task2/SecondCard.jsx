import cartoon2 from "../../assets/task2/cartoon2.png";
const SecondCard = () => {
  const isHoverable = true;
  const animationClass = isHoverable ? "animate-task2-animation" : "";

  return (
    <div
      className={`relative rounded-4xl p-8 text-white bg-teal-500 h-full flex flex-row-reverse items-center md:items-start gap-8 `}
    >
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "400px",
          top: "-10px",
          right: "-70px",
          zIndex: 10,
        }}
        className={`${animationClass}`}
      >
        <img
          src={cartoon2}
          alt="cartoon 2"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>

      <div className="w-20" />

      <div className={`flex flex-col text-center md:text-left`}>
        <h3 className="text-3xl font-bold mb-2">"Learn by Doing"</h3>
        <p className="text-xl font-semibold mb-4">
          "Practical skills, real projects."
        </p>
        <p className="text-base">
          "Theory is great, but action is better. At SkillShikshya, you learn by
          doing. Hands-on projects and real-world scenarios help you build,
          break, and create—leading to true mastery."
        </p>
      </div>
    </div>
  );
};

export default SecondCard;
