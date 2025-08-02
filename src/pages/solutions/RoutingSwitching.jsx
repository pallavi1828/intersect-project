
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

const RoutingSwitching = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const additionalImages = [
    "/images/routing1.jpg",
    "/images/routing2.jpg",
    "/images/routing3.jpg",
  ];

  const partners = [
    {
      name: "Cisco",
      logo: "/images/partners/cisco.png",
      url: "https://www.cisco.com/",
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
      name: "Allied Telesis",
      logo: "/images/partners/allied-telesis.png",
      url: "https://www.alliedtelesis.com/",
    },
    {
      name: "Cisco",
      logo: "/images/partners/cisco.png",
      url: "https://www.cisco.com/",
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
      name: "Allied Telesis",
      logo: "/images/partners/allied-telesis.png",
      url: "https://www.alliedtelesis.com/",
    },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔹 Top image */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/route.jpg"
          alt="Routing Infrastructure"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔸 Heading */}
<motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
  Routing & Switching Solutions
</motion.h2>

<motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  Whether you're running a large enterprise or managing a small branch office, deploying the right routing and switching infrastructure is critical to ensure fast, secure, and reliable data communication. Switches act as the central point of connectivity, enabling multiple devices to communicate across the network efficiently.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Intersect India Pvt Ltd implements end-to-end routing and switching solutions — from simple access layer switching to fully managed Layer 3 core routing. Our deployments are engineered to support high throughput, low latency, and intelligent traffic management across distributed networks.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  Our network designs support advanced features like VLAN segmentation, QoS prioritization, redundant uplinks, and real-time routing protocols to maximize performance, uptime, and scalability. This allows organizations to handle voice, video, and data convergence without bottlenecks or packet loss.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  From campus-wide LAN deployments to multi-site WAN architectures, we tailor every routing and switching solution to meet specific business needs — whether it's for enterprise-grade security, remote site integration, or rapid data center switching.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  Our solutions are delivered in collaboration with trusted technology partners known for their proven hardware reliability and software stability — ensuring long-term performance for mission-critical operations.
</motion.p>
<motion.p className="solutions-subtext" variants={fadeIn} custom={4}>
  We work alongside leading networking technology vendors to deliver enterprise-grade switching and routing solutions. Our partnerships ensure reliable infrastructure components that meet modern network demands — from core switching to branch-level routing. Trusted names include Cisco, D-Link, Netgear, and Allied Telesis.
</motion.p>


      {/* 🔸 Subheading */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        Enterprise Switching and Routing Deployments
      </motion.h3>

      {/* 🔸 Gallery */}
      <div className="solutions-grid solution-detail-page">

      
        {additionalImages.map((img, idx) => (
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
            <img src={img} alt={`Routing Example ${idx + 1}`} />
            
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

export default RoutingSwitching;
