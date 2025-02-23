import "../styles/footer.css";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

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
          <a href="/about">About</a>
          <a href="/whitepaper">Whitepaper</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/faq">FAQ</a>
        </nav>

        {/* Right Section - Socials */}
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
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
