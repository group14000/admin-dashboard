import DeleteIcon from '@mui/icons-material/Delete';
import './NavBar.css'; // Assuming you have a separate CSS file

function NavBar() {
  return (
    <div className="navbar">
      <div className="search-box">
        <label htmlFor="searchInput"></label>
        <input type="text" id="searchInput" placeholder='Enter Value'/>
      </div>
      <div className="delete-icon">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default NavBar;
