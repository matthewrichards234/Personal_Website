interface ProjectCardI {
  title: string;
  coverImage: string;
  projectCardClassName: string;
  titleClassName: string;
  imageClassName: string;
}

const ProjectCard = ({
  title,
  coverImage,
  projectCardClassName,
  titleClassName,
  imageClassName,
}: ProjectCardI) => {
  return (
    <div className={projectCardClassName}>
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
