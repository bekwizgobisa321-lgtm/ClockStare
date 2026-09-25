import { useState, useEffect } from 'react';
import backgrounds from '../data/backgrounds';

const ROTATE_INTERVAL_MS = 45000; // 45 seconds

function useThemeRotation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return backgrounds[index];
}

export default useThemeRotation;