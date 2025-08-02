import React from "react";
import { motion } from "framer-motion";
import "../../styles/Solutions.css"; // ✅ Important: Correct relative path

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const NetworkGatewaySDWAN = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const sdwanImages = [
    "/images/sdwan1.jpg",
    "/images/sdwan2.jpg",
    "/images/sdwan3.jpg",
  ];

  const securityImages = [
    "/images/security1.jpg",
    "/images/security2.jpg",
    "/images/security3.jpg",
  ];

  const partners = [
    { name: "Sophos", logo: "/images/partners/sophos.png", url: "https://www.sophos.com/" },
    { name: "Fortinet", logo: "/images/partners/fortinet.png", url: "https://www.fortinet.com/" },
    { name: "Palo Alto", logo: "/images/partners/paloalto.png", url: "https://www.paloaltonetworks.com/" },
    { name: "SonicWall", logo: "/images/partners/sonicwall.png", url: "https://www.sonicwall.com/" },
    { name: "Cisco", logo: "/images/partners/cisco.png", url: "https://www.cisco.com/" },
    { name: "AnexGate", logo: "/images/partners/anexgate.png", url: "https://www.anexgate.com//" },
     { name: "Sophos", logo: "/images/partners/sophos.png", url: "https://www.sophos.com/" },
    { name: "Fortinet", logo: "/images/partners/fortinet.png", url: "https://www.fortinet.com/" },
    { name: "Palo Alto", logo: "/images/partners/paloalto.png", url: "https://www.paloaltonetworks.com/" },
    { name: "SonicWall", logo: "/images/partners/sonicwall.png", url: "https://www.sonicwall.com/" },
    { name: "Cisco", logo: "/images/partners/cisco.png", url: "https://www.cisco.com/" },
    { name: "AnexGate", logo: "/images/partners/anexgate.png", url: "https://www.anexgate.com//" },
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔷 Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img src="/images/SD-WAN.jpg" alt="Banner" className="structured-banner" />
      </motion.div>

      {/* 🔷 Title */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Network Gateway Security & SD-WAN
      </motion.h2>

      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  A firewall acts as the digital boundary that protects internal networks from external threats. Positioned between the private network and the Internet, it inspects and filters incoming and outgoing traffic based on pre-defined security rules—ensuring that critical systems remain isolated from malicious activity.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  At Intersect India Pvt Ltd, we implement comprehensive network security solutions that secure both perimeter and endpoint layers. These systems help prevent unauthorized access, data breaches, and downtime — empowering organizations to remain resilient in the face of evolving threats.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  Our managed firewall solutions include real-time monitoring, expert configuration, and automated policy enforcement to eliminate human error and misconfiguration—two of the leading causes of cybersecurity breaches. These services are ideal for businesses looking to maintain security without in-house overhead.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  The Secure SD-WAN framework we deploy integrates seamlessly with firewalls and intrusion prevention systems to optimize connectivity while enforcing strict security policies across branch offices, cloud workloads, and data centers.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  We deliver these solutions in collaboration with globally trusted cybersecurity technology partners, ensuring proven protection, reduced risk, and scalable performance for all enterprise environments.
</motion.p>


      {/* 🔷 SD-WAN Gallery */}
      <motion.h3 className="solutions-heading" variants={fadeIn} custom={3} style={{ fontSize: "1.8rem", marginTop: "40px" }}>
        SD-WAN Views
      </motion.h3>

        <div className="solutions-grid solution-detail-page">

        {sdwanImages.map((img, idx) => (
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
            <img src={img} alt={`SD-WAN Example ${idx + 1}`} />
            
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

      {/* 🔷 Network Security Gallery */}
      <motion.h3 className="solutions-heading" variants={fadeIn} custom={4} style={{ fontSize: "1.8rem", marginTop: "40px" }}>
        Gateway Security Deployments
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
            <img src={img} alt={`Security ${idx + 1}`} />
           
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

      {/* 🔷 Partner Logos Scroller */}
      <motion.h3 className="solutions-heading" variants={fadeIn} custom={5} style={{ fontSize: "1.8rem", marginTop: "60px" }}>
        Our Trusted Partners
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

export default NetworkGatewaySDWAN;
