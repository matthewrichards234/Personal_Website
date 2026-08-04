import ProjectTemplate from "./ProjectTemplate";
const PowerballGenerator = () => {
  return (
    <div>
      <ProjectTemplate
        projectTitle="Powerball Generator"
        projectDescription="Powerball Lottery Simulator — This C++ project simulates the process of generating 
        valid Powerball lottery tickets by randomly selecting five unique white balls and one Powerball. 
        Building this program strengthened my understanding of arrays, functions, random number generation, 
        and classic algorithms such as selection sort. I also learned how to prevent duplicate selections by 
        dynamically removing chosen values from an array, reinforcing problem-solving skills and algorithmic thinking."
        technologiesUsedList={["C++"]}
        projectImages={[]}
        githubLink="https://github.com/matthewrichards234/Powerball_Generator"
      />
    </div>
  );
};

export default PowerballGenerator;
