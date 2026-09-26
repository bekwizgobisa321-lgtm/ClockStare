import useTimer from '../hooks/useTimer';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionHistory from './SessionHistory';
import BackgroundRotator from './BackgroundRotator';
import './FocusScreen.css';

function FocusScreen({
  durationMinutes = 25,
  stareMinutes,
  onFocusMinutesChange,
  onStareMinutesChange,
  onComplete,
  sessions,
}) {
  const { secondsLeft, isRunning, start, pause, reset } = useTimer(
    durationMinutes * 60,
    onComplete
  );

  function handleClick() {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }

  function handleReset() {
    reset(durationMinutes * 60);
  }

  return (
    <BackgroundRotator>
      <main className="focus-screen">
        <Clock secondsLeft={secondsLeft} />

        <div className="button-row">
          <button className="start-btn" onClick={handleClick}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            className="reset-btn"
            onClick={handleReset}
            aria-label="Reset timer"
          >
            ↻
          </button>
        </div>

        <hr className="divider" />

        <SettingsPanel
          focusMinutes={durationMinutes}
          stareMinutes={stareMinutes}
          onFocusChange={onFocusMinutesChange}
          onStareChange={onStareMinutesChange}
        />

        <SessionHistory sessions={sessions} />
      </main>
    </BackgroundRotator>
  );
}

export default FocusScreen;