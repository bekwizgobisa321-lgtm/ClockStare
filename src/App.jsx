import { useState } from 'react';
import FocusScreen from './components/FocusScreen';
import StareScreen from './components/StareScreen';
import useSessions from './hooks/useSessions';
import { playRing } from './utils/sound';
import './App.css';

function App() {
  const [mode, setMode] = useState('focus');
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [stareMinutes, setStareMinutes] = useState(5);
  const { sessions, addSession } = useSessions();

  function handleFocusComplete() {
    addSession();
    playRing();
    setMode('stare');
  }

  function handleStareComplete() {
    playRing();
    setMode('focus');
  }

  function handleStareNow() {
    setMode('stare');
  }

  return (
    <div className="app">
      {mode === 'focus' && (
        <FocusScreen
          durationMinutes={focusMinutes}
          stareMinutes={stareMinutes}
          onFocusMinutesChange={setFocusMinutes}
          onStareMinutesChange={setStareMinutes}
          onComplete={handleFocusComplete}
          onStareNow={handleStareNow}
          sessions={sessions}
        />
      )}
      {mode === 'stare' && (
        <StareScreen durationMinutes={stareMinutes} onComplete={handleStareComplete} />
      )}
    </div>
  );
}

export default App;