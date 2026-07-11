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
        <h1 className="text-8xl p-4.5">My Resume</h1>
        <button className="cursor-pointer w-18 h-18">
          <img
            src="src/assets/download.png"
            alt="download resume button"
            className="w-18 h-18"
          />
        </button>
      </div>
      <div className="flex justify-center">
        <iframe
          src="src/assets/resume_for_website.pdf#toolbar=0"
          title="Matthew's Resume"
          className="w-212.5 
          h-266 
          border-0"
        />
      </div>
    </div>
  );
};

export default Resume;
