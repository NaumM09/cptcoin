import { useState } from "react";
import "./Cpt.css";
import Palestine from "./palestine-flag.png";
import DRC from "./drc-flag.png";
import { FiCopy } from "react-icons/fi";

const CPTToken = () => {
    const [walletAddress] = useState("0xYourWalletAddressHere");
    const [isLoaded, setIsLoaded] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        alert("Wallet address copied!");
    };

    return (
        <div className="app-container">
            {!isLoaded ? (
                <div className="load-screen">
                    <button className="enter-button" onClick={() => setIsLoaded(true)}>
                       Free Palestine & DRC
                    </button>
                </div>
            ) : (
                <div className="hero">
                    {/* Background Video */}
                    <div className="video-container">
                        <video autoPlay loop muted playsInline>
                            <source src="/video.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Content */}
                    <h1 className="title">$CPT TOKEN</h1>
                    <p className="description">
                        Experience the future of decentralized finance with CPT Token! Inspired by the beauty and resilience of Cape Town, this token is more than just a digital asset—it's a movement. CPT Token stands in solidarity with the people of Palestine and the Democratic Republic of Congo, bringing awareness to their struggles and advocating for freedom, justice, and economic empowerment. Decentralization is not just about finance; it’s about sovereignty, liberation, and global unity!
                    </p>

                    {/* Wallet Address with Copy Feature */}
                    <div className="wallet-container">
                        <input type="text" value={walletAddress} readOnly className="wallet-address" />
                        <button onClick={copyToClipboard} className="copy-button">
                            <FiCopy size={20} />
                        </button>
                    </div>

                    {/* Buy Button */}
                    <button className="buy-button">Buy CPT Token</button>

                    {/* Support for Palestine and DRC */}
                    <div className="support-section">
                        <p>We stand with Palestine & DRC</p>
                        <div className="flag-container">
                            <img src={Palestine} alt="Palestine Flag" className="flag" />
                            <img src={DRC} alt="DRC Flag" className="flag" />
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="footer">
                        <p>© 2025 CPT Token. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default CPTToken;

