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
    <div>
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
