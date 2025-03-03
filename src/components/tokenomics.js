import React from "react";
import "../styles/tokenomics.css";
import { FaLightbulb, FaHandHoldingHeart, FaUserFriends, FaTools, FaFilm, FaShieldAlt } from "react-icons/fa";

export default function Tokenomics() {
  // Token allocation data aligned with whitepaper
  const tokenAllocation = [
    { name: "Burned Supply", percentage: 50, color: "#4da6ff", icon: <FaLightbulb /> },
    { name: "Humanitarian Support", percentage: 30, color: "#66bb6a", icon: <FaHandHoldingHeart /> },
    { name: "Platform Development", percentage: 10, color: "#8c52ff", icon: <FaTools /> },
    { name: "Media & Outreach", percentage: 5, color: "#ff7043", icon: <FaFilm /> },
    { name: "Administration", percentage: 5, color: "#ffc107", icon: <FaShieldAlt /> }
  ];

  // Token details
  const tokenDetails = [
    { 
      title: "Token Name", 
      value: "South Africa Token (SAT)" 
    },
    { 
      title: "Purpose", 
      value: "Advocacy & Awareness" 
    },
    { 
      title: "Total Supply", 
      value: "1,000,000,000 SAT" 
    },
    { 
      title: "Network", 
      value: "Solana" 
    },
    { 
      title: "Launch Date", 
      value: "April 1, 2025" 
    },
    { 
      title: "Value Type", 
      value: "Non-Financial Asset" 
    }
  ];

  // Key initiatives
  const keyInitiatives = [
    {
      icon: <FaLightbulb />,
      title: "Public Engagement",
      description: "Educational campaigns focused on raising awareness for Palestine and DRC issues"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Humanitarian Support",
      description: "Partnerships with verified NGOs to provide direct aid to affected communities"
    },
    {
      icon: <FaUserFriends />,
      title: "Decentralized Advocacy",
      description: "Empowering individuals to participate in awareness initiatives without censorship"
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Tracking",
      description: "Blockchain-based verification of all humanitarian contributions and their impact"
    }
  ];

  return (
    <div className="tokenomics-container" id="tokenomics">
      <div className="tokenomics-header">
        <h2 className="tokenomics-title">Token Allocation</h2>
        <p className="tokenomics-subtitle">How SAT supports advocacy, awareness, and humanitarian efforts</p>
      </div>

      <div className="disclaimer-banner">
        <div className="disclaimer-icon">!</div>
        <p>SAT is <strong>not a financial instrument</strong> and holds <strong>no monetary value</strong>. It is designed exclusively for advocacy and social impact.</p>
      </div>

      <div className="token-details-section">
        <h3 className="section-subtitle">Token Details</h3>
        <div className="token-details-grid">
          {tokenDetails.map((detail, index) => (
            <div className="token-detail-card" key={index}>
              <h4 className="detail-title">{detail.title}</h4>
              <p className="detail-value">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tokenomics-grid">
        <div className="allocation-section">
          <h3 className="section-subtitle">Token Allocation</h3>
          <div className="allocation-visual">
            <div className="chart-wrapper">
              <div className="pie-chart">
                {tokenAllocation.map((segment, index) => {
                  // Calculate rotation for pie chart segments
                  const previousSegmentsTotal = tokenAllocation
                    .slice(0, index)
                    .reduce((sum, curr) => sum + curr.percentage, 0);
                  
                  const rotation = previousSegmentsTotal * 3.6; // 3.6 = 360 / 100
                  
                  return (
                    <div 
                      key={index}
                      className="pie-segment"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        background: `conic-gradient(${segment.color} 0deg, ${segment.color} ${segment.percentage * 3.6}deg, transparent ${segment.percentage * 3.6}deg, transparent 360deg)`
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="allocation-legend">
              {tokenAllocation.map((segment, index) => (
                <div className="legend-item" key={index}>
                  <div className="legend-color" style={{ backgroundColor: segment.color }}></div>
                  <div className="legend-text">
                    <span className="legend-name">{segment.name}</span>
                    <span className="legend-percentage">{segment.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="initiatives-section">
          <h3 className="section-subtitle">Key Initiatives</h3>
          <div className="initiatives-grid">
            {keyInitiatives.map((initiative, index) => (
              <div className="initiative-card" key={index}>
                <div className="initiative-icon">{initiative.icon}</div>
                <h4 className="initiative-title">{initiative.title}</h4>
                <p className="initiative-description">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* 
      <div className="ngo-partners-section">
        <h3 className="section-subtitle">Partner Organizations</h3>
        <div className="ngo-cards">
          <div className="ngo-card">
            <h4 className="ngo-region">Democratic Republic of Congo</h4>
            <div className="ngo-list">
              <div className="ngo-item">
                <span className="ngo-name">International Rescue Committee (IRC)</span>
              </div>
              <div className="ngo-item">
                <span className="ngo-name">Save the Children</span>
              </div>
            </div>
          </div>
          <div className="ngo-card">
            <h4 className="ngo-region">Palestine</h4>
            <div className="ngo-list">
              <div className="ngo-item">
                <span className="ngo-name">United Nations Relief and Works Agency (UNRWA)</span>
              </div>
              <div className="ngo-item">
                <span className="ngo-name">Palestinian Environmental NGOs Network (PENGON)</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      <div className="tokenomics-cta">
        <h3 className="cta-title">Join Our Advocacy Movement</h3>
        <p className="cta-text">Be part of a digital movement for global awareness and humanitarian support</p>
        <a href="/whitepaper" className="whitepaper-btn">
          Read Our Whitepaper
        </a>
      </div>
    </div>
  );
}