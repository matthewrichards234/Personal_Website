import ProjectTemplate from "../components/ProjectTemplate";

export default {
  title: "Components/ProjectTemplate",
  component: ProjectTemplate,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// export const Template = (args) => <ProjectTemplate {...args} />;

export const Template = {
  args: {
    projectTitle: "WTWR",
  },
};
