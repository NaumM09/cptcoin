import "../styles/roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap-container">
      <h2 className="roadmap-title">$RSA Token Roadmap</h2>
      <p className="roadmap-subtext">
        A percentage of the $RSA Token supply will be allocated to community-voted
        organizations that support Palestine and the Democratic Republic of Congo.
      </p>

      <div className="roadmap-timeline">
        {/* Phase 1 */}
        <div className="roadmap-phase completed">
          <h3>🔹 Phase 1</h3>
          <h4>Token Launch & Community Building</h4>
          <ul>
            <li>✅ Token Deployment & Smart Contract Audit</li>
            <li>✅ Website & Whitepaper Release</li>
            <li>🔜 DEX Listing & Liquidity Pool Setup</li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="roadmap-phase upcoming">
          <h3>🔸 Phase 2</h3>
          <h4>Exchange Listings & Partnerships</h4>
          <ul>
            <li>🔜 Secure Listings on Additional Platforms</li>
            <li>🔜 Collaborate with DeFi & Crypto Projects</li>
            <li>🔜 Increase Accessibility for $RSA Holders</li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="roadmap-phase planned">
          <h3>🟢 Phase 3</h3>
          <h4>First Donation to Community-Voted Organizations</h4>
          <ul>
            <li>🔜 Launch Voting for Community Donations</li>
            <li>🔜 Execute First Donation to Verified NGOs</li>
            <li>🔜 Ensure Transparency in Fund Allocation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
