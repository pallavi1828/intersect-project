
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

const SystemSecurity = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const securityImages = [
    "/images/system1.jpg",
    "/images/system2.jpg",
    "/images/system3.jpg",
  ];

  const partners = [
    {
      name: "Sophos",
      logo: "/images/partners/sophos.png",
      url: "https://www.sophos.com/",
    },
    {
      name: "McAfee",
      logo: "/images/partners/mcafee.png",
      url: "https://www.mcafee.com/",
    },
    {
      name: "CrowdStrike",
      logo: "/images/partners/crowdstrike.png",
      url: "https://www.crowdstrike.com/",
    },
    {
      name: "Trend Micro",
      logo: "/images/partners/trendmicro.png",
      url: "https://www.trendmicro.com/",
    },
    {
      name: "Kaspersky",
      logo: "/images/partners/kaspersky.png",
      url: "https://www.kaspersky.com/",
    },
    {
      name: "SEQRITE",
      logo: "/images/partners/seqrite.png",
      url: "https://www.seqrite.com/",
    },
     {
      name: "Sophos",
      logo: "/images/partners/sophos.png",
      url: "https://www.sophos.com/",
    },
    {
      name: "McAfee",
      logo: "/images/partners/mcafee.png",
      url: "https://www.mcafee.com/",
    },
    {
      name: "CrowdStrike",
      logo: "/images/partners/crowdstrike.png",
      url: "https://www.crowdstrike.com/",
    },
    {
      name: "Trend Micro",
      logo: "/images/partners/trendmicro.png",
      url: "https://www.trendmicro.com/",
    },
    {
      name: "Kaspersky",
      logo: "/images/partners/kaspersky.png",
      url: "https://www.kaspersky.com/",
    },
    {
      name: "SEQRITE",
      logo: "/images/partners/seqrite.png",
      url: "https://www.seqrite.com/",
    },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔰 Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/system-security.jpg"
          alt="System Security Banner"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔰 Title */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        System Security Solutions
      </motion.h2>

      {/* 🔰 Description */}
     <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Intersect India Pvt Ltd delivers advanced cybersecurity solutions that combine AI-powered detection,
  real-time threat prevention, and multi-layered endpoint protection to guard your digital infrastructure.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Our defense systems leverage machine learning algorithms to detect malicious traffic patterns and block
  malware with minimal latency. By predicting behavior rather than reacting to known threats, we stay ahead of
  evolving attacks.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  We provide threat intelligence feeds, ransomware disruption, DGA detection, and C&C interception — enabling
  precise threat identification across endpoints, networks, email, and cloud workloads.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  With Managed Detection & Response (MDR), our expert hunters work round-the-clock to minimize time-to-detect
  and time-to-respond, empowering your organization with 24/7 cyber resilience.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  Recognized by global analysts and trusted by enterprises worldwide, our AI-native platform integrates
  seamlessly with your IT ecosystem — ensuring adaptive, scalable, and future-ready cybersecurity.
</motion.p>


      {/* 🔰 Gallery */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        Security Deployments
      </motion.h3>

     
        <div className="solutions-grid solution-detail-page">

        {securityImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.2 }}
            onClick={() => setSelectedImage(img)}
  style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`System Security ${idx + 1}`} />
           
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

      {/* 🔰 Partners */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={4}
        style={{ fontSize: "1.8rem", marginTop: "60px", marginBottom: "20px" }}
      >
        Our Security Technology Partners
      </motion.h3>

      <div className="marquee">
        <div className="marquee-content">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              className="partner-logo"
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

export default SystemSecurity;
