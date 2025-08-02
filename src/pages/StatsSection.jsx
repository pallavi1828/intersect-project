import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/StatsSection.css';

const statsData = [
  { icon: "📅", label: "Years of Service", target: 25 },
  { icon: "👨‍💻", label: "Skilled Engineers", target: 800 },
  { icon: "🤝", label: "Global Partners", target: 60 },
  { icon: "🌍", label: "Clients Worldwide", target: 1500 },
];

const StatCard = ({ icon, label, target }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    let interval = null;

    if (inView) {
      let current = 0;
      interval = setInterval(() => {
        current += Math.ceil(target / 40);
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCount(current);
      }, 40);
    } else {
      setCount(0); // Reset when out of view
    }

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="icon">{icon}</div>
      <div className="number">{count >= target ? `${target}+` : count}</div>
      <div className="label">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => (
  <div className="stats-section">
    {statsData.map((item, index) => (
      <StatCard key={index} {...item} />
    ))}
  </div>
);

export default StatsSection;
