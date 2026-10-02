const ringSound = new Audio('/assets/Ring.mp3');

export function playRing() {
  ringSound.currentTime = 0;
  ringSound.play().catch(() => {
    // Browsers can block autoplay with no prior interaction — fail silently.
  });
}