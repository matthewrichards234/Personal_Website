interface AboutCardInterface {
  title: string;
  position: string;
  dates: string;
  icon: string;
}

const AboutCard = ({ title, position, dates, icon }: AboutCardInterface) => {
  return (
    <div
      className="flex 
                    flex-col 
                    bg-amber-400 
                    rounded-2xl 
                    border 
                    shadow-2xl
                    overflow-hidden
                    w-55
                    h-23
                    items-center
                    justify-center
                    hover:scale-120
                    ease-in-out
                    duration-350"
    >
      <p className="font-semibold">{title}</p>
      <div className="flex flex-row items-center tetx-sm gap-1">
        <img src={icon} alt="about card icon" className="w-4 h-4" />
        <p>{position}</p>
      </div>
      <div className="flex flex-row text-xs">
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default AboutCard;
