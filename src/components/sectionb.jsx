import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "./sectionb.module.css";
import Image1 from "../assets/Images/image1.png";
import Image2 from "../assets/Images/image2.png";
import Image3 from "../assets/Images/image3.png";
import group3 from "../assets/Images/group.png";

const Sectionb = ({ features = defaultFeatures }) => {
  return (
    <motion.div 
      className={styles.capnoTrainerContainer}
      initial={{ opacity: 0, y: 50 }} // Starts invisible and below
      whileInView={{ opacity: 1, y: 0 }} // Moves up and becomes visible
      transition={{ duration: 1.4, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Triggers only once when 20% is visible
    >
      <div className={styles.header}>
        <h2 className={styles.preTitle}>Experience the</h2>
        <h1 className={styles.mainTitle}>Power of CapnoTrainer® GO</h1>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div 
            key={feature.id} 
            className={styles.featureCard}
            initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Grow and appear
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
            viewport={{ once: true }}
          >
            <motion.img
                 src={feature.image}
                alt={feature.title}
                className={styles.featureImage}
                whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} 
              />

            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.decoration}
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={group3}
          alt="Decorative element"
          className={styles.decorationImage}
        />
      </motion.div>
    </motion.div>
  );
};

const defaultFeatures = [
  {
    id: 1,
    image: Image1,
    title: "See Your Breathing in Action",
    description:
      "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
  },
  {
    id: 2,
    image: Image2,
    title: "Monitor Your Progress",
    description:
      "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
  },
  {
    id: 3,
    image: Image3,
    title: "Receive Tailored Feedback",
    description:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
  },
];

export default Sectionb;
