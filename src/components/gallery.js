import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../styles/gallery.css";
import { FaExpand, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState([]);
  
  // Gallery image data with captions - wrapped in useMemo to avoid dependency changes on every render
  const galleryImages = useMemo(() => [
    { 
      src: "/assets/img.jpg", 
      alt: "South African landscape", 
      caption: "The beauty of Cape Town's coastline",
      location: "Cape Town, South Africa"
    },
    { 
      src: "/assets/img1.jpg", 
      alt: "Wildlife in South Africa", 
      caption: "Majestic wildlife in their natural habitat",
      location: "Kruger National Park"
    },
    { 
      src: "/assets/img2.jpg", 
      alt: "South African culture", 
      caption: "Rich cultural heritage and traditions",
      location: "Johannesburg, South Africa"
    },
    { 
      src: "/assets/img3.jpg", 
      alt: "South African landmarks", 
      caption: "Iconic landmarks representing our history",
      location: "Pretoria, South Africa"
    },
    { 
      src: "/assets/img4.jpg", 
      alt: "South African people", 
      caption: "The vibrant spirit of South African people",
      location: "Durban, South Africa"
    },
  ], []); // Empty dependency array means this only runs once on component mount
  
  // Placeholder gradient colors for missing images - also wrapped in useMemo
  const placeholderColors = useMemo(() => [
    "linear-gradient(45deg, #FF5F6D, #FFC371)",
    "linear-gradient(45deg, #4E65FF, #92EFFD)",
    "linear-gradient(45deg, #A9F1DF, #FFBBBB)",
    "linear-gradient(45deg, #FCCF31, #F55555)",
    "linear-gradient(45deg, #52ACFF, #FFE32C)"
  ], []);
  
  // Check which images are successfully loaded
  useEffect(() => {
    const checkImageLoaded = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    };
    
    const loadImages = async () => {
      const results = await Promise.all(
        galleryImages.map(image => checkImageLoaded(image.src))
      );
      setImagesLoaded(results);
    };
    
    loadImages();
  }, [galleryImages]);
  
  // Lightbox navigation function - define with useCallback to avoid dependency issues
  const navigateLightbox = useCallback((direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedImage(newIndex);
    }
  }, [selectedImage, galleryImages.length]);

  // Lightbox functionality
  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, navigateLightbox]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">This is Africa</h2>
        <p className="gallery-description">
          The breathtaking landscapes and vibrant spirit of the continent we love and support
        </p>
        <div className="gallery-divider"></div>
      </div>
      
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div 
            className="gallery-item" 
            key={index}
            onClick={() => openLightbox(index)}
          >
            {imagesLoaded[index] ? (
              <img 
                className="gallery-image" 
                src={image.src} 
                alt={image.alt} 
              />
            ) : (
              <div 
                className="image-placeholder" 
                style={{ background: placeholderColors[index % placeholderColors.length] }}
              >
                <span className="placeholder-text">South Africa</span>
              </div>
            )}
            <div className="image-overlay">
              <div className="overlay-content">
                <FaExpand className="expand-icon" />
                <h3 className="image-caption">{image.caption}</h3>
                <p className="image-location">{image.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <button className="close-lightbox" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <div className="lightbox-content">
            {selectedImage > 0 && (
              <button 
                className="lightbox-nav prev" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(-1);
                }}
              >
                <FaChevronLeft />
              </button>
            )}
            
            <div className="lightbox-image-container">
              {imagesLoaded[selectedImage] ? (
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt} 
                  className="lightbox-image"
                />
              ) : (
                <div 
                  className="lightbox-placeholder" 
                  style={{ background: placeholderColors[selectedImage % placeholderColors.length] }}
                >
                  <span className="placeholder-text">Image Not Available</span>
                </div>
              )}
              
              <div className="lightbox-caption">
                <h3>{galleryImages[selectedImage].caption}</h3>
                <p>{galleryImages[selectedImage].location}</p>
              </div>
            </div>
            
            {selectedImage < galleryImages.length - 1 && (
              <button 
                className="lightbox-nav next" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(1);
                }}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
          
          <div className="lightbox-counter">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
      
      <div className="gallery-cta">
        <p>Support our mission to celebrate and uplift African communities</p>
        <a 
          href="https://www.southafrica.net/uk/en/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="gallery-cta-button">Visit South Africa</button>
        </a>
      </div>
    </section>
  );
};

export default Gallery;