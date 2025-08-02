import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/StatsSection.css';


const statsData = [
  { icon: "📦", label: "Successful Deployments", target: 400 },
  { icon: "🧑‍💻", label: "Network Specialists", target: 850 },
  { icon: "⏳", label: "Years of Experience", target: 11 },
  { icon: "🤝", label: "Customers", target: 1200 },
];


const StatCard = ({ icon, label, target }) => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
 
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView && count < target) {
      const timer = setInterval(() => {
        setCount(prev => {
          const increment = Math.ceil((target - prev) / 10);
          return prev + increment > target ? target : prev + increment;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, count, target]);

  const toggleActive = () => {
    setActive(!active);
    if (!active) setCount(0); // restart count on click
  };

  return (
    <motion.div
      ref={ref}
      className={`stat-card ${active ? 'active' : ''}`}
      onClick={toggleActive}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="icon">{icon}</div>
      <div className="number">{count}+ </div>
      <div className="label">{label}</div>
    </motion.div>
  );
};

const EvolutionStatsSection = () => {
  return (
    <div className="evolution-wrapper">
      <h2 className="evolution-heading">Announcing Our Evolution</h2>
      <p className="evolution-subheading">
        We have grown from a networking hardware reseller into a full-fledged technology solutions provider. Our rebranding reflects this journey — delivering cutting-edge innovation, seamless connectivity, and intelligent security.
We are now proudly known as Intersect India Private Limited, where we continue our mission of intersecting technology with trust and transformation.


      </p>

      <div className="stats-section">
        {statsData.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default EvolutionStatsSection;