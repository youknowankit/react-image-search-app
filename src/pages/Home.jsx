import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";
import { useEffect, useState } from "react";
import { searchImagesApi } from "../services/imageApi";

function Home() {
  const [images, setImages] = useState([]);

  //Infinite Scroll additions
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    try {
      //Preserve data for infinite scroll
      setQuery(searchQuery);
      setPage(1);

      const results = await searchImagesApi(searchQuery, 1);
      setImages(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  //To fetch default images
  useEffect(() => {
    async function loadImages() {
      const images = await searchImagesApi("nature");
      setImages(images);
    }
    loadImages();
  }, []);

  useEffect(() => {
    const loadMore = async () => {
      //useRef could do better here as the updates are synchronous rather than being async
      if (loading) return;
      setLoading(true);

      const nextPage = page + 1;
      const results = await searchImagesApi(query, nextPage);

      setImages((prev) => [...prev, ...results]);
      setPage(nextPage);

      setLoading(false);
    };

    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;

      if (bottom) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [query, page, loading]);

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
