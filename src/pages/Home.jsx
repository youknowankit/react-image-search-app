import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";
import useImageSearch from "../hooks/useImageSearch";
import { useEffect, useState } from "react";
import Lightbox from "../components/Lightbox";

function Home() {
  const { images, searchImages } = useImageSearch();
  const [selectedImage, setSelectedImage] = useState(null);

  // console.log(selectedImage);
  useEffect(() => {
    console.log("Selected image:", selectedImage);
  }, [selectedImage]);

  return (
    <>
      <Navbar onSearch={searchImages} />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <SearchBar onSearch={searchImages} />
        <ImageGrid
          images={images}
          onImageClick={(image) => setSelectedImage(image)}
        />
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </>
  );
}

export default Home;
