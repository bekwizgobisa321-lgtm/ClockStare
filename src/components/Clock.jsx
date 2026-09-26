import './Clock.css';

function Clock({ secondsLeft }) {
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return (
      <p className="clock">
        {hours}:{paddedMinutes}:{paddedSeconds}
      </p>
    );
  }

  return (
    <p className="clock">
      {paddedMinutes}:{paddedSeconds}
    </p>
  );
}

export default Clock;