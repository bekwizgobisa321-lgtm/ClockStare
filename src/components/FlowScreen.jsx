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

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;
  const showHours = hours > 0;

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
          {showHours && (
            <>
              <FlipCard value={hours} label="HR" />
              <span className="flip-colon">:</span>
            </>
          )}
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