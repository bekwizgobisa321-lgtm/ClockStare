import useTimer from '../hooks/useTimer';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import BackgroundRotator from './BackgroundRotator';
import './FocusScreen.css';

function FocusScreen({
  durationMinutes = 25,
  stareMinutes,
  onFocusMinutesChange,
  onStareMinutesChange,
  onComplete,
}) {
  const { secondsLeft, isRunning, start, pause } = useTimer(
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

  return (
    <BackgroundRotator>
      <main className="focus-screen">
        <Clock secondsLeft={secondsLeft} />
        <button className="start-btn" onClick={handleClick}>
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <hr className="divider" />

        <SettingsPanel
          focusMinutes={durationMinutes}
          stareMinutes={stareMinutes}
          onFocusChange={onFocusMinutesChange}
          onStareChange={onStareMinutesChange}
        />
      </main>
    </BackgroundRotator>
  );
}

export default FocusScreen;