import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Credit Score Predictor</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/predict">Credit Score Calculator</Link></li>
        <li><Link to="/calculation">Risk Analysis</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
