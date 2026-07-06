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
    <div
      className="bg-blue-200
                    text-white
                    min-h-screen"
    >
      <div className="w-250 p-8">
        <div
          className="flex
                    flex-row 
                    flex-wrap
                    gap-1.5 
                    items-center 
                    justify-center"
        >
          {technologies.map((technology) => {
            return <LanguageCard name={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
