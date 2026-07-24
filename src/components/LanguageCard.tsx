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
                    text-xl
                    md:text-2xl
                    lg:text-3xl
                    lg:p-6"
      >
        <p>{name}</p>
      </div>
    </div>
  );
};

export default LanguageCard;
