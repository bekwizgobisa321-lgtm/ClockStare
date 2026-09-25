import { useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import Clock from './Clock';
import './StareScreen.css';

function StareScreen({ durationMinutes = 5, onComplete }) {
  const { secondsLeft, start } = useTimer(durationMinutes * 60, onComplete);

  useEffect(() => {
    start();
  }, []);

  return (
    <main className="stare-screen">
      <Clock secondsLeft={secondsLeft} />
      <p className="instruction">
        Look away.
        <br />
        Put your phone down.
      </p>
    </main>
  );
}

export default StareScreen;