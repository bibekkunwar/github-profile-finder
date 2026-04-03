function SearchBar({ username, onChange, onSearch }) {

  // Handle the "Enter" key press to trigger the search
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onSearch();
    }
  }
  return (
    <div className="flex gap-2">
      <input
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a GitHub username"
        value={username}
        className="flex-1 px-4 py-2 rounded-lg border border-[#30363d] bg-[#161b22] text-sm text-[#e6edf3] placeholder:text-[#7d8590] outline-none focus:ring-2 focus:ring-[#238636]"
      />
      <button onClick={onSearch}
      className="bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-medium px-5 py-2 rounded-lg"
      >
      Search
      </button>
    </div>
  );
}

export default SearchBar;