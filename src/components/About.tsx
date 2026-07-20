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
      className="bg-blue-900
                    text-white
                    min-h-screen
                    font-manrope"
    >
      <div className="pt-3">
        <div className="flex flex-col items-center">
          <div className="w-34 h-34 rounded-full bg-white flex items-center justify-center shadow-xl">
            <img
              src="src/assets/linkedinpfp.jpeg"
              alt="headshot"
              className="w-28 h-28 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)] z-2"
            />
            <div
              className="h-29
                        w-29
                        z-1
                        absolute"
              /*        animate-spin
                        [animation-duration:_12s]
                        [clip-path:polygon(50%_0%,64%_20%,88%_11%,80%_38%,100%_50%,76%_62%,90%_88%,64%_78%,50%_100%,36%_78%,10%_88%,24%_62%,0%_50%,20%_38%,12%_11%,36%_20%)] */
            ></div>
          </div>
          <h1 className="text-4xl ">About Me</h1>
          <p className="w-5/6">
            I'm a Full Stack Engineer with a strong academic foundation in
            Computer Information Systems, concentrating in Data Analytics, along
            with a minor in Computer Science. I enjoy building scalable,
            user-focused applications from front end to back end, with an
            emphasis on writing clean, maintainable code. By combining software
            engineering with data analytics, I strive to streamline workflows,
            optimize performance, and create intuitive user experiences. I'm
            passionate about solving meaningful problems, collaborating with
            others, and developing innovative solutions that deliver real
            business value.
          </p>
        </div>

        <div className="border mt-4">
          <h2 className="text-center">Proficient Technolgies</h2>
          <div className="flex flex-row justify-center">
            {/* Carousel */}
            <div
              className="w-max
                       overflow-hidden
                       pt-5
                       pb-5"
            >
              {/* Group */}
              <div
                className="flex
                    w-max
                    whitespace-nowrap
                    will-change-transform
                    animate-horizontalInfiniteScroll"
              >
                {technologies.map((technology) => {
                  return <LanguageCard name={technology} key={technology} />;
                })}
                {technologies.map((technology) => {
                  return (
                    <LanguageCard name={technology} key={`${technology}-2`} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p>Software Journey</p>
        <p>Fun Facts</p>
      </div>
    </div>
  );
};

export default About;
