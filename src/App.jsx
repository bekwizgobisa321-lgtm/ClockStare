import { useState } from 'react';
import FocusScreen from './components/FocusScreen';
import StareScreen from './components/StareScreen';
import './App.css';

function App() {
  const [mode, setMode] = useState('focus');

  function handleFocusComplete() {
    setMode('stare');
  }

  function handleStareComplete() {
    setMode('focus');
  }

  return (
    <div className="app">
      {mode === 'focus' && (
        <FocusScreen durationMinutes={25} onComplete={handleFocusComplete} />
      )}
      {mode === 'stare' && (
        <StareScreen durationMinutes={5} onComplete={handleStareComplete} />
      )}
    </div>
  );
}

export default App;