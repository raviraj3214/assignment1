import React from 'react';
import styles from './sectionb.module.css';
import Image1 from '../assets/Images/image1.png';
import Image2 from '../assets/Images/image2.png';
import Image3 from '../assets/Images/image3.png';
import group3 from '../assets/Images/group.png';


const Sectionb = ({ features = defaultFeatures }) => {
  return (
    <div className={styles.capnoTrainerContainer}>
      <div className={styles.header}>
        <h2 className={styles.preTitle}>Experience the</h2>
        <h1 className={styles.mainTitle}>Power of CapnoTrainer® GO</h1>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <img
              src={feature.image}
              alt={feature.title}
              className={styles.featureImage}
            />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.decoration}>
        <img
          src= {group3}
          alt="Decorative element"
          className={styles.decorationImage}
        />
      </div>
    </div>
  );
};

const defaultFeatures = [
  {
    id: 1,
    image: Image1,
    title: 'See Your Breathing in Action',
    description:
      'Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Monitor Your Progress',
    description:
      'Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Receive Tailored Feedback',
    description:
      'Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.',
  },
];

export default Sectionb;
