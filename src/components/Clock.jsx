import './Clock.css';

function Clock({ secondsLeft }) {

  // Will display the countdown digits
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return (
    <p className="clock">
      {paddedMinutes}:{paddedSeconds}
    </p>
  );
}

export default Clock;
