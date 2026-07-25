interface AboutModalInterface {
  title: string;
  image: string;
  description: string;
  isOpen: boolean;
  handleClose: () => void;
}

const AboutModal = ({
  title,
  image,
  description,
  isOpen,
  handleClose,
}: AboutModalInterface) => {
  return (
    // Modal
    <div
      className={
        isOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          : "hidden"
      }
    >
      <div
        className="relative 
                      w-125 
                      sm:w-175
                      sm:h-125
                      md:h-135
                      lg:w-185
                      lg:h-140
                      rounded-2xl 
                      bg-white 
                      p-6 
                      shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-3 text-3xl text-gray-500 transition hover:text-black cursor-pointer"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="mx-auto 
                      h-64 
                      w-full 
                      rounded-lg 
                      object-cover 
                      object-[center_30%]
                      sm:h-75
                      md:h-80 
                      shadow-2xl"
        />

        {/* Body */}
        <p
          className="sm:text-lg
                      md:text-lg
                      lg:text-2xl
                      mt-6 
                      text-center 
                      text-gray-700"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
