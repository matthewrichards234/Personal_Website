const Contact = () => {
  return (
    <div
      className="bg-indigo 
                    text-white
                    min-h-screen"
    >
      <div
        className="flex 
                      flex-col 
                      items-center 
                      justify-center
                      pt-12"
      >
        <h1
          className="
          text-9xl 
          bg-clip-text 
          text-transparent
          bg-[linear-gradient(to_right,rgb(250,78,10)_10%,rgb(247,12,204)_25%,rgb(0,106,255)_50%,rgb(48,248,255)_75%,rgb(250,78,10)_100%)]
          bg-size-[200%_auto]
          animate-gradientText"
        >
          Contact Me
        </h1>
        <h3 className="text-3xl">
          For any business inquires, please contact me with the information
          provided below
        </h3>
        <div className="flex flex-row items-center gap-2">
          <img src="src/assets/mail.png" alt="email icon" />
          <a
            href="mailto:matthewrichards234@gmail.com"
            className="hover:text-red-700"
          >
            Matthewrichards234@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
