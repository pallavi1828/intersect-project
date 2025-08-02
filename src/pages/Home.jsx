import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EvolutionStatsSection from './EvolutionStatsSection';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Modal state for zooming image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline-item");
      items.forEach((item, index) => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setTimeout(() => {
            item.classList.add("show");
          }, index * 150);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔁 Video Carousel Section */}
      <section className="home-header">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          stopOnHover={false}
          swipeable
        >
          {["video1", "video2", "video3"].map((name, index) => (
            <div key={index}>
              <video
                className="carousel-video"
                src={`videos/${name}.mp4`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="hero" ref={ref}>
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Welcome to Intersect India Private Limited
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Intersect India Private Limited began its journey in 2014 as a small team passionate about solving complex networking challenges. Today, we are a leading provider of innovative networking and cybersecurity solutions in India, offering everything from wired/wireless networking and firewall setup to advanced threat protection and incident response services.
        </motion.p>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          We offer a wide range of IT services including cloud solutions (IaaS, PaaS, SaaS), data backup, disaster recovery, software development, application maintenance, and digital transformation. Our modern data centers and expert support help businesses stay secure, efficient, and future-ready.
        </motion.p>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Our physical security and context-based safety solutions include access control systems, real-time threat detection, emergency response systems, intelligent safety analytics, and environmental monitoring. We integrate technology and data to create safer environments for people and infrastructure.
        </motion.p>
      </section>

      <div className="hero-images">
        <motion.img
          src="\images\tech1.jpg"
          alt="Cybersecurity"
          className="hero-img"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="\images\tech2.jpeg"
          alt="Network Infrastructure"
          className="hero-img"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="hero-description">
        <p>
          Intersect India serves a wide network of clients including government departments, universities, engineering colleges, cooperative banks, and large private companies. Our long-standing partnerships reflect our reputation for delivering reliable, high-quality technology solutions across multiple sectors.
        </p>
      </div>

      {/* 🌐 Our Solutions Section */}
      <h2 className="solutions-heading">Our Solutions</h2> 
       <motion.p
          className="hero-subb"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
           We combine domain expertise, knowledge of operations and insights into new emerging technologies to offer a gamut of end-to-end solutions. Our IT solutions help clients to enhance the digital experience and improve operational excellence.
        </motion.p>
        <div className="service-grid">
          {[
            { img: "/images/government-sector.jpg", title: "Government Sector" },
            { img: "/images/corporate-sector.jpg", title: "Corporate Sector" },
            { img: "/images/education-sector.jpg", title: "Education Sector" },
            { img: "/images/bank-sector.jpg", title: "Bank Sector" },
            { img: "/images/manufacture.jpg", title: "Manufacture Sector" },
            { img: "/images/health-sector.jpg", title: "Health Sector" },
            { img: "/images/hospitality-sector.jpg", title: "Hospitality Sector" },
            { img: "/images/research-sector.jpg", title: "Research And Sector" }
          ].map((sector, index) => (
            <motion.div
              key={index}
              className="service-card"
              onClick={() => openImageModal(sector.img)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ cursor: "pointer" }}
            >
              <img src={sector.img} alt={sector.title} className="service-img" />
              <h3>{sector.title}</h3>
            </motion.div>
          ))}
        </div>

      <EvolutionStatsSection />

      <section className="feature-section new-work-section">
        <h2 className="feature-title">WHAT WE WORK ON</h2>
        <p className="feature-subtext">
          At Intersect India <strong>Private Limited</strong>, we deliver meaningful solutions that connect businesses, empower collaboration, and drive innovation.
        </p>
        <div className="timeline">
          {[
            {
              icon: "🧪",
              text: "Network Services",
              desc: "The network provides intelligent application-based routing, sophisticated management and control and unprecedented network performance."
            },
            {
              icon: "💡",
              text: "Cloud Contact Center",
              desc: "Improve customer interactions with highly scalable cloud contact center solutions"
            },
            {
              icon: "📞",
              text: "Conferencing & Collaboration",
              desc: "Solutions enhance enterprise audio, video & web interactions for greater productivity at lower cost."
            },
            {
              icon: "📡",
              text: "Hosted Voice & Networks",
              desc: "Flexible unified communications and network solutions backed by resiliency, security, and support."
            },
            {
              icon: "🔧",
              text: "Simple Support",
              desc: "Intersect provides great support from installation to updates – tailored to customer needs."
            },
            {
              icon: "⚙️",
              text: "Simple Installation",
              desc: "We ensure easy-to-follow installation support and documentation for customers."
            }
          ].map((item, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-content">
                <div className="timeline-icon">{item.icon}</div>
                <h4>{item.text} <br /> {item.desc}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="leadership">
        <h2>Driven by Visionary Leadership</h2>
        <p>Ranked among the top IT service providers in India, we champion innovation, integrity, and excellence.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DeuRPJORMUM?si=7NAKlOGRBhkp5g9Z"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* 🖼 Modal Viewer */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" className="modal-image" />
            <button className="close-button" onClick={closeImageModal}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
