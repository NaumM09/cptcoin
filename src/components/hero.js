// HeroSection.js
import "../styles/hero.css";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function HeroSection() {
  const [walletAddress] = useState("73ZCTcBrNDK26xU14qnxRqoTBVDUSdSe1MTfU6gmzFLX"); // Example wallet address
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Republic of South Africa</h1>
        <p className="hero-text">
          Experience the future of decentralized finance with <span className="highlight">$RSA Token</span>! Inspired by the beauty and resilience of South Africans, this token is more than just a digital asset—it’s a movement.
        </p>
        <p className="hero-subtext">
          $RSA Token stands in solidarity with the people of Palestine and the Democratic Republic of Congo, bringing awareness to their struggles and advocating for freedom, justice, and economic empowerment.
        </p>
        <div className="hero-buttons">
          <a href="/whitepaper" className="whitepaper-button">Read Whitepaper</a>
          <button className="join-button">Join the Movement</button>
        </div>

        {/* 📌 Wallet Section */}
        <div className="wallet-container">
          <input type="text" value={walletAddress} readOnly className="wallet-address" />
          <button onClick={copyToClipboard} className="copy-button">
            <FiCopy size={20} />
          </button>
        </div>
        {copySuccess && <p className="copy-notification">✅ Wallet address copied!</p>}

        <button className="buy-button">Buy $RSA</button>
      </div>
    </div>
  );
}
