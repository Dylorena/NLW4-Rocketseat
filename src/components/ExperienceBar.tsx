import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  return (
    <header className={styles.experienceBar}>
      <span>0px</span>
      <div>
        <div style={{ width: `${currentExperience * 100 / experienceToNextLevel}%` }}></div>
        <span className={styles.currentExperience} style={{ left: `${currentExperience * 100 / experienceToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
}