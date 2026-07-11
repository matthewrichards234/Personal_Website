import ResumeDocument from "./ResumeDocument";
import { PDFViewer } from "@react-pdf/renderer";
const Resume = () => {
  return (
    <div
      className="bg-indigo 
                    w-screen 
                    h-screen
                    text-white"
    >
      <div
        className="flex 
        flex-row 
        justify-center 
        items-center
        gap-1.5"
      >
        <h1 className="text-8xl">My Resume</h1>
        <button className="cursor-pointer w-18 h-18">
          <img
            src="src/assets/download.png"
            alt="download resume button"
            className="w-18 h-18"
          />
        </button>
      </div>
      <PDFViewer>
        <ResumeDocument />
      </PDFViewer>
    </div>
  );
};

export default Resume;
