import React, { useState } from "react";
import "../styles/Accolades.css";
import { motion } from "framer-motion";

// Award image paths (20 total)
const accoladeImages = Array.from({ length: 12 }, (_, i) => `/images/awards/award${i + 1}.png`);

// Manually listed certificate image paths (.jpg)

// (removed misplaced useEffect and handleKeyDown from here)
      

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

function prevImage(images, selectedIndex, setSelected) {
  setSelected((selectedIndex - 1 + images.length) % images.length);
}

function nextImage(images, selectedIndex, setSelected) {
  setSelected((selectedIndex + 1) % images.length);
}

const Accolades = () => {
  const [selectedAccolade, setSelectedAccolade] = useState(null);
  const [selectedCertificate, ] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // For Award Modal
      if (selectedAccolade !== null) {
        if (e.key === "ArrowRight") {
          setSelectedAccolade((prev) => (prev + 1) % accoladeImages.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedAccolade((prev) => (prev - 1 + accoladeImages.length) % accoladeImages.length);
        } else if (e.key === "Escape") {
          setSelectedAccolade(null);
        }
      }
    }
      // For Certificate Modal
      

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAccolade, selectedCertificate]);

  return (
    <div>
      {/* 🏆 Banner */}
      <motion.div className="accolades-banner" variants={fadeIn} custom={0}>
        <img src="/images/awards/banner.jpg" alt="Intersect India Awards" className="awards-banner" />
      </motion.div>

      {/* 🖼️ Awards Gallery */}
      <motion.div className="fade-in-up" variants={fadeIn} custom={1}>
        <h2 className="accolades-heading" style={{ marginTop: "60px" }}>Our Award Gallery</h2>
        <div className="accolades-gallery">
          {accoladeImages.map((src, index) => (
            <img key={index} src={src} alt={`Award ${index + 1}`} onClick={() => setSelectedAccolade(index)} />
          ))}
        </div>
      </motion.div>

      

      {/* Modal for Awards */}
      {selectedAccolade !== null && (
        <div className="modal" onClick={() => setSelectedAccolade(null)}>
          <span className="modal-close" onClick={() => setSelectedAccolade(null)}>&times;</span>
          <button
            className="modal-nav left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage(accoladeImages, selectedAccolade, setSelectedAccolade);
            }}
          >&#8592;</button>
          <img src={accoladeImages[selectedAccolade]} alt={`Award ${selectedAccolade + 1}`} />
          <button
            className="modal-nav right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage(accoladeImages, selectedAccolade, setSelectedAccolade);
            }}
          >&#8594;</button>
        </div>
      )}

      
    </div>
  );
};

export default Accolades;
