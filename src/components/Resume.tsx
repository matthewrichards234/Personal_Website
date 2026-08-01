import resumePDF from "../assets/resume_for_website.pdf";
import downloadIcon from "../assets/download-minimalistic-svgrepo-com.svg";

const Resume = () => {
  function handleDownloadClickEvent(fileUrl: string, fileName: string): void {
    console.log("fileUrl", fileUrl);
    console.log("fileName", fileName);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="bg-blue-900 w-screen h-screen text-white font-manrope">
      <div className="flex flex-row justify-center items-center lg:gap-1.5">
        <h1 className="text-4xl lg:text-8xl p-3 lg:p-4.5">My Resume</h1>
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
      <div className="flex justify-center">
        <iframe
          src={`${resumePDF}#toolbar=0`}
          title="Matthew's Resume"
          className="w-212.5 h-266 border-0"
        />
      </div>
    </div>
  );
};

export default Resume;
