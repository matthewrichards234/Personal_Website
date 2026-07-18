const Footer = () => {
  return (
    <div
      className="h-20 
                  font-manrope
                  font-normal"
    >
      <div className="flex flex-row gap-10">
        <p>&copy; Matthew Richards 2026</p>
        <a
          href="https://www.linkedin.com/in/matthew-richards234/"
          target="_blank"
        >
          <img
            src="src/assets/linkedin-svgrepo-com.svg"
            alt="linkedin-icon"
            className="h-16 w-16"
          />
        </a>
        <a href="https://github.com/matthewrichards234" target="_blank">
          <img
            src="src/assets/github-svgrepo-com.svg"
            alt="github icon"
            className="h-16 w-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
