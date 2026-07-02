const Landing = () => {
  return (
    <div className="bg-indigo text-white">
      <div className="overflow-hidden w-screen h-screen m-0 p-0 flex items-center position:relative">
        <div className="position:absolute top-0 left-0  w-screen">
          {/* <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            //   className="animate-[blob1_10s_ease-in-out_infinite]"
            className="h-100 w-100"
          >
            <path
              fill="#F1C21B"
              d="M58.3,-45.4C65.5,-37.4,54.4,-13.8,47.7,9.1C41.1,32,38.9,54.1,26.4,63.3C14,72.5,-8.7,68.8,-24.6,58.4C-40.5,47.9,-49.7,30.7,-51,14.6C-52.3,-1.5,-45.8,-16.4,-36,-25C-26.2,-33.5,-13.1,-35.7,6.2,-40.6C25.5,-45.6,51.1,-53.4,58.3,-45.4Z"
              transform="translate(100 100)"
            />
          </svg> */}

          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24A148"
              d="M36.1,-41.4C47.5,-33.5,57.9,-22.8,54.7,-13.7C51.5,-4.6,34.6,2.8,24.7,8.8C14.7,14.8,11.7,19.3,3.6,31.6C-4.4,43.9,-17.5,64,-23.5,62.6C-29.5,61.3,-28.4,38.5,-30.4,23.2C-32.4,8,-37.5,0.2,-41.3,-12.3C-45,-24.8,-47.4,-42.1,-40.3,-50.7C-33.2,-59.4,-16.6,-59.6,-2.1,-57C12.3,-54.5,24.7,-49.3,36.1,-41.4Z"
              transform="translate(100 100)"
            />
          </svg> */}
          <div className="flex flex-col items-center align-center">
            <div className="hover:animate-blob1Move">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-blob1 size-80 p-0 m-0 border"
              >
                <path
                  fill="#BAE6FF"
                  d="M43.6,-30.1C56.9,-18.2,68.3,0,64.7,14.4C61.1,28.8,42.6,39.4,23.8,47.8C5,56.2,-14,62.4,-23.8,55.4C-33.5,48.4,-34,28.1,-35.8,10.9C-37.6,-6.4,-40.7,-20.6,-34.9,-30.8C-29.2,-41,-14.6,-47.2,0.3,-47.4C15.2,-47.7,30.4,-42,43.6,-30.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
