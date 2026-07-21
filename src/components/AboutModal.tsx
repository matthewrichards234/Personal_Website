import { useState } from "react";

interface AboutModalInterface {
  title: string;
  image: string;
  isOpen: boolean;
  handleClose: () => void;
}

const AboutModal = ({
  title,
  image,
  isOpen,
  handleClose,
}: AboutModalInterface) => {
  return (
    // Modal
    <div
      className={
        isOpen
          ? "fixed z-1 p-25 top-0 left-0 w-full h-full overflow-auto bg-black/40"
          : "hidden"
      }
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
        <span className="cursor-pointer bg-black" onClick={handleClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default AboutModal;
