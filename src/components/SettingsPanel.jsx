import './SettingsPanel.css';

function SettingsPanel({ focusMinutes, stareMinutes, onFocusChange, onStareChange }) {
  return (
    <div className="settings">
      <div className="setting">
        <label htmlFor="focus-mins">Focus</label>
        <input
          id="focus-mins"
          type="number"
          min="1"
          value={focusMinutes}
          onChange={(e) => onFocusChange(Number(e.target.value))}
        />
      </div>
      <div className="setting">
        <label htmlFor="stare-mins">Stare</label>
        <input
          id="stare-mins"
          type="number"
          min="1"
          value={stareMinutes}
          onChange={(e) => onStareChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default SettingsPanel;