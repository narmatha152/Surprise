import { useState } from 'react';
import { birthdayConfig, uiText, lastVideo } from '../../data/birthdayData';
import Fireflies from '../../components/Fireflies/Fireflies';
import Confetti from '../../components/Confetti/Confetti';
import { useLang } from '../../context/LanguageContext';
import { useMusic } from '../../context/MusicContext';
import './EndingScreen.css';

export default function EndingScreen() {
  const { lang } = useLang();
  const t = uiText[lang];
  const { pauseForVideo, resumeFromVideo } = useMusic();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="stage-wrapper ending-stage stage-enter">
      <Fireflies count={35} />
      <Confetti active count={120} />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <div className="ending-content">
        <div className="ending-crown">👑</div>
        <h1 className="ending-title">
          <span className="gradient-text">{t.endTitle(birthdayConfig.name)}</span>
          <span style={{ display: 'inline-block', animation: 'pulseHeart 1.2s ease-in-out infinite', marginLeft: '10px' }}>💖</span>
        </h1>
        <p className="ending-message">
          {t.endMessage1}<br />
          {t.endMessage2}
        </p>
        <div className="ending-sparkles">
          {['✦','💫','✨','⭐','💫','✦','🌟'].map((s,i)=>(
            <span key={i} className="end-spark" style={{'--i':i}}>{s}</span>
          ))}
        </div>
        <p className="ending-sign gold-text">{t.endSign}</p>

        {/* SPECIAL VIDEO SECTION */}
        <div className="ending-video-section">
          {!showVideo ? (
            <button
              className="btn-glow play-last-video-btn"
              onClick={() => { pauseForVideo(); setShowVideo(true); }}
            >
              {lang === 'ta' ? 'உனக்கு ஒரு ஸ்பெஷல் வீடியோ இருக்கு அம்மு 🎬' : 'There is a special video just for you, Ammu 🎬'}
            </button>
          ) : (
            <div className="video-card glass-card">
              <video
                className="bday-video"
                src={lastVideo}
                controls
                autoPlay
                playsInline
                onEnded={resumeFromVideo}
                onPause={resumeFromVideo}
              />
            </div>
          )}
        </div>

        <button className="btn-glow replay-btn" onClick={() => { localStorage.removeItem('bday_stage_idx'); window.location.reload(); }}>
          {t.endReplayBtn}
        </button>
      </div>
    </div>
  );
}
