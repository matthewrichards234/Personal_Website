const Projects = () => {
  return (
    <div
      className="bg-indigo 
                    text-white
                    min-h-screen"
    >
      <h1 className="text-8xl text-center h-screen w-screen">PROJECTS</h1>
      <div
        className="flex 
        flex-col 
        flex-wrap 
        gap-4 
        items-center 
        animate-scrollAppear 
        [animation-timeline:view()] 
        [animation-range:entry_0%_cover_20%]"
      >
        <div className="w-80 h-12 bg-gray-300 rounded-lg"></div>
        <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
        <div className="w-64 h-24 bg-gray-300 rounded-lg"></div>
        <div className="w-28 h-56 bg-gray-300 rounded-lg"></div>
        <div className="w-96 h-16 bg-gray-300 rounded-lg"></div>
        <div className="w-80 h-12 bg-gray-300 rounded-lg"></div>
        <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
        <div className="w-64 h-24 bg-gray-300 rounded-lg"></div>
        <div className="w-28 h-56 bg-gray-300 rounded-lg"></div>
        <div className="w-96 h-16 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Projects;
