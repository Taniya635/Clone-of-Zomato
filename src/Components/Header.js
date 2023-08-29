import { useEffect, useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import {BsFillCartCheckFill} from 'react-icons/bs'

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire"
      title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  const [cartCount, setCartCount] = useState(0); 
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  useEffect(() => {
    // You can fetch the cart count from wherever you store it (e.g., localStorage)
    const storedCartCount = parseInt(localStorage.getItem("cart")) || 0;
    setCartCount(storedCartCount);
  }, []);


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to='/cart'>
              <div className="cart-icon-container">
                <BsFillCartCheckFill fontSize={20} />
                {cartCount > 0 && <span className="cart-notification">{cartCount}</span>}
              </div>
            </Link>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;