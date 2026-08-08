import { useMusic } from '../../context/MusicContext';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const { isPlaying, hasStarted, toggleMusic } = useMusic();

  // Show only after music has been unlocked by first interaction
  if (!hasStarted) return null;

  return (
    <button
      id="music-player-btn"
      className={`music-fab ${isPlaying ? 'playing' : 'paused'}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {/* Vinyl disc icon */}
      <span className="music-icon">🎵</span>

      {/* Animated ring when playing */}
      {isPlaying && (
        <>
          <span className="music-ring ring-1" />
          <span className="music-ring ring-2" />
        </>
      )}
    </button>
  );
}
