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
                sm:h-40
                md:h-45
                md:w-62
                lg:h-48
                lg:w-110
                rounded-2xl
                bg-white
                text-black
                shadow-xl
                border
                p-5
                my-auto
                flex
                flex-col
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:scale-105
                "
    >
      <p
        className="font-semibold 
                  text-lg 
                  text-center 
                  sm:text-lg 
                  md:text-xl 
                  lg:text-2xl"
      >
        {title}
      </p>
      <div
        className="flex 
                      flex-row 
                      items-center 
                      gap-1"
      >
        <img src={icon} alt="about card icon" className="w-4 h-4" />
        <p
          className="text-sm 
                      sm:text-sm 
                      md:text-base 
                      text-center 
                      p-0"
        >
          {position}
        </p>
      </div>
      <div
        className="flex 
                      flex-row 
                      text-center 
                      text-[8px] 
                      sm:text-sm 
                      md:text-base 
                      lg:text-lg 
                      opacity-87"
      >
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default AboutCard;
