function NavBar({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="search-box">
          <label htmlFor="searchInput" className="text-white">
            Search:
          </label>
          <input
            type="text"
            id="searchInput"
            placeholder="Enter Value"
            onChange={handleSearch}
            className="ml-2 px-2 py-1 rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
