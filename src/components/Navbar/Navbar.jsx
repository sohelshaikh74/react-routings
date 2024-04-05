import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-left">
          <h2>React Routing</h2>
        </div>
        <div className="nav-center">
          <ul>
            <NavLink to="/home">Home</NavLink>
            {/* <li href="/home">Home</li> */}
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
        <div className="nav-right">
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
