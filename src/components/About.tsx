import LanguageCard from "./LanguageCard";
const About = () => {
  const technologies = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "Java",
    "C++",
    "Node.js",
    "MongoDB",
    "SQL",
    "Git",
    "Vite",
    "NumPy",
    "Matplotlib",
    "Jupyter Notebook",
  ];
  return (
    // Body
    <div
      className="bg-blue-400
                    text-white
                    min-h-screen"
    >
      {/* Carousel */}
      <div
        className="w-250 
        p-8 
        border
      border-amber-700
        overflow-hidden"
      >
        {/* Group */}
        <div
          className="flex
                    gap-1.5
                    w-max
                    whitespace-nowrap
                    animate-horizontalInfiniteScroll"
        >
          {technologies.map((technology) => {
            return <LanguageCard name={technology} />;
          })}
          {technologies.map((technology) => {
            return <LanguageCard name={technology} />;
          })}
          {technologies.map((technology) => {
            return <LanguageCard name={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
