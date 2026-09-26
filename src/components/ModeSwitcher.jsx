import './ModeSwitcher.css';

function ModeSwitcher({ onStareNow }) {
  return (
    <div className="mode-switcher">
      <span className="mode-pill mode-pill-active">Focus</span>
      <button className="mode-pill mode-pill-outline" onClick={onStareNow}>
        Stare Wall
      </button>
    </div>
  );
}

export default ModeSwitcher;