import { useState } from "react";

import resumePDF from "../assets/resume_for_website.pdf";
import downloadIcon from "../assets/download-minimalistic-svgrepo-com.svg";
import resumeScreenshot from "../assets/resume_screenshot.png";
import graphicResumeScreenshot1 from "../assets/graphic-resume-1.png";
import graphicResumeScreenshot2 from "../assets/graphic-resume-2.png";

const Resume = () => {
  const [activeResume, setActiveResume] = useState("default");

  function handleDownloadClickEvent(fileUrl: string, fileName: string): void {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function setDefaultResume(): void {
    setActiveResume("default");
  }

  function setGraphicResume(): void {
    setActiveResume("graphic");
  }

  return (
    <div className="bg-blue-900 w-screen h-screen text-white font-manrope">
      <div className="flex flex-row justify-center items-center lg:gap-1.5">
        <h1 className="text-4xl lg:text-8xl p-3 mt-1 lg:p-4.5">My Resume</h1>
        <button
          className="cursor-pointer"
          onClick={() => {
            handleDownloadClickEvent(resumePDF, "Matthew_Richards_Resume");
          }}
        >
          <img
            src={downloadIcon}
            alt="download resume button"
            className="size-12 lg:size-18"
          />
        </button>
      </div>
      <div className="flex flex-row justify-evenly bg-white text-black w-[80%] rounded-2xl mx-auto mt-2">
        <button
          onClick={() => {
            setDefaultResume();
          }}
        >
          standard resume
        </button>
        <button
          onClick={() => {
            setGraphicResume();
          }}
        >
          graphic resume
        </button>
      </div>
      <div className="flex justify-center pt-5 md:pt-3 lg:pt-1">
        {activeResume == "default" ? (
          <>
            <img
              src={resumeScreenshot}
              alt="Matthew Richards Resume"
              className="max-h-[80vh] w-auto shadow-2xl p-1.5"
            />
          </>
        ) : (
          <>
            <img
              src={graphicResumeScreenshot1}
              alt="Matthew Richards Graphic Resume"
              className="max-h-[80vh] w-auto shadow-2xl p-1.5"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
