function SearchBar({ username, onChange, onSearch }) {
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="Enter a GitHub username"
        value={username}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;