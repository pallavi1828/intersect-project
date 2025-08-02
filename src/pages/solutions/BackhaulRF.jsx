
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // reuse your existing styles

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const BackhaulRF = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const rfImages = [
     "/images/backhaul3.jpg",
   
    "/images/backhaul2.jpg",
   
    "/images/backhaul1.jpg",
  ];

  const partners = [
    {
      name: "Radwin",
      logo: "/images/partners/radwin.png",
      url: "https://www.radwin.com/",
    },
    {
      name: "Cambium",
      logo: "/images/partners/cambium.png",
      url: "https://www.cambiumnetworks.com/",
    },
    {
      name: "Ubiquiti",
      logo: "/images/partners/ubiquiti.png",
      url: "https://www.ui.com/",
    },
     {
      name: "Radwin",
      logo: "/images/partners/radwin.png",
      url: "https://www.radwin.com/",
    },
    {
      name: "Cambium",
      logo: "/images/partners/cambium.png",
      url: "https://www.cambiumnetworks.com/",
    },
    {
      name: "Ubiquiti",
      logo: "/images/partners/ubiquiti.png",
      url: "https://www.ui.com/",
    },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔹 Full-width Banner Image */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/backhaul-page.jpg"
          alt="Backhaul RF Connectivity"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔹 Heading */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Backhaul RF Connectivity
      </motion.h2>

      {/* 🔹 Paragraphs */}
      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Intersect India Pvt Ltd delivers reliable long-distance wireless backhaul solutions by integrating world-class products like Radwin, Cambium, Ubiquiti and others. We design and deploy RF connectivity using their proven technologies to ensure high-speed, stable, and secure wireless communication where wired infrastructure is not feasible.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Our RF-based Point-to-Point (PTP) and Point-to-Multipoint (PMP) systems are built on a platform-independent framework, allowing for quick deployment in urban, rural, and remote terrains. These systems utilize precise line-of-sight configurations to deliver consistent performance with minimal latency.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  We act as system integrators — combining expert technical knowledge with high-performance products from trusted global manufacturers. This allows us to tailor solutions that meet the exact needs of enterprises, educational campuses, industrial zones, and public sector projects.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  As the demand for bandwidth grows exponentially with modern applications and remote connectivity, our wireless backhaul implementations ensure scalable, low-error, and high-throughput links between user sites and core networks — without the complexity or cost of fiber.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  From defense communications to rural broadband delivery, Intersect India Pvt Ltd delivers deployment-ready RF backhaul using the best products available — ensuring network resilience, speed, and flexibility even in the most challenging conditions.
</motion.p>


      {/* 🔹 Subheading for Image Grid */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        RF Connectivity Deployments
      </motion.h3>

      {/* 🔹 Image Grid */}
     
        <div className="solutions-grid solution-detail-page">

        {rfImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
            onClick={() => setSelectedImage(img)}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`RF Link ${idx + 1}`} />
            
          </motion.div>
        ))}
      </div>
{selectedImage && (
  <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
    <div className="modal-content">
      <img src={selectedImage} alt="Zoomed" />
    </div>
  </div>
)}

      {/* 🔻 Partner Carousel */}
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

export default BackhaulRF;
