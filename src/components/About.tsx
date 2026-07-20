import LanguageCard from "./LanguageCard";
import AboutCard from "./AboutCard";
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
          <p className="text-4xl">About Me</p>
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
          <p className="text-center text-2xl">Proficient Technolgies</p>
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

        <div className="border mt-3">
          <p className="text-4xl text-center">Experience</p>
          <div className="border">
            <AboutCard
              title={"SySoft"}
              position={"Software Engineer"}
              dates={"May 2024 - May 2025"}
              icon={""}
            />
          </div>
          <div className="border">
            <AboutCard
              title={"Synth-Tree"}
              position={"Software Engineer"}
              dates={"October 2025 - December 2025"}
              icon={""}
            />
          </div>
          <div className="border">
            <AboutCard
              title={"Jewish Communal Fund"}
              position={"Technology Intern"}
              dates={"May 2023 - September 2023"}
              icon={""}
            />
          </div>
        </div>
        <p className="text-4xl text-center">Fun Facts</p>
      </div>
    </div>
  );
};

export default About;
