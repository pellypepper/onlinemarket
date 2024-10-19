import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';

export default function Header() {
    // Use useRef to manage the menu DOM element
    const menuRef = useRef(null);
   // State for active tab
    const [isAsideActive, setIsAsideActive] = useState(false);
    const [isAsideActive1, setIsAsideActive1] = useState(false);


    // State to track if the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    function toggleMenu() {
        if (menuRef.current) {
            menuRef.current.classList.toggle("active");
        }
        // Toggle the isMenuOpen state
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleAsideMenu = () => {
        setIsAsideActive(!isAsideActive);
    };

    // Toggle the visibility of the second aside menu
    const toggleAsideMenu1 = () => {
        setIsAsideActive1(!isAsideActive1);
    };

    // Handle tab switching by setting the active tab




    return (
        <div className="header_container">
            
            <div className="header_wrapper">
                <h1 className="header_logo"><Link to="/">Online <span style={{ color: "purple" }}>Market</span></Link></h1>

                <div className="header_middle" id="header_middle" ref={menuRef}>
                    <div className="header_left">

                        <div className="header_link head_link">
                            <ul>
                                <li  className={isAsideActive ? "favorite_active" : ""}
                                    onClick={toggleAsideMenu} > Buy</li>
                                <li> <Link to="/sell">Sell</Link></li>
                                <li> <Link to="/market">Market</Link></li>
                            </ul>
                            <aside id="aside" className={isAsideActive ? "aside_Active" : ""} >
                                <div className="aside_1_container">
                                    <div className="aside_left">
                                        <div className="aside">
                                            <h3>Designers</h3>
                                            <span>Create acccessible design in record time right in figma and sketch </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Product Managers</h3>
                                            <span>Manage accessibility in real time project </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Product Managers</h3>
                                            <span>Test and audit your code from early implementation to live project  </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Product Managers</h3>
                                            <span>Monitor, manage and audit your accessibility posture in one place</span>

                                        </div>

                                    </div>

                                    <div className="aside_right">
                                        <div>
                                            <h3> Read our new white paper</h3>
                                            <span>Manage a modern accessibility posture and growing accessibility and growing accessibility maturity at any scale  </span>
                                        </div>

                                    </div>


                                </div>
                            </aside>
                        </div>

                    </div>

                    <div className="header_right">

                        <div className="header_link">
                            <ul>
                                <li> <Link to="/pricing">Pricing</Link></li>
                                <li  className={isAsideActive1 ? "favorite_active" : ""}
                                    onClick={toggleAsideMenu1}> Partners</li>
                                <li> <Link to="/login">Login</Link></li>
                            </ul>
                            <aside   id="aside2" className={isAsideActive1 ? "aside_Active" : ""}>
                                <div className="aside_1_container aside_2_container">
                                <div className="aside_right">
                                        <div>
                                            <h3> Introducing all-new Language analysis and Auto-fill for accessibility note </h3>
                                            
                                        </div>

                                    </div>
                                    <div className="aside_left">
                                        <div className="aside">
                                            <h3>Blog</h3>
                                            <span>Create acccessible design in record time right in figma and sketch </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Community</h3>
                                            <span>Manage accessibility in real time project </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Support Center</h3>
                                            <span>Test and audit your code from early implementation to live project  </span>

                                        </div>
                                        <div className="aside">
                                            <h3>Library</h3>
                                            <span>Monitor, manage and audit your accessibility posture in one place</span>

                                        </div>
                                        <div className="aside">
                                            <h3>Library</h3>
                                            <span>Monitor, manage and audit your accessibility posture in one place</span>

                                        </div>
                                        <div className="aside">
                                            <h3>The WCAG Explained </h3>
                                            <span>Monitor, manage and audit your accessibility posture in one place</span>

                                        </div>




                                    </div>

                                 


                                </div>
                            </aside>
                        </div>

                    </div>
                    
                </div>
                <div className="menu_icon_container">
                    <button><Link to="/signup">Get started for FREE</Link></button>
                    {isMenuOpen ? (
                        <FaTimes className="menu_icon" onClick={toggleMenu} size={25} color="black" />
                    ) : (
                        <FaBars className="menu_icon" onClick={toggleMenu} size={25} color="black" />
                    )}
                </div>

            </div>

        </div>
    )
}
