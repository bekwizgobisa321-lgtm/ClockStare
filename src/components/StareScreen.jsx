import { useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import Clock from './Clock';
import FullscreenButton from './FullscreenButton';
import './StareScreen.css';

function StareScreen({ durationMinutes = 5, onComplete }) {
  const { secondsLeft, start } = useTimer(durationMinutes * 60, onComplete);

  useEffect(() => {
    start();
  }, []);

  return (
    <div className="stare-screen">
      <FullscreenButton />

      <main className="stare-content">
        <Clock secondsLeft={secondsLeft} />
        <p className="instruction">
          Look away.
          <br />
          Put your phone down.
        </p>

        <div className="stare-why">
          <p className="stare-why-intro">
            Staring at a blank wall for {durationMinutes} minutes gives your
            brain a complete digital reset:
          </p>
          <ul className="stare-benefits">
            <li>
              <strong>Resets Your Dopamine Baseline:</strong> 
            </li>
            <li>
              <strong>Recharges with "Waking Rest":</strong> 
            </li>
            <li>
              <strong>Rebuilds Your Attention Span:</strong> 
            </li> 
          </ul>
        </div>
      </main>
    </div>
  );
}

export default StareScreen;