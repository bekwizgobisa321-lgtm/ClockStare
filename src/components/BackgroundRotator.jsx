import useThemeRotation from '../hooks/useThemeRotation';
import './BackgroundRotator.css';

function BackgroundRotator({ children }) {
  const currentBackground = useThemeRotation();

  return (
    <div
      className="background-rotator"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      {children}
    </div>
  );
}

export default BackgroundRotator;