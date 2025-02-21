import React from 'react';
import styles from './Sectionc.module.css';
import exercise from '../assets/Images/exercise.jpg'
import legexercise from '../assets/Images/legexercise.jpg'
import yoga from '../assets/Images/yoga.jpg'
import skeleton from '../assets/Images/skeleton.jpg'
const CapnoTrainerFeatures = ({ features = defaultFeatures }) => {
  return (
    <div className={styles.capnoTrainerContainer}>
      <h1 className={styles.mainTitle}>What Can the CapnoTrainer®GO Do for You?</h1>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.imageContainer}>
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className={styles.contentContainer}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
