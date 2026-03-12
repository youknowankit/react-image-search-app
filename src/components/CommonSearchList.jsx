const searches = ["Nature", "Cars", "Technology", "Animals", "Cities"];

function CommonSearchList({ onSearch }) {
  const handleClick = (item) => {
    onSearch(item);
    console.log(item);
  };

  return (
    <div className="flex gap-3">
      {searches.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium hover:bg-indigo-100 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CommonSearchList;
