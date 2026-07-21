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
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          : "hidden"
      }
    >
      <div className="relative w-[500px] rounded-2xl bg-white p-6 shadow-2xl">
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
          className="mx-auto h-64 w-full rounded-lg object-cover"
        />

        {/* Body */}
        <p className="mt-6 text-center text-gray-700">
          Add your description here.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
