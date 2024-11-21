import { 
    FaSearch, 
    FaFacebook, 
    FaInstagram, 
    FaTiktok, 
    FaTwitter, 
    FaYoutube, 
    FaPinterest, 
    FaMicrophone 
  } from "react-icons/fa";
  import "./footer.css";
  const footerLinks = [
    {
      title: "SELL ONLINE",
      links: [
        "Sell Everywhere",
        "Sell on Social",
        "Sell on Instagram",
        "Sell on TikTok",
        "Sell on Facebook",
        "Sell on Google",
        "Sell on Amazon",
        "Sell on WhatsApp",
        "SellApp",
      ],
    },
    {
      title: "PRODUCT",
      links: [
        "Features",
        "Pricing",
        "Watch Demo",
        "Ecommerce Hosting",
        "Subscriptions",
        "Point of Sale",
        "Buy New Solution",
      ],
    },
    {
      title: "FOR YOUR BUSINESS",
      links: [
        "Ecommerce Website",
        "WordPress Ecommerce",
        "Wix Ecommerce",
        "Weebly Ecommerce",
        "eBay Ecommerce",
        "Add Online Store",
        "Jumia Ecommerce",
      ],
    },
    {
      title: "PARTNERS",
      links: [
        "Recruiter Program",
        "Affiliate Program",
        "White Label Solutions",
        "Referral Program",
        "Developers",
        "API Documentation",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Press",
        "OnlineMarket Blog",
        "Referral Program",
        "Settings",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Product Updates",
        "Free Guide",
        "Contact Support",
        "Developers",
        "OnlineMarket Academy",
      ],
    },
  ];
  
  const socialIcons = [
    { icon: FaFacebook, color: "#4267B2" },
    { icon: FaInstagram, color: "#E4405F" },
    { icon: FaTiktok, color: "#000000" },
    { icon: FaTwitter, color: "#1DA1F2" },
    { icon: FaYoutube, color: "#FF0000" },
    { icon: FaPinterest, color: "#E60023" },
    { icon: FaMicrophone, color: "#FF9800" },
  ];
  
  export default function Footer() {
    return (
      <footer className="footer_container">
        <div className="footer_main">
          {/* Footer Logo */}
          <div className="footer_logo">
            <h1>
              Online <span style={{ color: "purple" }}>Market</span>
            </h1>
          </div>
  
          {/* Footer Links */}
          <div className="footer_grid">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer_section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer Bottom */}
        <aside className="footer_aside">
          {/* Search Input */}
          <div className="footer_search">
            <input type="text" placeholder="Search..." />
            <FaSearch size={15} color="white" />
          </div>
  
          {/* Social Icons */}
          <div className="footer_socials">
            {socialIcons.map((social, index) => (
              <social.icon
                key={index}
                size={20}
                color={social.color}
                className="social_icon"
              />
            ))}
          </div>
        </aside>
      </footer>
    );
  }
  