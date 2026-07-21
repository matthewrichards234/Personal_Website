import { useState } from "react";
import LanguageCard from "./LanguageCard";
import AboutCard from "./AboutCard";
import AboutModal from "./AboutModal";
const About = () => {
  const [openModal, setOpenModal] = useState(true);

  const [activeProficientTechnologies, setActiveProficientTechnologies] =
    useState(true);

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

  function toggleProficientTechnologies(): void {
    console.log("The active state is", activeProficientTechnologies);
    setActiveProficientTechnologies(!activeProficientTechnologies);
  }

  function handleOpenModal(): void {
    setOpenModal(true);
  }

  function handleCloseModal(): void {
    setOpenModal(!openModal);
  }

  return (
    <div
      className="bg-blue-900
                    text-white
                    min-h-screen
                    font-manrope"
    >
      <div className="pt-3">
        {/* About Me */}
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

        {/* Proficient Technologies */}
        <div className="mt-4">
          <button
            className="cursor-pointer 
                        text-center 
                        text-2xl 
                        flex
                        mx-auto
                        hover:text-red-600"
            onClick={toggleProficientTechnologies}
          >
            Proficient Technolgies
          </button>
          {activeProficientTechnologies ? (
            <>
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
                      return (
                        <LanguageCard name={technology} key={technology} />
                      );
                    })}
                    {technologies.map((technology) => {
                      return (
                        <LanguageCard
                          name={technology}
                          key={`${technology}-2`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-3/4 flex mx-auto">
                <ul
                  className="flex 
                            flex-row 
                            flex-wrap 
                            gap-3.5
                            justify-center
                            "
                >
                  {technologies.map((technology) => {
                    return (
                      <li
                        className="hover:scale-120
                                    ease-in-out
                                    duration-350"
                      >
                        {technology}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Experience */}
        <div className="mt-3 mb-5">
          <p className="text-4xl text-center mb-2.5">Experience & Education</p>
          <div className="flex flex-row justify-evenly">
            <AboutCard
              title={"SySoft"}
              position={"Software Engineer"}
              dates={"May 2024 - May 2025"}
              icon={"src/assets/engineer-worker-svgrepo-com.svg"}
            />
            <AboutCard
              title={"Synth-Tree"}
              position={"Software Engineer"}
              dates={"October 2025 - December 2025"}
              icon={"src/assets/engineer-worker-svgrepo-com.svg"}
            />
            <AboutCard
              title={"Jewish Communal Fund"}
              position={"Technology Intern"}
              dates={"May 2023 - September 2023"}
              icon={"src/assets/engineer-worker-svgrepo-com.svg"}
            />
          </div>
          <div className="mt-5 flex justify-center gap-8">
            <AboutCard
              title={"Baruch College"}
              position="BBA Data Analysis Major, Computer Science minor"
              dates={"August 2022 - December 2025"}
              icon={"src/assets/student-cap-svgrepo-com.svg"}
            />
            <AboutCard
              title={"TripleTen"}
              position="Software Engineer Student"
              dates={"June 2025 - December 2025"}
              icon={"src/assets/student-cap-svgrepo-com.svg"}
            />
          </div>
        </div>
        <div>
          <p className="text-4xl text-center">Fun Facts</p>
          <AboutModal
            title="Fitness"
            image=""
            isOpen={openModal}
            handleClose={handleCloseModal}
          />
          <button className="cursor-pointer" onClick={handleOpenModal}>
            Open Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
