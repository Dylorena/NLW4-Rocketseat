import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext)

  //PadStart - se a string não tiver 2 caracteres vai preencher a esquerda(start) com 0.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.Countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.CountdownButton}>
          Ciclo encerrado
        </button>
      ) : (
          isActive ? (
            <button type="button" onClick={resetCountdown} className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}>
              Abandonar ciclo
            </button>
          ) : (
              <button type="button" onClick={startCountdown} className={styles.CountdownButton}>
                Iniciar um ciclo
              </button>
            )
        )}
    </div>
  );
}