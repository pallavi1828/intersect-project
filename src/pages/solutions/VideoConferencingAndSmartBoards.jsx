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
    name: "Polycom",
    logo: "/images/partners/polycom.png",
    url: "https://www.hp.com/us-en/poly.html",
  },
  {
    name: "Panasonic",
    logo: "/images/partners/panasonic.png",
    url: "https://www.panasonic.com/in/",
  },
   {
    name: "Cisco",
    logo: "/images/partners/cisco.png",
    url: "https://www.cisco.com/in/",
  },
  {
    name: "Cybernetyx",
    logo: "/images/partners/cybernetyx.png",
    url: "https://www.cybernetyx.com/",
  },
  {
    name: "ViewSonic",
    logo: "/images/partners/viewsonic.png",
    url: "https://www.viewsonic.com/",
  },
  {
    name: "Vistar Logitek",
    logo: "/images/partners/vistar.png",
    url: "https://www.vistarlogitek.com/",
  },
  {
    name: "Polycom",
    logo: "/images/partners/polycom.png",
    url: "https://www.hp.com/us-en/poly.html",
  },
  {
    name: "Panasonic",
    logo: "/images/partners/panasonic.png",
    url: "https://www.panasonic.com/in/",
  },
   {
    name: "Cisco",
    logo: "/images/partners/cisco.png",
    url: "https://www.cisco.com/in/",
  },
  {
    name: "Cybernetyx",
    logo: "/images/partners/cybernetyx.png",
    url: "https://www.cybernetyx.com/",
  },
  {
    name: "ViewSonic",
    logo: "/images/partners/viewsonic.png",
    url: "https://www.viewsonic.com/",
  },
  {
    name: "Vistar Logitek",
    logo: "/images/partners/vistar.png",
    url: "https://www.vistarlogitek.com/",
  },
  
  {
    name: "Polycom",
    logo: "/images/partners/polycom.png",
    url: "https://www.hp.com/us-en/poly.html",
  },
  {
    name: "Panasonic",
    logo: "/images/partners/panasonic.png",
    url: "https://www.panasonic.com/in/",
  },
   {
    name: "Cisco",
    logo: "/images/partners/cisco.png",
    url: "https://www.cisco.com/in/",
  },
  {
    name: "Cybernetyx",
    logo: "/images/partners/cybernetyx.png",
    url: "https://www.cybernetyx.com/",
  },
  {
    name: "ViewSonic",
    logo: "/images/partners/viewsonic.png",
    url: "https://www.viewsonic.com/",
  },
  {
    name: "Vistar Logitek",
    logo: "/images/partners/vistar.png",
    url: "https://www.vistarlogitek.com/",
  },
  {
    name: "Polycom",
    logo: "/images/partners/polycom.png",
    url: "https://www.hp.com/us-en/poly.html",
  },
  {
    name: "Panasonic",
    logo: "/images/partners/panasonic.png",
    url: "https://www.panasonic.com/in/",
  },
   {
    name: "Cisco",
    logo: "/images/partners/cisco.png",
    url: "https://www.cisco.com/in/",
  },
  {
    name: "Cybernetyx",
    logo: "/images/partners/cybernetyx.png",
    url: "https://www.cybernetyx.com/",
  },
  {
    name: "ViewSonic",
    logo: "/images/partners/viewsonic.png",
    url: "https://www.viewsonic.com/",
  },
  {
    name: "Vistar Logitek",
    logo: "/images/partners/vistar.png",
    url: "https://www.vistarlogitek.com/",
  },
];

const VideoConferencing = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const vcImages = [
    "/images/video1.jpg",
    "/images/video2.jpg",
    "/images/video3.jpg",
  ];

  return (
    <motion.div
      className="solutions-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🔹 Full Width Banner */}
      <motion.div className="full-bleed-image" variants={fadeIn} custom={0}>
        <img
          src="/images/video-conferencing.jpg"
          alt="Video Conferencing & Smart Boards"
          className="structured-banner"
        />
      </motion.div>

      {/* 🔹 Page Heading */}
      <motion.h2 className="solutions-heading" variants={fadeIn} custom={1}>
        Video Conferencing and Interactive Smart Boards
      </motion.h2>

      {/* 🔹 Paragraphs */}
      <motion.p className="solutions-subtext" variants={fadeIn} custom={1.5}>
  With travel costs on the rise, organizations with multiple branches across regions are seeking smarter alternatives to in-person meetings. Video conferencing has emerged as a reliable and cost-effective solution, enabling real-time collaboration without the burden of physical travel.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2}>
  Intersect India Pvt Ltd implements robust Point-to-Point and Multi-Point video conferencing systems using industry-trusted hardware and platforms. These solutions offer seamless audio-visual communication, supporting face-to-face engagement across geographies.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={2.5}>
  We enhance these systems with modern Interactive Smart Boards that enable co-creation, brainstorming, and live digital annotations—making hybrid meetings as productive as in-room sessions. Our setups support wireless sharing, real-time document collaboration, and content-rich discussions.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3}>
  SMART Series boards and similar interactive displays offer an intuitive user interface, built-in controls, and support for multi-platform conferencing tools—ensuring teams can ideate, iterate, and drive outcomes with minimal learning curve.
</motion.p>

<motion.p className="solutions-subtext" variants={fadeIn} custom={3.5}>
  Designed for boardrooms, classrooms, and collaborative spaces, our integrated solutions bring people together—regardless of location—while reducing operational cost and increasing productivity.
</motion.p>

      {/* 🔹 Subheading */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={3}
        style={{ fontSize: "1.8rem", marginTop: "40px" }}
      >
        VC + Smart Board Setups
      </motion.h3>

      {/* 🔹 Image Grid */}
     <div className="solutions-grid solution-detail-page">

        {vcImages.map((img, idx) => (
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
            <img src={img} alt={`VC Setup ${idx + 1}`} />
            
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

      {/* 🔹 Scrolling Partners */}
      <motion.h3
        className="solutions-heading"
        variants={fadeIn}
        custom={4}
        style={{ fontSize: "1.6rem", marginTop: "60px" }}
      >
        Trusted OEM Partners
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

export default VideoConferencing;
