import "../styles/footer.css";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Branding */}
        <div className="footer-logo">
          <span>$RSA</span>
        </div>

        {/* Center Section - Navigation */}
        <nav className="footer-links">
          <a href="/whitepaper">Whitepaper</a>
        </nav>

        {/* Right Section - Socials */}
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} $RSA Token. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
