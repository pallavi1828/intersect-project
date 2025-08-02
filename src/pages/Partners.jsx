// Partners.jsx
import React, { useState, useEffect } from "react";

import "../styles/Partners.css";

import { motion, AnimatePresence } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};
const partners = [
  // 🔹 Priority 15
  { name: "Cisco", logo: "/images/partners/cisco.png", url: "https://www.cisco.com" },
  { name: "Sophos", logo: "/images/partners/sophos.png", url: "https://www.sophos.com" },
  { name: "Ruckus", logo: "/images/partners/ruckus.png", url: "https://www.ruckusnetworks.com" },
  { name: "Aruba", logo: "/images/partners/aruba.png", url: "https://www.arubanetworks.com" },
  { name: "D-Link", logo: "/images/partners/dlink.png", url: "https://www.dlink.com" },
  { name: "Netgear", logo: "/images/partners/netgear.png", url: "https://www.netgear.com" },
  { name: "Cambium Networks", logo: "/images/partners/cambium.png", url: "https://www.cambiumnetworks.com" },
  { name: "Quantum", logo: "/images/partners/quantum.png", url: "https://www.quantum.com" },
  { name: "Fortinet", logo: "/images/partners/fortinet.png", url: "https://www.fortinet.com" },
  { name: "Palo Alto", logo: "/images/partners/paloalto.png", url: "https://www.paloaltonetworks.com" },
  { name: "Anexgate", logo: "/images/partners/anexgate.png", url: "https://www.anexgate.com" },
  { name: "Ubiquiti", logo: "/images/partners/ubiquiti.png", url: "https://www.ui.com" },
  { name: "Molex", logo: "/images/partners/molex.png", url: "https://www.molex.com" },
  { name: "CommScope", logo: "/images/partners/commscope.png", url: "https://www.commscope.com" },
  { name: "Radwin", logo: "/images/partners/radwin.png", url: "https://www.radwin.com" },

  // 🔹 Recently used in solution pages
  { name: "Polycom", logo: "/images/partners/polycom.png", url: "https://www.poly.com" },
  { name: "Panasonic", logo: "/images/partners/panasonic.png", url: "https://www.panasonic.com" },
  { name: "Cybernetyx", logo: "/images/partners/cybernetyx.png", url: "https://www.cybernetyx.com" },
  { name: "ViewSonic", logo: "/images/partners/viewsonic.png", url: "https://www.viewsonic.com" },
  { name: "Lifesize", logo: "/images/partners/lifesize.png", url: "https://www.lifesize.com" },
  { name: "CP Plus", logo: "/images/partners/cpplus.png", url: "https://www.cpplusworld.com" },
  { name: "Dahua", logo: "/images/partners/dahua.png", url: "https://www.dahuatech.com" },
  { name: "UNV", logo: "/images/partners/unv.png", url: "https://www.uniview.com" },
  { name: "Bosch", logo: "/images/partners/bosch.png", url: "https://www.boschsecurity.com" },
  { name: "Honeywell", logo: "/images/partners/honeywell.png", url: "https://www.honeywell.com" },
  { name: "Axis Communications", logo: "/images/partners/axis.png", url: "https://www.axis.com" },
  { name: "Vivotek", logo: "/images/partners/vivotek.png", url: "https://www.vivotek.com" },
  { name: "QNAP", logo: "/images/partners/qnap.png", url: "https://www.qnap.com" },
  { name: "Synology", logo: "/images/partners/synology.png", url: "https://www.synology.com" },
  { name: "Acer", logo: "/images/partners/acer.png", url: "https://www.acer.com" },
  { name: "Lenovo", logo: "/images/partners/lenovo.png", url: "https://www.lenovo.com" },
  { name: "HP", logo: "/images/partners/hp.png", url: "https://www.hp.com" },
  { name: "Dell", logo: "/images/partners/dell.png", url: "https://www.dell.com" },
  { name: "McAfee", logo: "/images/partners/mcafee.png", url: "https://www.mcafee.com" },
  { name: "CrowdStrike", logo: "/images/partners/crowdstrike.png", url: "https://www.crowdstrike.com" },
  { name: "Trend Micro", logo: "/images/partners/trendmicro.png", url: "https://www.trendmicro.com" },
  { name: "Kaspersky", logo: "/images/partners/kaspersky.png", url: "https://www.kaspersky.com" },
  { name: "SEQRITE", logo: "/images/partners/seqrite.png", url: "https://www.seqrite.com" },
];
const Partners = () => {
  const [page, setPage] = useState(1);
  const perPage = 21;
   // ✅ ADD THIS BLOCK RIGHT HERE
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
<div className="partners-grid">
  {partners.map((p, index) => (
    <motion.a
      href={p.url}
      key={index}
      className="partner-card"
      target="_blank"
      rel="noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={fadeInUp}
    >
      <img src={p.logo} alt={p.name} />
      <span>{p.name}</span>
    </motion.a>
  ))}
</div>


 

  const totalPages = Math.ceil(partners.length / perPage);
  const current = partners.slice((page - 1) * perPage, page * perPage);
  

 return (
  <div className="partners-wrapper">
    <img
      src="\images\partners\parnter-banner.jpg"
      alt="Partners Banner"
      className="partner-banner"
    />

    <h2 className="partners-heading">Our Technology & Infrastructure Partners</h2>
    <p className="partners-subtext">
      We work with world-class  tech providers to deliver robust, scalable, and cutting-edge digital solutions.
    </p>

     <AnimatePresence mode="wait">
  <motion.div
    key={page} // ✅ triggers remount on page change
    className="partners-grid"
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
    }}
  >
    {current.map((p, i) => (
      <motion.a
        key={p.name}
        href={p.url}
        className="partner-card"
        target="_blank"
        rel="noreferrer"
        custom={i}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeInUp}
      >
        <img src={p.logo} alt={p.name} loading="lazy" />
        <span>{p.name}</span>
      </motion.a>
    ))}
  </motion.div>
</AnimatePresence>


      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};



export default Partners;
