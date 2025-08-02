import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Solutions.css";

const solutionList = [
  {
    title: "Structured Cabling Solutions",
    image: "/images/structured.jpg",
    path: "/solutions/structured-cabling",
  },
  {
    title: "Routing & Switching Solutions",
    image: "/images/routing.jpg",
    path: "/solutions/routing-switching",
  },
 
  {
  title: "Secured Wireless Networks",
  image: "/images/wireless.jpg",
  path: "/solutions/secured-wireless",  // ✅ must match App.js route
},

  {
    title: "Backhaul RF Connectivity",
    image: "/images/backhaul.jpg",
    path: "/solutions/backhaul-rf",
  },
 {
  title: "Network Gateway Security & SD-WAN",
  image: "/images/gateway-security.jpg",
  path: "/solutions/network-gateway-sdwan",  // ✅ Match App.js route exactly
},


  {
    title: "Video Conferencing & Interactive Smart Boards",
    image: "/images/video-conferencing.jpg",
    path: "/solutions/video-conferencing",
  },
  {
    title: "IP Surveillance",
    image: "/images/surveillance.jpg",
    path: "/solutions/ip-surveillance",
  },
  {
    title: "Storage",
    image: "/images/storage.jpg",
    path: "/solutions/storage",
  },
   {
    title: "End User Computing",
    image: "/images/desktops-laptops.jpg",
    path: "/solutions/endpoints",
  },
  {
  title: "System Security",
  image: "/images/system-sec.jpg", // 🔁 Optional: update to match the actual image name if changed
  path: "/solutions/system-security",   // ✅ Correct route path
},

  
];

const Solutions = () => {
  return (
    <div className="solutions-container">
      <h2 className="solutions-heading">Solutions</h2>
      <p className="solutions-subtext">
        Intersect India Pvt Ltd offers end-to-end network infrastructure, cybersecurity,
        and endpoint services with trusted partners using modern practices.
      </p>

      <div className="solutions-grid">
        {solutionList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            
            <Link to={item.path} className="solution-card shiny-hover">
  <img src={item.image} alt={item.title} />
  <div className="solution-title">{item.title}</div>
</Link>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
