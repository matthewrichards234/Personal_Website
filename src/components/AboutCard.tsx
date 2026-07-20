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
                    overflow-hidden"
    >
      <p>{title}</p>
      <div className="flex flex-row">
        {icon}
        <p>{position}</p>
      </div>
      <div className="flex flex-row">
        {icon}
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default AboutCard;
