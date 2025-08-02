
import React, { useState } from "react";

import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // Uses your global styles

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const Endpoints = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const endpointImages = [
    "/images/endpoints1.jpg",
    "/images/endpoints2.jpg",
    "/images/endpoints3.jpg",
  ];

  const serverImages = [
    "/images/server1.png",
    "/images/server2.png",
    "/images/server3.png",
  ];

  const partners = [
    {
      name: "Acer",
      logo: "/images/partners/acer.png",
      url: "https://www.acer.com/",
    },
    {
      name: "Lenovo",
      logo: "/images/partners/lenovo.png",
      url: "https://www.lenovo.com/",
    },
    {
      name: "HP",
      logo: "/images/partners/hp.png",
      url: "https://www.hp.com/",
    },
    {
      name: "Dell",
      logo: "/images/partners/dell.png",
      url: "https://www.dell.com/",
    },
    {
      name: "Acer",
      logo: "/images/partners/acer.png",
      url: "https://www.acer.com/",
    },
    {
      name: "Lenovo",
      logo: "/images/partners/lenovo.png",
      url: "https://www.lenovo.com/",
    },
    {
      name: "HP",
      logo: "/images/partners/hp.png",
      url: "https://www.hp.com/",
    },
    {
      name: "Dell",
      logo: "/images/partners/dell.png",
      url: "https://www.dell.com/",
    },
     {
      name: "Acer",
      logo: "/images/partners/acer.png",
      url: "https://www.acer.com/",
    },
    {
      name: "Lenovo",
      logo: "/images/partners/lenovo.png",
      url: "https://www.lenovo.com/",
    },
    {
      name: "HP",
      logo: "/images/partners/hp.png",
      url: "https://www.hp.com/",
    },
    {
      name: "Dell",
      logo: "/images/partners/dell.png",
      url: "https://www.dell.com/",
    },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔷 Top Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/endpoints.jpg"
          alt="EUC and Server Solutions"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔶 Title */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        End User Computing and Server Solutions
      </motion.h2>

      {/* 📝 EUC Description */}
      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Intersect India Pvt Ltd offers robust desktop, laptop, and thin client infrastructure designed
  to empower hybrid workforces across corporate, SMB, and education sectors. Our EUC deployments
  are reliable, secure, and tailored to evolving digital workstyles.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  We support all major desktop categories — Mini Tower, Small Form Factor, Micro, and All-in-One
  designs — ideal for space-conscious environments. Devices are pre-configured with enterprise OS
  images, and can be customized with Intel or AMD processors, SSD/NVMe storage, and layered security.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.2}>
  Laptops range from ultralight business machines to rugged workhorses and performance-class
  mobile workstations, configured for your exact application needs, whether it’s business,
  creative, or technical workloads.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.4}>
  From VDI-ready thin clients to advanced notebooks, we handle imaging, encryption, zero-touch
  deployment, and post-sales AMC support to streamline your end-user lifecycle and IT management.
</motion.p>


      {/* 💻 EUC Grid */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={2.5}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        EUC Deployments
      </motion.h3>

        <div className="solutions-grid solution-detail-page">

        {endpointImages.map((img, idx) => (
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
            <img src={img} alt={`EUC ${idx + 1}`} />
            
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

      {/* 🖥️ Server Section */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3.5}
        style={{ fontSize: "1.8rem", marginTop: "60px" }}
      >
        Server Infrastructure
      </motion.h3>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={4}>
  Our server solutions span rack, tower, and blade formats, purpose-built for virtualization,
  storage, analytics, and compute-intensive workloads. Systems are engineered for high uptime,
  with redundant power, advanced cooling, and scalable configurations.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={4.5}>
  Whether you need single-socket tower servers for branch offices or multi-node rack units
  for datacenter operations, we deliver precision-aligned infrastructure with expert sizing,
  warranty support, and optimized cost-performance ratios.
</motion.p>


      {/* 🖥️ Server Grid */}
    
        <div className="solutions-grid solution-detail-page">

        {serverImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + idx * 0.2 }}
            onClick={() => setSelectedImage(img)}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`Server ${idx + 1}`} />
            
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

      {/* 🧩 Scrolling Partner Logos */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={5}
        style={{ fontSize: "1.8rem", marginTop: "60px", marginBottom: "20px" }}
      >
        Our Trusted Partners
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

export default Endpoints;
