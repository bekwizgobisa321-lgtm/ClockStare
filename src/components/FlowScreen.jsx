import useTimer from '../hooks/useTimer';
import FlipCard from './FlipCard';
import FullscreenButton from './FullscreenButton';
import Brand from './Brand';
import './FlowScreen.css';

function FlowScreen({ durationMinutes = 25, onComplete, onBack }) {
  const { secondsLeft, isRunning, start, pause } = useTimer(
    durationMinutes * 60,
    onComplete
  );

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  function handleClick() {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }

  return (
    <div className="flow-screen-wrapper">
      <Brand />
      <FullscreenButton />

      <button className="flow-back-btn" onClick={onBack} aria-label="Back to Focus">
        ← Back
      </button>

      <main className="flow-screen">
        <div className="flip-group">
          <FlipCard value={minutes} label="MIN" />
          <span className="flip-colon">:</span>
          <FlipCard value={seconds} label="SEC" />
        </div>

        <button className="start-btn" onClick={handleClick}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </main>
    </div>
  );
}

export default FlowScreen;