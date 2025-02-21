import React from 'react';
import styles from './sectiona.module.css';
import device from '../assets/Images/device.png'

const Sectiona = ({
  title = "Transform Your Life with the Revolutionary CapnoTrainer® GO",
  subtitle = "Breathe Smarter, Live Better",
  description = "Breathing is more than just an unconscious action—it's a foundation of health, performance, and emotional well-being. But what if your breathing habits are silently holding you back? Enter the CapnoTrainer® GO, the groundbreaking tool that merges science, psychology, and technology to revolutionize your breathing habits and transform your life.",
  imageUrl = device
}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.gradientTopBar}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            {title}
          </h1>
          
          <h2 className={styles.subtitle}>
            {subtitle}
          </h2>
          
          <p className={styles.description}>
            {description}
          </p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.gradientCircle}></div>
          <img 
            src={imageUrl} 
            alt="CapnoTrainer GO Device" 
            className={styles.productImage}
          />
        </div>
      </div>

      <div className={styles.gradientBottom}>
        <div className={styles.tealBar}></div>
        <div className={styles.darkGradient}></div>
      </div>
    </div>
  );
};

export default Sectiona;
