import ProjectCard from "../components/ProjectCard";
import imgTest from "../assets/luisa-brimble-VfHoMBagDPc-unsplash.jpg";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export const WTWR = (args) => <ProjectCard {...args} />;
export const Spots = (args) => <ProjectCard {...args} />;
export const MortgageAmortizationTable = (args) => <ProjectCard {...args} />;

WTWR.args = {
  title: "WTWR",
  coverImage: imgTest,
  projectCardClassName:
    "border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-50",
  titleClassName: "text-2xl font-bold",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
};

Spots.args = {
  title: "Spots",
  coverImage: imgTest,
  projectCardClassName:
    "border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-50",
  titleClassName: "text-2xl font-bold",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
};

MortgageAmortizationTable.args = {
  title: "Amortization Table",
  coverImage: imgTest,
  projectCardClassName:
    "border bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl p-2 size-50",
  titleClassName: "text-2xl font-bold text-center",
  imageClassName: "size-50 rounded-2xl shadow-2xl",
};
