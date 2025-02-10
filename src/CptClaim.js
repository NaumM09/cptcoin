import { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import "./Cpt.css";

const CPTClaim = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);
    const [claimed, setClaimed] = useState(false);
    const [remainingSupply, setRemainingSupply] = useState(50000000); // Total Airdrop Supply
    const claimAmount = 500000; // Per Wallet Claim Limit

    useEffect(() => {
        const fetchWallet = async () => {
            setWalletAddress("8r9drpRjYBE43LrH1qTYDdpHE6PzSa6KLPpfXAXgRfmB");
        };
        fetchWallet();
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
    };

    const handleClaim = () => {
        if (!walletAddress) {
            alert("Please connect your wallet first!");
            return;
        }
        if (claimed) {
            alert("You have already claimed your airdrop.");
            return;
        }
        if (remainingSupply < claimAmount) {
            alert("No more tokens left to claim.");
            return;
        }

        setClaimed(true);
        setRemainingSupply(remainingSupply - claimAmount);
    };

    return (
        <div className="claim-section">
            <h2>🚀 Claim Your $CPT Tokens!</h2>
            <p>Each wallet can claim <strong>500,000 CPT</strong>. Limited to one claim per wallet.</p>

            <div className="wallet-container">
                <input type="text" value={walletAddress} readOnly className="wallet-address" />
                <button onClick={copyToClipboard} className="copy-button">
                    <FiCopy size={20} />
                </button>
            </div>
            {copySuccess && <p className="copy-notification">✅ Wallet address copied!</p>}

            <button className={`claim-button ${claimed ? "disabled" : ""}`} onClick={handleClaim} disabled={claimed}>
                {claimed ? "Airdrop Claimed ✅" : "Claim 500,000 CPT"}
            </button>

            <p className="remaining-tokens">🔥 {remainingSupply.toLocaleString()} CPT left!</p>
        </div>
    );
};

export default CPTClaim;