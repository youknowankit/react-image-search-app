function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* CLOSE BUTTON */}
      <button
        className="absolute top-6 right-6 text-white text-4xl font-bold z-50 hover:scale-110 transition"
        onClick={onClose}
      >
        ✕
      </button>

      {/* IMAGE CONTAINER */}
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className="w-full h-auto rounded-lg shadow-lg z-50 hover:scale-110 transition"
        />
      </div>
    </div>
  );
}

export default Lightbox;
