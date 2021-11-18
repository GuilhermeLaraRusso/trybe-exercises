import { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const MIN = 1;
  const MAX = 100;
  const ONE_SECOND = 1000;
  const REMAINDER_TEN = 10;

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTimer = timer + 1;
      const mod10 = newTimer > 0 && newTimer % REMAINDER_TEN;

      // Nos múltiplos de 10 do timer, um novo número aleatório é gerado
      if (mod10 === 0) {
        setRandomNumber(Math.round(Math.random() * (MAX - MIN) + MIN));
      }

      setTimer(newTimer);
    }, ONE_SECOND);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  const REMAINDER_THREE = 3;
  const REMAINDER_FIVE = 5;
  const FOUR_SECONDS = 4000;
  const isMultiple = randomNumber
    && (randomNumber % REMAINDER_THREE === 0 || randomNumber % REMAINDER_FIVE === 0);

  useEffect(() => {
    if (isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, FOUR_SECONDS);
    };
  }, [randomNumber, isMultiple]);

  return {
    timer,
    randomNumber,
    isMultiple,
  };
};

export default useTimer;
