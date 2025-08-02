
import React, { useState } from "react";

import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // Reuse your main styles

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const Wireless = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const wirelessImages = [
     "/images/wireless3.jpg",
    "/images/wireless1.jpg",
    
   
    "/images/wireless2.jpg",
  ];

  const partners = [
    {
      name: "Ruckus",
      logo: "/images/partners/ruckus.png",
      url: "https://www.ruckusnetworks.com/",
    },
    {
      name: "Aruba",
      logo: "/images/partners/aruba.png",
      url: "https://www.arubanetworks.com/",
    },
    {
      name: "Cisco",
      logo: "/images/partners/cisco.png",
      url: "https://www.cisco.com/",
    },
    {
      name: "Cambium",
      logo: "/images/partners/cambium.png",
      url: "https://www.cambiumnetworks.com/",
    },
    {
      name: "Quantum ",
      logo: "/images/partners/quantum.png",
      url: "https://www.quantum.com/",
    },
    
    {
      name: "D-Link",
      logo: "/images/partners/dlink.png",
      url: "https://www.dlink.com/",
    },
    {
      name: "Netgear",
      logo: "/images/partners/netgear.png",
      url: "https://www.netgear.com/",
    },
    {
      name: "Ubiquiti",
      logo: "/images/partners/ubiquiti.png",
      url: "https://www.ui.com/",
    },
    {
      name: "Ruckus",
      logo: "/images/partners/ruckus.png",
      url: "https://www.ruckusnetworks.com/",
    },
    {
      name: "Aruba",
      logo: "/images/partners/aruba.png",
      url: "https://www.arubanetworks.com/",
    },
    {
      name: "Cisco",
      logo: "/images/partners/cisco.png",
      url: "https://www.cisco.com/",
    },
    {
      name: "Cambium",
      logo: "/images/partners/cambium.png",
      url: "https://www.cambiumnetworks.com/",
    },
    {
      name: "Quantum ",
      logo: "/images/partners/quantum.png",
      url: "https://www.quantum.com/",
    },
    
    {
      name: "D-Link",
      logo: "/images/partners/dlink.png",
      url: "https://www.dlink.com/",
    },
    {
      name: "Netgear",
      logo: "/images/partners/netgear.png",
      url: "https://www.netgear.com/",
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
      {/* 🔷 Full-width Top Image */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/wireless.jpg"
          alt="Enterprise Wireless Network"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔶 Page Heading */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Secured Wireless Networks
      </motion.h2>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Intersect India Pvt Ltd implements secured, enterprise-grade wireless networks using controller-based solutions from D-link, Ruckus, Cisco, and Aruba, Netgear and others. Our Wi-Fi deployments are designed for scalability, speed, and encrypted access — enabling seamless connectivity for both employees and guests across large campuses and corporate environments.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  As organizations grow increasingly mobile, we design WLAN infrastructures that support laptops, smartphones, tablets, and IoT devices — all with seamless roaming and consistent signal quality. Our controller-based Wi-Fi networks provide centralized management, role-based access, and strong encryption to safeguard business data and user privacy.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  We understand the practical challenges of expanding or relocating wired infrastructure — especially in older buildings or high-density environments. Our wireless solutions eliminate the need for extensive cabling by using strategically placed access points (APs) that deliver high-speed, reliable coverage across floors and departments.
</motion.p>



<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  From Campus Wireless Distribution Systems (WDS) to guest-access VLANs and network segmentation, our deployments are engineered to support thousands of users with enterprise-grade reliability. Intersect’s secure wireless networking enables productivity, collaboration, and connectivity — without compromise.
</motion.p>


      {/* 🖼️ Image Grid */}
      <div className="solutions-grid solution-detail-page">

     
        {wirelessImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
             onClick={() => setSelectedImage(img)}
  style={{ cursor: "pointer" }}
          >
            <img src={img} alt={`Wireless Deployment ${idx + 1}`} />
            
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

      {/* 🔻 Partner Scrolling Section */}
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

export default Wireless;
