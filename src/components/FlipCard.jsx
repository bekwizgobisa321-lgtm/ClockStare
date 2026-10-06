import './FlipCard.css';

function FlipCard({ value, label }) {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flip-card">
      <span key={display} className="flip-card-digits">
        {display}
      </span>
      <span className="flip-card-divider" />
      {label && <span className="flip-card-label">{label}</span>}
    </div>
  );
}

export default FlipCard;