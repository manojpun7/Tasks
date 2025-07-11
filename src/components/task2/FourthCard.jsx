import cartoon4 from "../../assets/task2/cartoon4.png";
const FirstCard = () => {
  return (
    <div
      className={`relative rounded-4xl p-8 text-white h-full w-full bg-amber-700 flex flex-row-reverse items-center md:items-start gap-8 `}
    >
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "310px",
          top: "50px",
          right: "-70px",
          zIndex: 10,
        }}
      >
        <img
          src={cartoon4}
          alt="cartoon 1"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>

      <div className="w-20" />

      <div className={`flex flex-col text-center md:text-left`}>
        <h3 className="text-3xl font-bold mb-2">"Achieve & Showcase"</h3>
        <p className="text-xl font-semibold mb-4">
          "Build your portfolio, get job-ready."
        </p>
        <p className="text-base">
          "Your journey ends with achievement. Each completed project builds a
          portfolio showcasing your skills and job readiness, bringing you
          closer to that dream job, promotion, or your own venture."
        </p>
      </div>
    </div>
  );
};
export default FirstCard;
