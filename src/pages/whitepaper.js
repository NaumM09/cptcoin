import React, { useState, useEffect } from "react";
import "../styles/whitepaper.css";
import { FaArrowUp } from "react-icons/fa";

const Whitepaper = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="whitepaper-container">
      <div className="whitepaper-content">
        <h1>South Africa Token (SAT) Whitepaper</h1>

        <section>
          <h2>1. Introduction</h2>
          <p>
            <strong>Experience the Future of Decentralized Awareness</strong>
          </p>
          <p>
            The South Africa Token (SAT) is a blockchain-based digital asset designed <strong>exclusively for advocacy and social impact</strong>. It is not a financial instrument, nor is it intended for speculative trading or investment purposes.
          </p>
          <p>
            SAT serves as a <strong>symbol of solidarity</strong> with the people of Palestine and the Democratic Republic of Congo (DRC), bringing attention to human rights violations, economic injustices, and humanitarian crises in these regions.
          </p>
          <p>
            This token carries <strong>no monetary value</strong> outside its intended purpose. It is a <strong>non-tradable digital asset</strong> meant to amplify global awareness, mobilize communities, and facilitate transparent donations to reputable humanitarian organizations.
          </p>
        </section>

        <section>
          <h2>2. Mission & Vision</h2>

          <h3>Mission</h3>
          <ul>
            <li>
              <strong>Raise Global Awareness:</strong> SAT aims to highlight systemic injustices, economic struggles, and humanitarian crises that often go unnoticed. The token serves as a <strong>decentralized educational tool</strong>, leveraging blockchain technology to provide verifiable information and updates about ongoing issues in Palestine and the DRC.
            </li>
            <li>
              <strong>Promote Decentralized Advocacy:</strong> Traditional media and centralized institutions often fail to amplify grassroots movements. SAT enables <strong>decentralized advocacy</strong>, empowering individuals to spread awareness without the risk of censorship or suppression.
            </li>
            <li>
              <strong>Facilitate Transparent Donations:</strong> A portion of the token supply is allocated for humanitarian aid and relief efforts. Through blockchain technology, every donation can be tracked, ensuring that contributions reach legitimate organizations supporting affected communities.
            </li>
          </ul>

          <h3>Vision</h3>
          <p>
            Our vision is to establish <strong>a digital movement</strong> that seamlessly integrates activism with blockchain transparency. By creating a decentralized ecosystem of awareness and support, SAT will allow individuals worldwide to <strong>participate in human rights advocacy, economic justice, and direct action</strong> through innovative technology.
          </p>
        </section>

        <section>
          <h2>3. Purpose & Limitations</h2>
          <p>
            Unlike cryptocurrencies designed for financial transactions, SAT is <strong>not meant for speculative investment or trading</strong>. The token exists solely to support social impact efforts. Below are the key characteristics and limitations of SAT:
          </p>
          <ul>
            <li>
              <strong>No Financial Value:</strong> SAT does not represent a form of currency, nor does it hold any intrinsic market value. It is not pegged to any fiat currency or commodity, and its issuance is strictly for <strong>awareness-building and activism</strong> rather than financial gain.
            </li>
            <li>
              <strong>Not for Trading or Investment:</strong> SAT is <strong>not listed on exchanges</strong> and cannot be bought, sold, or traded. Any attempt to create a market around SAT <strong>goes against its intended purpose</strong> and will not be endorsed by the project.
            </li>
            <li>
              <strong>Educational and Awareness-Based Use Only:</strong> The token serves as <strong>a digital representation of advocacy efforts</strong>, allowing users to engage with humanitarian initiatives, learn about socio-economic issues, and contribute to global discussions in a meaningful way.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. How SAT Supports Global Solidarity</h2>

          <h3>4.1 Raising Awareness</h3>
          <p>
            SAT is not just a digital token—it is a <strong>tool for education and engagement</strong>. By utilizing blockchain technology, SAT ensures that crucial information about global injustices reaches a wider audience.
          </p>
          <ul>
            <li>
              <strong>Public Engagement Campaigns:</strong> SAT partners with advocacy groups to launch online campaigns, virtual events, and social media initiatives that <strong>educate the public on ongoing humanitarian crises</strong>.
            </li>
            <li>
              <strong>Decentralized Information Sharing:</strong> Unlike traditional media, which is often influenced by political and economic interests, SAT ensures <strong>uncensored access</strong> to factual information through blockchain-based content distribution.
            </li>
            <li>
              <strong>Empowering Individuals to Take Action:</strong> By holding SAT, users demonstrate their <strong>commitment to human rights and economic justice</strong>, reinforcing the importance of grassroots activism in a digital age.
            </li>
          </ul>

          <h3>4.2 Humanitarian Support and Direct Aid</h3>
          <p>
            SAT directly contributes to <strong>humanitarian aid efforts</strong> by partnering with NGOs and relief organizations. This ensures that <strong>real-world impact</strong> is made through transparent and accountable donations.
          </p>
          <ul>
            <li>
              <strong>Blockchain-Tracked Donations:</strong> Every SAT token allocated for humanitarian efforts is <strong>publicly trackable</strong>, ensuring that funds reach their intended destinations without intermediaries siphoning resources.
            </li>
            <li>
              <strong>Collaboration with Verified Organizations:</strong> Only <strong>legitimate, vetted NGOs</strong> receive SAT-backed donations, preventing misuse or misallocation of funds.
            </li>
            <li>
              <strong>Ongoing Community Governance:</strong> Token holders participate in <strong>decision-making</strong> regarding which organizations receive support, ensuring a <strong>community-driven approach</strong> to humanitarian aid.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Partner NGOs in the DRC and Palestine</h2>
          <p>
            As part of its commitment to global solidarity, SAT collaborates with <strong>trusted and established humanitarian organizations</strong> 
            in both the Democratic Republic of Congo and Palestine. These partnerships ensure that donations are distributed efficiently 
            and transparently to those in need.
          </p>

          <h3>Democratic Republic of Congo (DRC) Partners</h3>
          <ul>
            <li>
              <strong>International Rescue Committee (IRC)</strong>
              <p>
                <strong>Website:</strong> <a href="https://www.rescue.org/country/democratic-republic-congo" target="_blank" rel="noopener noreferrer">https://www.rescue.org/country/democratic-republic-congo</a>
              </p>
              <p>
                <strong>Mission:</strong> The IRC provides emergency aid, health care, education, and economic support to communities 
                recovering from conflict and violence. Their goal is to help Congolese people rebuild their lives through 
                sustainable development programs.
              </p>
            </li>
            <li>
              <strong>Save the Children</strong>
              <p>
                <strong>Website:</strong> <a href="https://www.savethechildren.org/us/where-we-work/democratic-republic-of-congo" target="_blank" rel="noopener noreferrer">https://www.savethechildren.org/us/where-we-work/democratic-republic-of-congo</a>
              </p>
              <p>
                <strong>Mission:</strong> Save the Children has been active in the DRC since 1994, addressing the humanitarian needs 
                of children. Their work includes improving education, healthcare, and child protection. In 2022 alone, 
                they reached over 2.5 million people in the DRC, providing critical support to children and their families.
              </p>
            </li>
          </ul>

          <h3>Palestine Partners</h3>
          <ul>
            <li>
              <strong>United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA)</strong>
              <p>
                <strong>Website:</strong> <a href="https://www.unrwa.org/" target="_blank" rel="noopener noreferrer">https://www.unrwa.org/</a>
              </p>
              <p>
                <strong>Mission:</strong> UNRWA provides essential services to Palestine refugees, including education, health care, 
                emergency relief, and social services. Their programs support millions of displaced Palestinians, 
                ensuring access to basic human rights and development opportunities.
              </p>
            </li>
            <li>
              <strong>Palestinian Environmental NGOs Network (PENGON)</strong>
              <p>
                <strong>Website:</strong> <a href="https://www.pengon.org/" target="_blank" rel="noopener noreferrer">https://www.pengon.org/</a>
              </p>
              <p>
                <strong>Mission:</strong> PENGON is a coalition of environmental organizations in Palestine that focuses on environmental 
                sustainability, resource conservation, and community-based environmental justice. They advocate for 
                policies that protect Palestinian land, water, and air from environmental degradation.
              </p>
            </li>
          </ul>

          <p>
            By leveraging <strong>decentralized finance (DeFi)</strong>, SAT enables direct and transparent donations to these organizations. 
            Every transaction is recorded on the blockchain, ensuring that contributions reach their intended recipients 
            <strong>without unnecessary intermediaries or financial inefficiencies</strong>.
          </p>
        </section>

        <section>
          <h2>5. Token Allocation</h2>
          <p>
            SAT's supply is structured to maximize its impact on advocacy, education, and humanitarian relief.
          </p>
          <ul>
            <li><strong>Total Supply:</strong> 1 Billion SAT</li>
            <li><strong>50% (500M SAT):</strong> Awareness-building campaigns, digital activism, and decentralized education.</li>
            <li><strong>30% (300M SAT):</strong> Humanitarian donations, partnerships with NGOs, and emergency relief funding.</li>
            <li><strong>10% (100M SAT):</strong> Development of blockchain-based awareness platforms and advocacy tools.</li>
            <li><strong>5% (50M SAT):</strong> Media production and outreach initiatives, including documentaries, reports, and social campaigns.</li>
            <li><strong>5% (50M SAT):</strong> Administrative and operational costs for maintaining transparency, security, and impact verification.</li>
          </ul>
        </section>

        <section>
          <h2>6. Roadmap</h2>
          <ul>
            <li>
              <strong>Phase 1: Launch & Community Awareness</strong>  
              <p>- SAT token deployment, website launch, and advocacy partnerships.</p>
              <p>- Initial education campaigns focused on Palestine and the DRC.</p>
            </li>
            <li>
              <strong>Phase 2: NGO Collaboration & Humanitarian Support</strong>  
              <p>- Integration with non-profit organizations for direct aid distribution.</p>
              <p>- Development of blockchain transparency tools for tracking donations.</p>
            </li>
            <li>
              <strong>Phase 3: Expansion & Decentralized Governance</strong>  
              <p>- Launch of decentralized governance mechanisms.</p>
              <p>- Expansion into other humanitarian and justice-focused initiatives.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Conclusion</h2>
          <p>
            The South Africa Token (SAT) is <strong>not a financial asset but a digital movement</strong>. It represents solidarity, awareness, 
            and activism in an era where <strong>decentralized technology can amplify voices and support those in need</strong>. By participating in SAT, 
            individuals engage in a transparent, meaningful, and impactful initiative that stands for justice and global awareness.
          </p>
        </section>
      </div>
      
      {/* Back to top button */}
      <div 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default Whitepaper;