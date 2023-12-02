// NavBar.jsx
import DeleteIcon from '@mui/icons-material/Delete';

function NavBar({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="search-box">
        <label htmlFor="searchInput"></label>
        <input
          type="text"
          id="searchInput"
          placeholder="Enter Value"
          onChange={handleSearch}
        />
      </div>
      <div className="delete-icon">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default NavBar;
