import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-center">
      <div className="flex w-full max-w-xl shadow-sm">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-l-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition font-medium"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
