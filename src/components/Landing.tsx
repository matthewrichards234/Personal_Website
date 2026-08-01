const Landing = () => {
  const pulses = Array.from({ length: 10 }, (value, index) => index);
  return (
    <div className="bg-blue-900 text-white w-full h-screen animate-colorAnimate">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black z-2">
        {/* <h1 className="text-[130px] sm:text-[160px] md:text-[190px] lg:text-[220px] xl:text-[400px] font-bold">
          MR
        </h1> */}
        {/* To - Do: Add styling so full name is on landing page of website */}
        <h2 className="text-black text-sm text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          <i>Matthew Richards</i> <br></br> <i>Portfolio Website</i>
        </h2>
      </div>
      {pulses.map((i) => (
        <span
          key={i}
          style={{ "--i": i } as React.CSSProperties}
          className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    size-55
                    sm:size-60
                    md:size-65
                    lg:size-100
                    rounded-full
                    bg-white
                    opacity-70
                    animate-pulseAnimate
                    [animation-delay:calc(1s*var(--i))]
                  "
        />
      ))}
    </div>
  );
};

export default Landing;
