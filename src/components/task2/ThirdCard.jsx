import cartoon3 from "../../assets/task2/cartoon3.png";
const ThirdCard = () => {
  return (
    <div
      className={`relative rounded-4xl p-8 text-white bg-purple-700 h-full w-full  flex flex-row items-center md:items-start gap-8 `}
    >
      <div
        style={{
          position: "absolute",
          width: "307px",
          height: "250px",
          bottom: "-55px",
          left: "-140px",
          zIndex: 10,
        }}
      >
        <img
          src={cartoon3}
          alt="cartoon 3"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>
      <div className="w-20" />

      <div className={`flex flex-col text-center md:text-right`}>
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

export default ThirdCard;
