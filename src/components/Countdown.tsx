import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';

let CountdownTimeOut: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //Retornará os minutos por inteiro
  const seconds = time % 60;

  //PadStart - se a string não tiver 2 caracteres vai preencher a esquerda(start) com 0.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  // o useEffect monitora algo
  useEffect(() => {
    if (isActive && time > 0) {
      CountdownTimeOut = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); // Ele monitorará a mudança do active e do time

  function resetCountdown() {
    // É usado o clear para que o delay de 1 segundo não seja executado e de fato com o click do botão o time parar
    clearTimeout(CountdownTimeOut);
    setIsActive(false);
    setTime(25 * 60);
  }

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