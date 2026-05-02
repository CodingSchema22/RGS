export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="flex items-center bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search..."
          className="w-full px-5 py-3 outline-none text-gray-700"
        />

        <button
          onClick={onSearch}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 transition"
        >
          Search
        </button>

      </div>
    </div>
  );
}