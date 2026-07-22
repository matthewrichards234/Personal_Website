interface ProjectCardI {
  title: string;
  images: string[];
  technologies: string[];
  description: string;
}

const ProjectCard = ({
  title,
  images,
  technologies,
  description,
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
                    overflow-hidden"
      >
        {/* Card Content (images and text) */}
        <div className="flex flex-row h-full">
          {/* Card images (with scroll functionality) */}
          <div className="bg-gray-400 w-full h-full">
            <div
              className="flex 
            flex-col 
            overflow-y-auto 
            h-full
            p-3
            rounded-2xl"
            >
              {images.map((image) => (
                <div
                  key={image}
                  className="border 
                              h-full 
                              shrink-0
                              rounded-2xl 
                              animate-scrollAppear 
                              [animation-timeline:view()] 
                              [animation-range:entry_0%_cover_20%]"
                >
                  {image}
                </div>
              ))}
            </div>
          </div>
          {/* Card text (title, technologies used, description, etc) */}
          <div
            className="flex
                      flex-col 
                    bg-blue-500 
                      w-1/2"
          >
            <p>{title}</p>
            {/* Technologies */}
            <div className="flex flex-col">
              {technologies.map((technology) => (
                <div key={technology}>{technology}</div>
              ))}
            </div>
            {/* Description */}
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
