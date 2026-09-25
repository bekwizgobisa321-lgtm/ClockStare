import './SessionHistory.css';

function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function SessionHistory({ sessions }) {
  return (
    <div className="session-history">
      <p className="session-count">
        {sessions.length} session{sessions.length === 1 ? '' : 's'} completed
      </p>

      {sessions.length > 0 && (
        <ul className="session-list">
          {sessions.map((session) => (
            <li key={session.id}>{formatTime(session.completedAt)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SessionHistory;