import ProjectCard from "../components/ProjectCard";
import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: {
    cardSize: {
      type: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export const Primary = (args) => <ProjectCard {...args} />;

Primary.args = {
  title: "WTWR",
  coverImage: imgTest,
  titleClassName: "text-2xl font-bold",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
  cardSize: "medium",
};
