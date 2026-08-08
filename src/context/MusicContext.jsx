import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const audioRef  = useRef(null);
  const [isPlaying,  setIsPlaying]  = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  // Tracks whether music was playing before a video took over
  const wasPlayingRef = useRef(false);

  // Initialise the Audio element once, never recreate it
  useEffect(() => {
    const audio    = new Audio('/music/background.mp3');
    audio.loop     = true;
    audio.volume   = 0.55;
    audio.preload  = 'auto';
    audioRef.current = audio;

    const onPlay  = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false); // loop handles restart anyway

    audio.addEventListener('play',  onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play',  onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
    };
  }, []);

  /** Called once after the very first user interaction */
  const startMusic = useCallback(() => {
    if (!audioRef.current || hasStarted) return;
    setHasStarted(true);
    audioRef.current.play().catch(() => {/* autoplay blocked – silently ignore */});
  }, [hasStarted]);

  /** Toggle play / pause manually */
  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  /** Pause bg music when a video starts playing */
  const pauseForVideo = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    wasPlayingRef.current = !audio.paused;
    if (!audio.paused) audio.pause();
  }, []);

  /** Resume bg music when a video stops playing */
  const resumeFromVideo = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (wasPlayingRef.current) {
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <MusicContext.Provider value={{
      isPlaying,
      hasStarted,
      startMusic,
      toggleMusic,
      pauseForVideo,
      resumeFromVideo,
    }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used inside <MusicProvider>');
  return ctx;
}
