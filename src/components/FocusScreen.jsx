import useTimer from '../hooks/useTimer';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionHistory from './SessionHistory';
import BackgroundRotator from './BackgroundRotator';
import ModeSwitcher from './ModeSwitcher';
import FullscreenButton from './FullscreenButton';
import Brand from './Brand';
import './FocusScreen.css';

function FocusScreen({
  durationMinutes = 25,
  stareMinutes,
  onFocusMinutesChange,
  onStareMinutesChange,
  onComplete,
  onStareNow,
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
      <Brand />
      <FullscreenButton />

      <main className="focus-screen">
        <ModeSwitcher onStareNow={onStareNow} />

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