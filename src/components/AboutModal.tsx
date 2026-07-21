import { useState } from "react";

interface AboutModalInterface {
  title: string;
  image: string;
}

const AboutModal = ({ title, image }: AboutModalInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseModal() {
    console.log(isOpen);
    setIsOpen(false);
  }
  return (
    // Modal
    <div
      className="
                hidden
                fixed
                z-1
                p-25
                top-0
                left-0
                w-full
                h-full
                overflow-auto
                bg-black/40
                "
    >
      {/* Modal content */}
      <div
        className="
                bg-white
                border
                rounded-2xl
                w-80%
                "
      >
        {title}
        <img src={image} alt="about modal image" />
        <span className="cursor-pointer">&times;</span>
      </div>
    </div>
  );
};

export default AboutModal;
