import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import styles from './Sectionc.module.css';
import exercise from '../assets/Images/exercise.jpg';
import legexercise from '../assets/Images/legexercise.jpg';
import yoga from '../assets/Images/yoga.jpg';
import skeleton from '../assets/Images/skeleton.jpg';

const CapnoTrainerFeatures = ({ features = defaultFeatures }) => {
  return (
    <motion.div 
      className={styles.capnoTrainerContainer}
      initial={{ opacity: 0, y: 50 }} // Start invisible and lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
    >
      <h1 className={styles.mainTitle}>What Can the CapnoTrainer®GO Do for You?</h1>
      
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div 
            key={feature.id} 
            className={styles.featureCard}
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered appearance
            viewport={{ once: true }}
          >
            <div className={styles.imageContainer}>
              <motion.img 
                src={feature.image} 
                alt={feature.title} 
                whileHover={{ scale: 1.1 }} // Zoom effect
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const defaultFeatures = [
  {
    id: 1,
    image: yoga,
    title: 'Eliminate Stress and Anxiety',
    description: 'Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations.'
  },
  {
    id: 2,
    image: skeleton,
    title: 'Enhance Mental Clarity and Focus',
    description: 'Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.'
  },
  {
    id: 3,
    image: legexercise,
    title: 'Achieve Peak Performance',
    description: "Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath."
  },
  {
    id: 4,
    image: exercise,
    title: 'Improve Physical Health',
    description: 'Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.'
  }
];

export default CapnoTrainerFeatures;
