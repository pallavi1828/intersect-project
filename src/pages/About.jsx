import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const About = () => {
  const storyLines = [
  "Founded in 2014 as Intersect Technologies, we began our journey with a vision to empower digital transformation across India. In 2021, we rebranded as Intersect India Private Limited and officially incorporated in 2022.",
  "We started as a reseller of networking hardware and software, evolving into a full-service IT infrastructure provider with a certified cybersecurity team and a state-of-the-art Network Operations Center (NOC).",
  "Today, we proudly serve the Government, Corporate, Education, Banking, Manufacturing, Healthcare, Hospitality, and Research & Development sectors."
];


  const bubbleData = [
    { title: "Since 2014", desc: "Legacy of excellence\nIncorporated in 2022" },
    { title: "24x7 NOC", desc: "Real-time monitoring &\nincident response" },
    { title: "Cybersecurity Leadership", desc: "Advanced threat protection\n& compliance" },
    { title: "Cloud & Infrastructure", desc: "Hybrid cloud, data centers,\nnetwork design" },
    { title: "Pan-India Presence", desc: "Offices in Bengaluru,\nHyderabad & more" },
    { title: "Government & Education", desc: "Trusted by Zilla Panchayats,\nUniversities, & more" },
    { title: "Disaster Recovery", desc: "DRaaS, off-site, on-site &\ncloud-based solutions" },
    { title: "Customer-Centric", desc: "Long-term partnerships &\nenterprise-first delivery" },
  ];

  return (
    <motion.div
      className="about-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      {/* 🔶 Video Banner */}
      <motion.div className="about-banner-video" variants={fadeInUp}>
        <video
          src="/videos/about-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="about-video"
        />
      </motion.div>

      {/* 🔷 Introduction Section */}
      <motion.div className="about-intro" variants={fadeInUp}>
        <div className="about-intro-left">
          <img src="/images/about-network.jpg" alt="Intersect Infra" />
        </div>
        <div className="about-intro-right">
          <motion.h2 custom={0} variants={fadeInUp}>
            Intersect India Private Limited
          </motion.h2>
          <motion.p custom={1} variants={fadeInUp}>
            Headquartered in Bengaluru, Intersect India Pvt Ltd is a nationally recognized system integrator delivering scalable, secure, and future-ready IT solutions.
          </motion.p>
          <motion.p custom={2} variants={fadeInUp}>
            Our offerings span networking (LAN, WAN, WiFi), structured cabling, cybersecurity, cloud services, disaster recovery, IT support, and physical security solutions.
          </motion.p>
          <motion.p custom={3} variants={fadeInUp}>
            We have made a strong impact across various sectors including Government, Education, Corporate, Banking, Manufacturing, Healthcare, Hospitality, and Research & Development.
          </motion.p>
        </div>
      </motion.div>

      {/* 🧾 Our Story Section */}
      <motion.div className="about-story" variants={fadeInUp}>
        <h3>Our Story</h3>
        {storyLines.map((line, i) => (
          <motion.p key={i} custom={i} variants={fadeInUp}>
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* 🔵 Key Highlights Bubble Section */}
      <section className="bubble-network-section">
        <h2 className="network-title">Key Highlights</h2>
        <div className="bubble-network">
          {bubbleData.map((item, i) => (
            <motion.div
              key={i}
              className="bubble-node"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span className="connector" />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
