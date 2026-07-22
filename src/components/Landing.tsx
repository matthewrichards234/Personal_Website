const Landing = () => {
  const pulses = Array.from({ length: 10 }, (value, index) => index);
  return (
    <div
      className="bg-blue-900
                    text-white
                    w-screen 
                    h-screen 
                    animate-colorAnimate"
    >
      <div
        className="absolute 
                    top-1/2 
                    left-1/2 
                    -translate-x-1/2 
                    -translate-y-1/2 
                    text-black 
                    z-2"
      >
        <h1
          className="text-[130px]
                    sm:text-[400px] 
                    font-bold 
                    "
        >
          MR
        </h1>
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
                    h-55
                    w-55
                    sm:h-170
                    sm:w-170
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
