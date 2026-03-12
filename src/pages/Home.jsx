import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";
import { useEffect, useState } from "react";
import { searchImagesApi } from "../services/imageApi";

function Home() {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const images = await searchImagesApi(query);
      setImages(images);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    async function loadImages() {
      const images = await searchImagesApi("nature");
      setImages(images);
    }
    loadImages();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <SearchBar onSearch={handleSearch} />

        <ImageGrid images={images} />
      </div>
    </>
  );
}

export default Home;
