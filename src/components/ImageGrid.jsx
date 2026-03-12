import ImageCard from "./ImageCard";

function ImageGrid({ images, onImageClick }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className="cursor-pointer rounded-lg"
          onClick={() => onImageClick(image)} //custom component must have callback from actual element
        />
      ))}
    </div>
  );
}

export default ImageGrid;
