import useTimer from "../hooks/useTimer";
import Clock from "./Clock";
import "./FocusScreen.css";

function FocusScreen({ durationMinutes = 25, onComplete }) {
  const { secondsLeft, isRunning, start, pause } = useTimer(
    durationMinutes * 60,
    onComplete,
  );
  // Will render: BackgroundRotator, Clock, Start button, SettingsPanel
  function handleClick() {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }
  return (
    <main className="focus-screen">
      <Clock secondsLeft={secondsLeft} />
      <button className="start-btn" onClick={handleClick}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </main>
  );
}

export default FocusScreen;
