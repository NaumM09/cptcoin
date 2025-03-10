import { useState, useEffect} from "react";
import "./Cpt.css";
import { FiCopy } from "react-icons/fi";
import Palestine from "./palestine-flag.png";
import DRC from "./drc-flag.png";
import SouthAfricaFlag from "./south-african-flag.png"; // SA Flag Image
import CptLeaderboard from "./CptLeaderboard";

const CPTToken = () => {
    const [walletAddress] = useState("73ZCTcBrNDK26xU14qnxRqoTBVDUSdSe1MTfU6gmzFLX");
    const [copySuccess, setCopySuccess] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const images = [
        "/assets/img.jpg",
        "/assets/img1.jpg",
        "/assets/img2.jpg",
        "/assets/img3.jpg",
        "/assets/img4.jpg",
    ];

    // ✅ Set the launch countdown (5 days from first visit)
    useEffect(() => {
        const storedLaunchTime = localStorage.getItem("launchTime");

        let launchTime;
        if (storedLaunchTime) {
            launchTime = parseInt(storedLaunchTime);
        } else {
            launchTime = Date.now() + 5 * 24 * 60 * 60 * 1000;
            localStorage.setItem("launchTime", launchTime);
        }

        const updateCountdown = () => {
            const now = Date.now();
            const timeRemaining = launchTime - now;

            if (timeRemaining <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                localStorage.removeItem("launchTime");
            } else {
                setTimeLeft({
                    days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
                    seconds: Math.floor((timeRemaining / 1000) % 60),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
    };

    return (
        <div>
            {/* 🔥 South African Flag Loading Screen */}
            {!isLoaded ? (
                <div className="load-screen">
                    <img src={SouthAfricaFlag} alt="South African Flag" className="flag-image" />
                    <button className="enter-button" onClick={() => setIsLoaded(true)}>
                        We support Palestine & DRC 🫶
                    </button>
                </div>
            ) : (
                <div>
                    {/* 🚀 Countdown Timer */}
                    <div className="countdown">
                        <h2>🚀 LAUNCH COUNTDOWN</h2>
                        <div className="timer">
                            <div className="time-box">
                                <span className="time">{timeLeft.days}</span>
                                <span className="label">Days</span>
                            </div>
                            <div className="time-box">
                                <span className="time">{timeLeft.hours}</span>
                                <span className="label">Hours</span>
                            </div>
                            <div className="time-box">
                                <span className="time">{timeLeft.minutes}</span>
                                <span className="label">Minutes</span>
                            </div>
                            <div className="time-box">
                                <span className="time">{timeLeft.seconds}</span>
                                <span className="label">Seconds</span>
                            </div>
                        </div>
                    </div>

                   {/* 🔥 Main Content */}
 <div className="content">
 <h1 className="title">
     <img src={SouthAfricaFlag} alt="South African Flag" className="flag-icon" />
     $CPT TOKEN
 </h1>
 <p className="description">
     Experience the future of decentralized finance with CPT Token! Inspired by the beauty and resilience of Cape Town, this token is more than just a digital asset—it's a movement.
     CPT Token stands in solidarity with the people of Palestine and the Democratic Republic of Congo, bringing awareness to their struggles and advocating for freedom, justice, and economic empowerment.
     Decentralization is not just about finance; it’s about sovereignty, liberation, and global unity!
 </p>

 {/* 📌 Wallet Section */}
 <div className="wallet-container">
     <input type="text" value={walletAddress} readOnly className="wallet-address" />
     <button onClick={copyToClipboard} className="copy-button">
         <FiCopy size={20} />
     </button>
 </div>
 {copySuccess && <p className="copy-notification">✅ Wallet address copied!</p>}

 <button className="buy-button">Buy CPT Token</button>

 {/* 📌 Support Section */}
 <div className="support-section">
     <p>We stand with Palestine & DRC</p>
     <div className="flag-container">
         <img src={Palestine} alt="Palestine Flag" className="flag" />
         <img src={DRC} alt="DRC Flag" className="flag" />
     </div>
 </div>
</div>

<CptLeaderboard/>

{/* 🔥 Tokenomics Section */}
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

{/* 🔥 News Section */}
<section className="news">
<h2>📰 Free Palestine & DRC</h2>
<div className="news-container">
<div className="news-item">
<img src="/assets/news1.jpg" alt="News 1" className="news-image"/>
</div>
<div className="news-item">
<img src="/assets/news2.jpg" alt="News 2" className="news-image"/>
</div>
<div className="news-item">
<img src="/assets/news3.jpg" alt="News 3" className="news-image"/>
</div>
<div className="news-item">
<img src="/assets/news4.jpg" alt="News 4" className="news-image"/>
</div>
<div className="news-item">
<img src="/assets/news5.jpg" alt="News 5" className="news-image"/>
</div>
<div className="news-item">
<img src="/assets/news6.jpg" alt="News 6" className="news-image"/>
</div>
</div>
</section>
{/* 🔥 Roadmap Section */}
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


{/* 🎥 Video Gallery Section */}
<section className="gallery">
 <h2>📸 This is Africa</h2>
 <div className="gallery-container">
     {images.map((image, index) => (
         <div className="gallery-item" key={index}>
             <img className="gallery-image" src={image} alt={`Gallery ${index + 1}`} />
         </div>
     ))}
 </div>
</section>

                    {/* 📌 Footer */}
                    <footer className="footer">
                        <p>© 2025 $CPT Token. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default CPTToken;


 