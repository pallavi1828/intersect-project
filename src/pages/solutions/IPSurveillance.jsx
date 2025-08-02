
import React, { useState } from "react";

import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // reuse main styling

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const partners = [

  {
    name: "CP Plus",
    logo: "/images/partners/cpplus.png",
    url: "https://www.cpplusworld.com/",
  },
  {
    name: "Dahua",
    logo: "/images/partners/dahua.png",
    url: "https://www.dahuasecurity.com/",
  },
  {
    name: "UNV",
    logo: "/images/partners/unv.png",
    url: "https://en.uniview.com/",
  },
  {
    name: "Bosch",
    logo: "/images/partners/bosch.png",
    url: "https://www.boschsecurity.com/",
  },
  {
    name: "Honeywell",
    logo: "/images/partners/honeywell.png",
    url: "https://www.honeywell.com/",
  },
  {
    name: "Axis Communications",
    logo: "/images/partners/axis.png",
    url: "https://www.axis.com/",
  },
  {
    name: "Vivotek",
    logo: "/images/partners/vivotek.png",
    url: "https://www.vivotek.com/",
  },
  {
    name: "CP Plus",
    logo: "/images/partners/cpplus.png",
    url: "https://www.cpplusworld.com/",
  },
  {
    name: "Dahua",
    logo: "/images/partners/dahua.png",
    url: "https://www.dahuasecurity.com/",
  },
  {
    name: "UNV",
    logo: "/images/partners/unv.png",
    url: "https://en.uniview.com/",
  },
  {
    name: "Bosch",
    logo: "/images/partners/bosch.png",
    url: "https://www.boschsecurity.com/",
  },
  {
    name: "Honeywell",
    logo: "/images/partners/honeywell.png",
    url: "https://www.honeywell.com/",
  },
  {
    name: "Axis Communications",
    logo: "/images/partners/axis.png",
    url: "https://www.axis.com/",
  },
  {
    name: "Vivotek",
    logo: "/images/partners/vivotek.png",
    url: "https://www.vivotek.com/",
  },
];

const IPSurveillance = () => {
const [selectedImage, setSelectedImage] = useState(null);

  const surveillanceImages = [
    "/images/surveillance1.jpg",
    "/images/surveillance2.jpg",
    "/images/surveillance3.jpg",
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔷 Top Full-Width Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/surveillance.jpg"
          alt="Enterprise Surveillance Banner"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔶 Heading */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        IP Surveillance
      </motion.h2>

      {/* 🔶 Paragraphs */}
      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Security is a universal concern, and video surveillance systems play a critical role in protecting people, assets, and infrastructure. With analog systems becoming outdated, organizations are increasingly shifting to IP-based surveillance for superior flexibility, resolution, and control.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Intersect India Pvt Ltd designs and implements intelligent IP Surveillance systems leveraging modern technologies that support high-definition video, real-time remote monitoring, and smart analytics to detect, analyze, and alert in case of security events.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  Our solutions include automated facial recognition, motion detection, and integration with alarm systems—ensuring a proactive rather than reactive approach to security. These systems are scalable across multiple locations and adaptable for indoor and outdoor environments.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  From small enterprises to large-scale campuses, our deployments offer centralized surveillance management, audit trail support, and enhanced situational awareness using cutting-edge IP cameras and smart recording systems.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  Whether it's real-time streaming, forensic video search, or remote monitoring through cloud-connected platforms, our surveillance ecosystems provide round-the-clock visibility, safeguarding your operations and enhancing business resilience.
</motion.p>


      {/* 🔶 Subheading */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        Surveillance Deployments
      </motion.h3>

      {/* 🔶 Example Grid */}
      
        <div className="solutions-grid solution-detail-page">

        {surveillanceImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(img)}
  style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`Surveillance View ${idx + 1}`} />
           
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

      {/* 🔶 Partner Logos Scrolling */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={4}
        style={{ fontSize: "1.6rem", marginTop: "60px" }}
      >
        Trusted Surveillance Partners
      </motion.h3>

      <div className="marquee">
        <div className="marquee-content">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              className="partner-logo"
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IPSurveillance;
