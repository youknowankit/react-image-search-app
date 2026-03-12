import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";
import useImageSearch from "../hooks/useImageSearch";

function Home() {
  const { images, handleSearch } = useImageSearch();

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
