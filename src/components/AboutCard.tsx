interface AboutCardInterface {
  title: string;
  position?: string;
  dates?: string;
  icon: string;
}

const AboutCard = ({ title, position, dates, icon }: AboutCardInterface) => {
  return (
    <div
      className="
                w-56
                sm:w-60
                rounded-2xl
                bg-white
                text-black
                shadow-xl
                border
                p-4
                flex
                flex-col
                items-center
                gap-2
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:scale-105

                
              "
    >
      <p className="font-semibold">{title}</p>
      <div className="flex flex-row items-center gap-1">
        <img src={icon} alt="about card icon" className="w-4 h-4" />
        <p className="text-[10px] text-center p-0">{position}</p>
      </div>
      <div className="flex flex-row text-[8px] opacity-87">
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default AboutCard;
