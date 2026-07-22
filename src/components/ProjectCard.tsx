interface ProjectCardI {
  title: string;
  images: string[];
  technologies: string[];
  description: string;
  githubLink: string;
}

const ProjectCard = ({
  title,
  images,
  technologies,
  description,
  githubLink,
}: ProjectCardI) => {
  return (
    <div>
      {/* Card */}
      <div
        className="border 
                    shadow-2xl 
                    w-610 
                    h-230 
                    rounded-xl 
                    overflow-hidden
                    "
      >
        {/* Card Content (images and text) */}
        <div className="flex flex-row h-full">
          {/* Card images (with scroll functionality) */}
          <div className="bg-white w-full h-full text-black">
            <div
              className="flex 
                          flex-col 
                          overflow-y-auto 
                          h-full
                          p-3
                          rounded-2xl
                          space-y-100
                          "
            >
              {images.map((image) => (
                <img
                  src={image}
                  className="border
                              h-full 
                              shrink-0
                              rounded-2xl 
                              shadow-2xl
                              animate-scrollAppear 
                              [animation-timeline:view()] 
                              [animation-range:entry_0%_cover_100%]"
                />
              ))}
            </div>
          </div>

          {/* Card text (title, technologies used, description, etc) */}
          <div
            className="flex
                      flex-col 
                    bg-white 
                      w-1/2
                      text-black"
          >
            <p className="font-bold text-5xl text-center mt-13 mb-5">{title}</p>

            {/* Technologies */}
            <p className="font-bold text-3xl ml-5 mb-5 text-blue-900">
              Technologies Used
            </p>

            {/* List of Technologies */}
            <div
              className="flex 
                            flex-row 
                            gap-5 
                            flex-wrap 
                            ml-5.5 
                            text-blue-900"
            >
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="hover:scale-120 
                              ease-in-out 
                              duration-350 
                              text-lg
                              bg-blue-100
                              text-blue-900
                              px-4
                              py-2
                              rounded-full
                              "
                >
                  {technology}
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              className="font-bold 
                          text-3xl 
                          ml-5 
                          mb-5 
                          mt-7 
                          text-blue-900"
            >
              Description
            </p>
            <div className="ml-5.5 text-xl/11">{description}</div>

            {/* Button */}
            <div className="mt-auto mb-3 ml-2">
              <a href={githubLink} target="_blank">
                <button
                  className="
                        rounded-xl
                        border
                        border-blue-900
                        px-6
                        py-3
                        text-blue-900
                        transition
                        duration-300
                        hover:bg-blue-900
                        hover:text-white
                        cursor-pointer
                      "
                >
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
