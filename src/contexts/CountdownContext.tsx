import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengeContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);
let CountdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //Retornará os minutos por inteiro
  const seconds = time % 60;

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
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  return (
    <CountdownContext.Provider value={{ minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown }}>
      {children}
    </CountdownContext.Provider>
  );
}
