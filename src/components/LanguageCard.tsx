interface LanguageCardInterface {
  name: string;
}
const LanguageCard = ({ name }: LanguageCardInterface) => {
  return (
    <div>
      <div
        className="p-2 
                    m-0
                    w-fit
                    flex
                    flex-row
                    items-center
                    justify-center
                    shadow-lg"
      >
        <p>{name}</p>
      </div>
    </div>
  );
};

export default LanguageCard;
