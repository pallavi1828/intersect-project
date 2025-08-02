import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/Solutions.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const StructuredCabling = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const additionalImages = [
    "/images/structured1.jpg",
    "/images/structured2.jpg",
    "/images/structured3.jpg",
  ];

  const partners = [
    {
      name: "D-Link",
      logo: "/images/partners/dlink.png",
      url: "https://www.dlink.com/",
    },
    {
      name: "Molex",
      logo: "/images/partners/molex.png",
      url: "https://www.molex.com/",
    },
    {
      name: "CommScope",
      logo: "/images/partners/commscope.png",
      url: "https://www.commscope.com/",
    },
    {
      name: "R&M",
      logo: "/images/partners/randm.png",
      url: "https://www.rdm.com/",
    },
    {
      name: "D-Link",
      logo: "/images/partners/dlink.png",
      url: "https://www.dlink.com/",
    },
    {
      name: "Molex",
      logo: "/images/partners/molex.png",
      url: "https://www.molex.com/",
    },
    {
      name: "CommScope",
      logo: "/images/partners/commscope.png",
      url: "https://www.commscope.com/",
    },
    {
      name: "R&M",
      logo: "/images/partners/randm.png",
      url: "https://www.rdm.com/",
    },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔹 Top banner image */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/structured-cabling.jpg"
          alt="Structured Cabling"
          className="structured-banner"
        />
      </motion.div>
 {/* 🔸 Content */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Structured Cabling Solutions
      </motion.h2>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
        Intersect India Pvt Ltd delivers intelligent structured cabling solutions that form the foundation of efficient IT infrastructure. Our systems are designed to ensure seamless data, voice, and video communication across your enterprise.
      </motion.p>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
        A robust cabling infrastructure increases uptime, scalability, and business continuity. Our end-to-end solutions deliver high performance, reliability, and compatibility with evolving technologies — making them a strategic investment for future-proof networks.
      </motion.p>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
        As a technology-driven organization, Intersect India Pvt Ltd partners with global leaders to deliver components that meet international standards and reduce long-term maintenance costs. Our solutions ensure platform stability, open architecture, and compliance with industry norms.
      </motion.p>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
        From consulting to installation, our certified experts ensure your structured cabling deployment is optimized for performance, space efficiency, and minimal disruption. Whether for greenfield builds or infrastructure upgrades, we provide unmatched scalability and reliability.
      </motion.p>
      <motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
        Explore our structured cabling solutions to enhance your network's performance and future-proof your IT infrastructure.     
      </motion.p>
      
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        Structured Cabling Solutions
      </motion.h3>

      {/* 🔸 Image Grid with Modal Trigger */}
      <div className="solutions-grid solution-detail-page">
        {additionalImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card shiny-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(img)}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`Structured Cabling ${idx + 1}`} />
          </motion.div>
        ))}
      </div>

      {/* 🔍 Modal Image Preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Zoomed" />
          </div>
        </div>
      )}

      {/* 🔻 Partner Logo Marquee */}
      <motion.div className="partner-carousel" variants={fadeIn} custom={3.5}>
        <h3 className="solutions-heading">Our Trusted Partners</h3>
        <div className="marquee">
          <div className="marquee-content">
            {[...partners, ...partners].map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
              >
                <img src={partner.logo} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StructuredCabling;
