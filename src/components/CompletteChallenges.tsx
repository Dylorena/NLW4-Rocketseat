import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletteChallenge.module.css';

export function CompletteChallenge() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completteChallenge}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}