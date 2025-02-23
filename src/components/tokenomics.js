import "../styles/tokenomics.css";

const Tokenomics = () => {
  return (
    <section className="tokenomics-container">
      <h2 className="tokenomics-title">Tokenomics</h2>
      
      <div className="tokenomics-details">
        {/* Tax */}
        <div className="tokenomics-item">
          <h3>📜 Tax</h3>
          <span>0%</span>
        </div>

        {/* Total Supply */}
        <div className="tokenomics-item">
          <h3>🔗 Total Supply</h3>
          <span>1 Billion</span>
        </div>

        {/* Token Symbol */}
        <div className="tokenomics-item">
          <h3>💎 Token Symbol</h3>
          <span>$RSA</span>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;