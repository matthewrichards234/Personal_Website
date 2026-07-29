interface ProjectCardI {
  title: string;
  coverImage: string;
  titleClassName: string;
  imageClassName: string;
}

const ProjectCard = ({
  title,
  coverImage,
  titleClassName,
  imageClassName,
}: ProjectCardI) => {
  return (
    <div className="border bg-white rounded-2xl size-70 flex flex-col justify-center items-center shadow-2xl">
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
