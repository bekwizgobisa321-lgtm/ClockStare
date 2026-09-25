import { useState } from 'react';
import FocusScreen from './components/FocusScreen';
import StareScreen from './components/StareScreen';
import useSessions from './hooks/useSessions';
import './App.css';

function App() {
  const [mode, setMode] = useState('focus');
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [stareMinutes, setStareMinutes] = useState(5);
  const { sessions, addSession } = useSessions();

  function handleFocusComplete() {
    addSession();
    setMode('stare');
  }

  function handleStareComplete() {
    setMode('focus');
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