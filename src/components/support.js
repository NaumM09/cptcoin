import "../styles/support.css";
import Palestine from "../palestine-flag.png";
import DRC from "../drc-flag.png";
import SA from "../south-african-flag.png"

export default function Support() {
  return (
    <div className="support-container">
      {/* 📌 Video Section */}
      <div className="video-section">
  <h2 className="section-title">"We will not be bullied"</h2>
  <span className="support-span">President Cyril Ramaphosa</span>
  
  <video autoPlay loop controls className="support-video">
    <source src="/assets/sona_address.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      {/* 📌 Flags Section */}
      <div className="flags-section">
      <img src={SA} alt="South African Flag" className="flag" />
      <img src={Palestine} alt="Palestinian Flag" className="flag" />
        <img src={DRC} alt="DRC Flag" className="flag" />
      </div>

      {/* 🔥 News Section */}
      <section className="news">
        <h2>📰 Free Palestine & DRC</h2>
        <div className="news-container">
          <div className="news-item">
            <img src="/assets/news1.jpg" alt="News 1" className="news-image"/>
            <p className="news-title">South Africa warns Rwanda of ‘declaration of war’</p>
          </div>
          <div className="news-item">
            <img src="/assets/news2.jpg" alt="News 2" className="news-image"/>
            <p className="news-title">South Africa and Rwanda go head-to-head over DR Congo war</p>
          </div>
          <div className="news-item">
            <img src="/assets/news3.jpg" alt="News 3" className="news-image"/>
            <p className="news-title">South Africa urges respect for DR Congo’s territorial integrity</p>
          </div>
          <div className="news-item">
            <img src="/assets/news4.jpg" alt="News 4" className="news-image"/>
            <p className="news-title">Nelson Mandela’s support for Palestinians endures</p>
          </div>
          <div className="news-item">
            <img src="/assets/news5.jpg" alt="News 5" className="news-image"/>
            <p className="news-title">South Africa’s genocide case against Israel at the ICJ</p>
          </div>
          <div className="news-item">
            <img src="/assets/news6.jpg" alt="News 6" className="news-image"/>
            <p className="news-title">South Africa’s involvement in DR Congo</p>
          </div>
        </div>
      </section>
    </div>
  );
}
