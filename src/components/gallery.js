import React from "react";
import "../styles/gallery.css";

const images = [
  "/assets/img.jpg",
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jpg",
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery-title">This is Africa</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img className="gallery-image" src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
