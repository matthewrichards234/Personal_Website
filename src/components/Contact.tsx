const Contact = () => {
  return (
    <div
      className="bg-indigo 
                    text-white
                    min-h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-shadow-2xs text-9xl">Contact Me</h1>
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
