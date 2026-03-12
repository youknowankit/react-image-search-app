function ImageCard({ src }) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md bg-white">

      <img
        src={src}
        alt="search result"
        className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end">

        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition">
          <p className="text-sm font-medium">View Image</p>
        </div>

      </div>

    </div>
  )
}

export default ImageCard