import { useState, useEffect } from 'react';

const STORAGE_KEY = 'clockstare-sessions';

function useSessions() {
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  function addSession() {
    const newSession = {
      id: Date.now(),
      completedAt: new Date().toISOString(),
    };
    setSessions((prev) => [newSession, ...prev]);
  }

  return { sessions, addSession };
}

export default useSessions;