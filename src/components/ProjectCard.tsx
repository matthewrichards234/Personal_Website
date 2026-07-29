interface ProjectCardI {
  title: string;
  coverImage: string;
  titleClassName: string;
  imageClassName: string;
  cardSize: string;
}

const ProjectCard = ({
  title,
  coverImage,
  titleClassName,
  imageClassName,
  cardSize,
}: ProjectCardI) => {
  const cardSizes = {
    small: "size-20",
    medium: "size-40",
    large: "size-60",
  };

  return (
    <div
      className={`${cardSizes[cardSize]} border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl`}
    >
      <p className={titleClassName}>{title}</p>
      <img
        src={coverImage}
        className={imageClassName}
        alt="Project Card Cover Image"
      />
    </div>
  );
};

export default ProjectCard;
