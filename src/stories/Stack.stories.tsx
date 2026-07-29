import ProjectCard from "../components/ProjectCard";
import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const commonProps = {
  projectCardClassName:
    "border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-50",
  titleClassName: "text-2xl font-bold",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
  coverImage: imgTest,
};

export const AllProjects = () => (
  <div className="flex flex-col gap-8 items-center">
    <ProjectCard {...commonProps} title="WTWR" />
    <ProjectCard {...commonProps} title="Spots" />
    <ProjectCard
      {...commonProps}
      title="Amortization Table"
      titleClassName="text-2xl font-bold text-center"
    />
  </div>
);
