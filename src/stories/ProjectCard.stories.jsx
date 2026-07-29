import ProjectCard from "../components/ProjectCard";
import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export const Primary = (args) => <ProjectCard {...args} />;

Primary.args = {
  title: "WTWR",
  coverImage: imgTest,
  projectCardClassName:
    "border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl",
  titleClassName: "text-2xl font-bold",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
};
