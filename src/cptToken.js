import { useState } from "react";
import "./Cpt.css";
import { FiCopy } from "react-icons/fi";
import Palestine from "./palestine-flag.png";
import DRC from "./drc-flag.png";

const CPTToken = () => {
    const [walletAddress] = useState("0xYourWalletAddressHere");
    const [copySuccess, setCopySuccess] = useState(false);
    const [playingVideos, setPlayingVideos] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const videos = [
        "/assets/video1.mp4",
        "/assets/video2.mp4",
        "/assets/video3.mp4",
        "/assets/video5.mp4",
        "/assets/video6.mp4",
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
    };

    const handleVideoClick = (index) => {
        setPlayingVideos((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div>
            {!isLoaded ? (
                <div className="load-screen">
                    <button className="enter-button" onClick={() => setIsLoaded(true)}>
                        Free Palestine & DRC 🫶
                    </button>
                </div>
            ) : (
                <div>
                    <div className="content">
                        <h1 className="title">$CPT TOKEN</h1>
                        <p className="description">
                            Experience the future of decentralized finance with CPT Token! Inspired by the beauty and resilience of Cape Town, this token is more than just a digital asset—it's a movement.
                            CPT Token stands in solidarity with the people of Palestine and the Democratic Republic of Congo, bringing awareness to their struggles and advocating for freedom, justice, and economic empowerment.
                            Decentralization is not just about finance; it’s about sovereignty, liberation, and global unity!
                        </p>
                        <div className="wallet-container">
                            <input type="text" value={walletAddress} readOnly className="wallet-address" />
                            <button onClick={copyToClipboard} className="copy-button">
                                <FiCopy size={20} />
                            </button>
                        </div>
                        {copySuccess && <p className="copy-notification">✅ Wallet address copied!</p>}
                        <button className="buy-button">Buy CPT Token</button>
                        <div className="support-section">
                            <p>We stand with Palestine & DRC</p>
                            <div className="flag-container">
                                <img src={Palestine} alt="Palestine Flag" className="flag" />
                                <img src={DRC} alt="DRC Flag" className="flag" />
                            </div>
                        </div>
                    </div>
                    <section className="tokenomics">
                        <h2>TOKENOMICS</h2>
                        <div className="tokenomics-container">
                            <div className="tokenomics-card">
                                <h3>📜 Tax</h3>
                                <p>0%</p>
                            </div>
                            <div className="tokenomics-card">
                                <h3>🔗 Total Supply</h3>
                                <p>1 Billion</p>
                            </div>
                            <div className="tokenomics-card">
                                <h3>💎 Token Symbol</h3>
                                <p>$CPT</p>
                            </div>
                        </div>
                    </section>
                    <section className="roadmap">
                        <h2>ROADMAP</h2>
                        <p>As part of our mission, a percentage of the CPT Token supply will be allocated to community-voted organizations that support Palestine and the Democratic Republic of Congo.</p>
                        <div className="roadmap-container">
                            <div className="roadmap-card">
                                <h3>🔹 Phase 1</h3>
                                <p>Token Launch & Community Building</p>
                            </div>
                            <div className="roadmap-card">
                                <h3>🔸 Phase 2</h3>
                                <p>Exchange Listings & Partnerships</p>
                            </div>
                            <div className="roadmap-card">
                                <h3>🟢 Phase 3</h3>
                                <p>First Donation to Community-Voted Organizations</p>
                            </div>
                            <div className="roadmap-card">
                                <h3>🌍 Future</h3>
                                <p>Expanding Global Impact Initiatives</p>
                            </div>
                        </div>
                    </section>
                    <section className="video-gallery">
                        <h2>📸 CPT Moments</h2>
                        <div className="gallery-container">
                            {videos.map((video, index) => (
                                <div className="gallery-item" key={index} onClick={() => handleVideoClick(index)}>
                                    <video className="video" controls={playingVideos[index]}>
                                        <source src={video} type="video/mp4" />
                                    </video>
                                </div>
                            ))}
                        </div>
                    </section>
                    <footer className="footer">
                        <p>© 2025 CPT Token. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default CPTToken;
