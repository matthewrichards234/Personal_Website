const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 bottom-0 w-[320vh] h-[320vh] rounded-[43%] bg-blue-500/20 animate-wave1" />

        <div className="absolute left-1/2 bottom-0 w-[320vh] h-[320vh] rounded-[46%] bg-cyan-400/20 animate-wave2" />

        <div className="absolute left-1/2 bottom-0 w-[320vh] h-[320vh] rounded-[41%] bg-indigo-500/20 animate-wave3" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,rgb(250,78,10)_10%,rgb(247,12,204)_25%,rgb(0,106,255)_50%,rgb(48,248,255)_75%,rgb(250,78,10)_100%)] bg-[length:200%_auto] animate-gradientText">
          Let's Connect
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-2xl lg:text-4xl text-gray-700 leading-relaxed">
          Whether you have an opportunity, an interesting project, or just want
          to chat about software engineering, I'd love to hear from you.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          <a
            href="mailto:matthewrichards234@gmail.com"
            className="flex items-center justify-center gap-3 rounded-full bg-white px-4 md:px-8 py-2 md:py-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img src="src/assets/mail.png" alt="Email" className="h-6 w-6" />
            <span className="text-sm md:text-lg font-semibold text-black">
              matthewrichards234@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
