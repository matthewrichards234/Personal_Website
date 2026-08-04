import ProjectTemplate from "./ProjectTemplate";

const MortgageAmortization = () => {
  return (
    <div>
      <ProjectTemplate
        projectTitle="Mortgage Amortization Table"
        projectDescription="Mortgage Amortization Calculator — This C++ application generates a complete 
        mortgage amortization table based on user-provided loan details, including loan amount, interest rate, 
        loan term, and optional additional monthly principal payments. Through this project, 
        I gained experience with file I/O, mathematical formulas, input validation, loops, and financial calculations 
        while learning how to organize larger programs that produce well-formatted reports."
        technologiesUsedList={["C++"]}
        projectImages={[]}
        githubLink="https://github.com/matthewrichards234/Mortgage-Amortization-Table"
      />
    </div>
  );
};

export default MortgageAmortization;
