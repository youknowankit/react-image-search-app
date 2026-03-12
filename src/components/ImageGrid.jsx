import ImageCard from "./ImageCard";

function ImageGrid({ images }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((img, index) => (
        <ImageCard key={index} src={img.urls.small} />
      ))}
    </div>
  );
}

export default ImageGrid;
