import React from "react";
import "../styles/roadmap.css";
import { FaCheckCircle, FaHourglass, FaRocket, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

export default function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Launch & Community Awareness",
      status: "in-progress", // current phase
      items: [
        { text: "Website Launch", completed: true },
        { text: "Social Media Awareness Campaigns", completed: true },
        { text: "Community Building", completed: true },
        { text: "Educational Content Development", completed: true },
        { text: "Initial Advocacy Partnerships", completed: false }
      ]
    },
    {
      phase: "Phase 2",
      title: "Advocacy Expansion & Education",
      status: "upcoming",
      items: [
        { text: "Decentralized Educational Platform", completed: false },
        { text: "Expanded NGO Partnerships", completed: false },
        { text: "Community-Driven Awareness Initiatives", completed: false },
        { text: "Digital Activism Tools Development", completed: false },
        { text: "Media Production for Awareness", completed: false }
      ]
    },
    {
      phase: "Phase 3",
      title: "Decentralized Governance & Global Impact",
      status: "upcoming",
      items: [
        { text: "Community Governance Implementation", completed: false },
        { text: "Expansion to Additional Humanitarian Causes", completed: false },
        { text: "Cross-Border Awareness Initiatives", completed: false },
        { text: "Global Solidarity Network Development", completed: false },
        { text: "Long-Term Humanitarian Impact Assessment", completed: false }
      ]
    }
  ];

  return (
    <div className="roadmap-container" id="roadmap">
      <div className="roadmap-header">
        <h2 className="roadmap-title">Roadmap</h2>
        <p className="roadmap-subtitle">Our journey to transform $RSA into a global movement for awareness and humanitarian support</p>
      </div>

      <div className="impact-statement">
        <FaHandHoldingHeart className="impact-icon" />
        <p>The $RSA token is <strong>not a financial instrument</strong>. This roadmap outlines our commitment to advocacy, awareness, and humanitarian support for Palestine and the DRC.</p>
      </div>

      <div className="roadmap-timeline">
        {roadmapPhases.map((phase, phaseIndex) => (
          <div 
            className={`roadmap-phase ${phase.status}`} 
            key={phaseIndex}
          >
            <div className="phase-header">
              <div className="phase-icon">
                {phase.status === "completed" && <FaCheckCircle />}
                {phase.status === "in-progress" && <FaRocket />}
                {phase.status === "upcoming" && <FaHourglass />}
              </div>
              <div className="phase-title-wrapper">
                <h3 className="phase-title">{phase.phase}: {phase.title}</h3>
                <div className="phase-timeframe">{phase.timeframe}</div>
              </div>
            </div>
            
            <div className="phase-content">
              <ul className="phase-items">
                {phase.items.map((item, itemIndex) => (
                  <li 
                    className={`phase-item ${item.completed ? "completed" : ""}`}
                    key={itemIndex}
                  >
                    <div className="item-status">
                      {item.completed ? 
                        <FaCheckCircle className="status-icon completed" /> : 
                        <div className="status-circle"></div>
                      }
                    </div>
                    <div className="item-text">{item.text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="connector-line"></div>
      
      <div className="token-allocation">
        <h3 className="allocation-title">Token Allocation for Impact</h3>
        <div className="allocation-items">
          <div className="allocation-item">
            <div className="allocation-percent">50%</div>
            <div className="allocation-label">Awareness Campaigns</div>
          </div>
          <div className="allocation-item">
            <div className="allocation-percent">30%</div>
            <div className="allocation-label">Humanitarian Support</div>
          </div>
          <div className="allocation-item">
            <div className="allocation-percent">10%</div>
            <div className="allocation-label">Platform Development</div>
          </div>
          <div className="allocation-item">
            <div className="allocation-percent">10%</div>
            <div className="allocation-label">Operations & Media</div>
          </div>
        </div>
      </div>
      
      <div className="community-section">
        <FaUsers className="community-icon" />
        <h3>Join Our Advocacy Community</h3>
        <p>Together, we can amplify voices and support humanitarian efforts in Palestine and the DRC.</p>
        <div className="community-buttons">
          <a href="/whitepaper" className="whitepaper-btn">Read Our Whitepaper</a>
          <button className="join-btn">Join the Movement</button>
        </div>
      </div>
      
      <div className="roadmap-footer">
        <p className="roadmap-note">*This roadmap focuses on humanitarian impact and awareness rather than financial or speculative goals. It may evolve based on humanitarian needs and community feedback.</p>
      </div>
    </div>
  );
}