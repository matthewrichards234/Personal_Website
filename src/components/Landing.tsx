const Landing = () => {
  return (
    <div
      className="bg-indigo 
                    text-white"
    >
      <div
        className="overflow-hidden 
                    w-screen 
                    h-screen 
                    m-0 
                    p-0 
                    position:relative 
                    border-4"
      >
        <div
          className="position:absolute
                      top-0
                      left-0
                      w-screen
                      h-screen
                      border-2"
        >
          <div
            className="flex
                            flex-row 
                            animate-float"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-wiggle size-80 p-0 m-0 border relative top-10 left-10"
            >
              <path
                fill="#BAE6FF"
                d="M43.6,-30.1C56.9,-18.2,68.3,0,64.7,14.4C61.1,28.8,42.6,39.4,23.8,47.8C5,56.2,-14,62.4,-23.8,55.4C-33.5,48.4,-34,28.1,-35.8,10.9C-37.6,-6.4,-40.7,-20.6,-34.9,-30.8C-29.2,-41,-14.6,-47.2,0.3,-47.4C15.2,-47.7,30.4,-42,43.6,-30.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-wiggle size-80 p-0 m-0 border"
            >
              <path
                fill="#F1C21B"
                d="M58.3,-45.4C65.5,-37.4,54.4,-13.8,47.7,9.1C41.1,32,38.9,54.1,26.4,63.3C14,72.5,-8.7,68.8,-24.6,58.4C-40.5,47.9,-49.7,30.7,-51,14.6C-52.3,-1.5,-45.8,-16.4,-36,-25C-26.2,-33.5,-13.1,-35.7,6.2,-40.6C25.5,-45.6,51.1,-53.4,58.3,-45.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center align-center pb-12">
            <button
              className="cursor-pointer 
                text-4xl 
                border 
                p-0 m-0 
                transition-transform 
                duration-600 
                ease-in-out 
                hover:scale-300 
                hover:-rotate-12"
            >
              MR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
