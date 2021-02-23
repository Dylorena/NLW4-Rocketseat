import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(23.2 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60); //Retornará os minutos por inteiro
  const seconds = time % 60;

  //PadStart - se a string não tiver 2 caracteres vai preencher a esquerda(start) com 0.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);

  }

  // o useEffect monitora algo
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time]); // Ele monitorará a mudança do active e do time

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
      <button type="button" onClick={startCountdown} className={styles.CountdownButton}>
        Iniciar um ciclo
      </button>
    </div>

  );
}