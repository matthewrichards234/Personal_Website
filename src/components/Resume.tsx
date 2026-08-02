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
    <div className="bg-blue-900 w-screen h-full text-white font-manrope pb-3">
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
      <div className="flex w-[80%] mx-auto mt-6 rounded-xl bg-white p-1 shadow-md">
        <button
          onClick={setDefaultResume}
          className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
            activeResume === "default"
              ? "bg-blue-600 text-white shadow"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Standard Resume
        </button>

        <button
          onClick={setGraphicResume}
          className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
            activeResume === "graphic"
              ? "bg-blue-600 text-white shadow"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Graphic Resume
        </button>
      </div>
      <div className="flex justify-center pt-5 md:pt-3 lg:pt-1">
        {activeResume == "default" ? (
          <div>
            <img
              src={resumeScreenshot}
              alt="Matthew Richards Resume"
              className="max-h-[80vh] w-auto shadow-2xl p-1.5"
            />
          </div>
        ) : (
          <div className="h-[80vh] overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-none">
            <img
              src={graphicResumeScreenshot1}
              alt="Resume Page 1"
              className="w-full h-[80vh] object-contain snap-start"
            />

            <img
              src={graphicResumeScreenshot2}
              alt="Resume Page 2"
              className="w-full h-[80vh] object-contain snap-start"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
