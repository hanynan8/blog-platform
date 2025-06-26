
import { Link } from "react-router-dom";


// Arrow function with Cabital Name = Component ya me3alm
const Navbar = () => {
  return ( 
    <div className="navbar">
      <Link to="/"><h1>The Blogs</h1></Link>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog </Link>
      </div>
    </div>
  );
}

export default Navbar;

