import CommonSearchList from "./CommonSearchList"

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-indigo-600">
          ImageFinder
        </h1>

        <CommonSearchList />

      </div>
    </nav>
  )
}

export default Navbar