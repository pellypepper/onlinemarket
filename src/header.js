import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./header.css";

// Subcomponent for NavLinks with dropdown
function NavLink({ label, dropdownItems, isActive, toggleDropdown }) {
  return (
    <li className={isActive ? "favorite_active" : ""} onClick={toggleDropdown}>
      {label}
      {dropdownItems && isActive && (
        <aside className="dropdown_menu">
          {dropdownItems.map((item, index) => (
            <div key={index} className="dropdown_item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </aside>
      )}
    </li>
  );
}

// Main Header Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle for main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle for dropdown menus
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownItemsBuy = [
    { title: "Designers", description: "Create accessible designs in Figma or Sketch." },
    { title: "Product Managers", description: "Manage accessibility in real-time projects." },
    { title: "Developers", description: "Test and audit your code for accessibility." },
    { title: "Organizations", description: "Monitor and manage accessibility posture." },
  ];

  const dropdownItemsPartners = [
    { title: "Blog", description: "Explore design and accessibility tips." },
    { title: "Community", description: "Engage with experts in our community." },
    { title: "Support Center", description: "Get help with our tools and features." },
    { title: "Library", description: "Access in-depth resources for accessibility." },
  ];

  return (
    <header className="header_container">
      <div className="header_wrapper">
        {/* Logo */}
        <div className="header_logo">
          <h1>
            <Link to="/">
              Online <span style={{ color: "purple" }}>Market</span>
            </Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className={`header_nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav_links">
            <NavLink
              label="Buy"
              dropdownItems={dropdownItemsBuy}
              isActive={activeDropdown === "buy"}
              toggleDropdown={() => toggleDropdown("buy")}
            />
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            <li>
              <Link to="/market">Market</Link>
            </li>
            <NavLink
              label="Partners"
              dropdownItems={dropdownItemsPartners}
              isActive={activeDropdown === "partners"}
              toggleDropdown={() => toggleDropdown("partners")}
            />
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Call-to-action and Menu Icon */}
        <div className="header_cta">
          <button className="cta_button">
            <Link to="/signup">Get Started for FREE</Link>
          </button>
          <div className="menu_icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes size={20} color="black" /> : <FaBars size={25} color="black" />}
          </div>
        </div>
      </div>
    </header>
  );
}
