import { useEffect, useState } from "react";
import { searchImagesApi } from "../services/imageApi";

function useImageSearch() {
  const [images, setImages] = useState([]);

  //Infinite Scroll additions
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //To fetch default images
  useEffect(() => {
    async function loadImages() {
      const images = await searchImagesApi("nature");
      setImages(images);
    }
    loadImages();
  }, []);

  //Handle user searches
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

  //handle infinte scroll
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
  return { images, loading, handleSearch };
}

export default useImageSearch;
