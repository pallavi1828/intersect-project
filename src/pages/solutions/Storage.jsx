import React, { useState } from "react";

import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // Use existing layout + card styles

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
    name: "QNAP",
    logo: "/images/partners/qnap.png",
    url: "https://www.qnap.com/",
  },
  {
    name: "Synology",
    logo: "/images/partners/synology.png",
    url: "https://www.synology.com/",
  },
  {
    name: "Netgear",
    logo: "/images/partners/netgear.png",
    url: "https://www.netgear.com/",
  },
   {
    name: "QNAP",
    logo: "/images/partners/qnap.png",
    url: "https://www.qnap.com/",
  },
  {
    name: "Synology",
    logo: "/images/partners/synology.png",
    url: "https://www.synology.com/",
  },
  {
    name: "Netgear",
    logo: "/images/partners/netgear.png",
    url: "https://www.netgear.com/",
  },
  {
    name: "QNAP",
    logo: "/images/partners/qnap.png",
    url: "https://www.qnap.com/",
  },
  {
    name: "Synology",
    logo: "/images/partners/synology.png",
    url: "https://www.synology.com/",
  },
  {
    name: "Netgear",
    logo: "/images/partners/netgear.png",
    url: "https://www.netgear.com/",
  },
  {
    name: "QNAP",
    logo: "/images/partners/qnap.png",
    url: "https://www.qnap.com/",
  },
  {
    name: "Synology",
    logo: "/images/partners/synology.png",
    url: "https://www.synology.com/",
  },
  {
    name: "Netgear",
    logo: "/images/partners/netgear.png",
    url: "https://www.netgear.com/",
  },
];

const Storage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const storageImages = [
    "/images/storage1.jpg",
    "/images/storage2.jpg",
    "/images/storage3.jpg",
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 📦 Full-width Top Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/storage.jpg"
          alt="Enterprise Storage Solutions"
          className="structured-banner"
        />
      </motion.div>

      {/* 📦 Title */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Storage Solutions
      </motion.h2>

      {/* 📦 Description */}
      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  In the modern enterprise landscape, organizations require storage solutions that are secure, scalable, and high-performing. Intersect India Pvt Ltd addresses these needs with robust implementations of NAS, SAN, and hybrid cloud storage systems tailored to mission-critical workloads.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Network Attached Storage (NAS) provides centralized file sharing and backup for remote access, while Storage Area Networks (SAN) offer high-speed connectivity for block-level data access across enterprise-grade networks. We design unified architectures combining both where needed.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  Our storage deployments include integrated RAID protection, logical data pools, tiered backups, and support for VM image hosting, enabling seamless access to local and cloud-hosted storage while ensuring performance and redundancy.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  Whether for real-time operations, archival, backup, or disaster recovery, we implement end-to-end data storage stacks with deduplication, compression, and encrypted replication for business continuity.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  We partner with trusted OEMs to deliver smart storage appliances that integrate seamlessly with your IT environment — scaling on demand as your enterprise data grows.
</motion.p>

      {/* 📦 Subheading */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        Storage Implementations
      </motion.h3>

      {/* 📦 Image Grid */}
     <div className="solutions-grid solution-detail-page">

        {storageImages.map((img, idx) => (
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
            <img src={img} alt={`Storage Deployment ${idx + 1}`} />
      
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

      {/* 📦 Partner Logos Scrolling */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={4}
        style={{ fontSize: "1.6rem", marginTop: "60px" }}
      >
        Trusted Storage Partners
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

export default Storage;
