import { useState } from "react";
import LanguageCard from "./LanguageCard";
import AboutCard from "./AboutCard";
import AboutModal from "./AboutModal";
const About = () => {
  const [activateModal, setActivateModal] = useState(null);

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

  function handleOpenModal(modal: string): void {
    setActivateModal(modal);
  }

  function handleCloseModal(): void {
    setActivateModal(null);
  }

  return (
    <div
      className="bg-blue-900
                    text-white
                    min-h-screen
                    font-manrope
                    "
    >
      <div className="pt-3">
        {/* About Me */}
        <div className="flex flex-col items-center">
          <div
            className="size-34
                      sm:size-36 
                      md:size-38
                      lg:size-40
                      rounded-full 
                      bg-white 
                      flex 
                      items-center 
                      justify-center 
                      shadow-xl"
          >
            <img
              src="src/assets/linkedinpfp.jpeg"
              alt="headshot"
              className="
              size-28
              sm:size-30 
              md:size-32
              lg:size-34
              rounded-full 
              shadow-[0_10px_30px_rgba(0,0,0,0.35)] 
              z-2
              "
            />
          </div>
          <p className="text-5xl py-1">About Me</p>
          <p className="w-5/6 text-lg md:text-2xl py-2">
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
          <p
            className="text-center 
                        md:text-5xl
                        text-3xl "
          >
            Proficient Technolgies
          </p>
          <button
            className="cursor-pointer 
                        text-center 
                        text-2xl 
                        flex
                        mx-auto
                        text-gray-300
                        hover:text-black
                        mt-2"
            onClick={toggleProficientTechnologies}
          >
            click me to stop the animation
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
              <div className="w-1/2 flex mx-auto justify-center flex-wrap">
                <ul
                  className="flex 
                            flex-row 
                            flex-wrap 
                            gap-8
                            justify-center
                            mb-6
                            mt-3
                            "
                >
                  {technologies.map((technology) => {
                    return (
                      <li
                        className="hover:scale-120
                                    ease-in-out
                                    duration-350
                                    cursor-default
                                    text-xl
                                    sm:text-2xl
                                    lg:text-3xl
                                    "
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
          <p className="text-5xl text-center mb-4">Experience & Education</p>
          <div
            className="flex 
                      flex-col 
                      justify-evenly 
                      items-center
                      gap-2 
                      md:flex-row"
          >
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
          <div className="mt-2 flex flex-col justify-evenly items-center gap-2 md:flex-row">
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

        {/* Fun Facts */}
        <div className="p-3 m-3">
          <p className="text-4xl text-center">Fun Facts</p>
          <p className="text-lg text-center mb-3 text-gray-300">
            Click a fun fact to open more info
          </p>
          <div
            className="flex 
                          flex-col 
                          justify-center 
                          items-center 
                          gap-2 
                          md:flex-row"
          >
            <AboutModal
              title="Fitness"
              image="src/assets/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg"
              description="I love fitness! I have been working out for 4.5+ years: Lifting, Boxing, Muay Thai, Pilates, Yoga, etc. My max deadlift is 315lbs!"
              isOpen={activateModal === "fitness"}
              handleClose={handleCloseModal}
            />
            <AboutModal
              title="Reading"
              image="src/assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg"
              description="I am an avid reader! Some of my favorite authors include Malcolm Gladwell, Robert Greene, and Haruki Marukami. You can also find me reading manga."
              isOpen={activateModal === "reading"}
              handleClose={handleCloseModal}
            />
            <AboutModal
              title="Movies"
              image="src/assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg"
              description="I've become quite the movie critic lately. As of 2026, my favorite movie has been Obsession. It was very refreshing to see an indie movie have such an effect on me."
              isOpen={activateModal === "movies"}
              handleClose={handleCloseModal}
            />
            <button
              className="cursor-pointer"
              onClick={() => {
                handleOpenModal("fitness");
              }}
            >
              <AboutCard
                title="Fitness"
                icon="src/assets/dumbell-svgrepo-com.svg"
              />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                handleOpenModal("reading");
              }}
            >
              <AboutCard
                title="Reading"
                icon="src/assets/books-svgrepo-com.svg"
              />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                handleOpenModal("movies");
              }}
            >
              <AboutCard
                title="Movies"
                icon="src/assets/movies-svgrepo-com.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
