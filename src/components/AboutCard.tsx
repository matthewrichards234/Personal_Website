interface AboutCardInterface {
  title: string;
  position: string;
  dates: string;
  icon: string;
}

const AboutCard = ({ title, position, dates, icon }: AboutCardInterface) => {
  return (
    <div>
      <p>{title}</p>
      {icon}
      <ul>
        <li>{position}</li>
        <li>{dates}</li>
      </ul>
    </div>
  );
};

export default AboutCard;
