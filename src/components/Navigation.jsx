import { Outlet, Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      

      <Outlet />
    </>
  )
};

export default Navigation;