import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import ImageGrid from "../components/ImageGrid"

function Home() {

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ]

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <SearchBar />

        <ImageGrid images={images} />
      </div>
    </>
  )
}

export default Home