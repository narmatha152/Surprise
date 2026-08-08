import { useState, useEffect, useMemo } from 'react';
import { birthdayConfig, videoConfig, uiText } from '../../data/birthdayData';
import Fireflies from '../../components/Fireflies/Fireflies';
import Confetti from '../../components/Confetti/Confetti';
import { useLang } from '../../context/LanguageContext';
import { useMusic } from '../../context/MusicContext';
import './BirthdayReveal.css';

export default function BirthdayReveal({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const { pauseForVideo, resumeFromVideo } = useMusic();
  
  const BIRTHDAY_TEXT = lang === 'ta' ? 'பிறந்தநாள் வாழ்த்துக்கள் 🎂' : 'HAPPY BIRTHDAY 🎂';
  const BIRTHDAY_CHARS = useMemo(() => [...BIRTHDAY_TEXT], [BIRTHDAY_TEXT]);
  
  const [revealedChars, setRevealedChars] = useState(0);
  const [showSubText, setShowSubText] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoBtn, setShowVideoBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [stars] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      dur: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }))
  );

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setRevealedChars(i);
      if (i >= BIRTHDAY_CHARS.length) {
        clearInterval(timer);
        setTimeout(() => setShowSubText(true), 500); // 1. Subtext ("Today is your special day")
        setTimeout(() => { setShowCake(true); setShowConfetti(true); }, 1500); // 2. Cake & Confetti
        setTimeout(() => setShowVideoBtn(true), 2500); // 3. Video button
        setTimeout(() => setShowNextBtn(true), 3500); // 4. Next button
      }
    }, 150);   // increased speed (from 260 to 150)
    return () => clearInterval(timer);
  }, [BIRTHDAY_CHARS.length]);

  useEffect(() => {
    if (showConfetti) {
      const t = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showConfetti]);

  return (
    <div className="stage-wrapper reveal-stage stage-enter">
      {/* Star field */}
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <Fireflies count={30} />
      <Confetti active={showConfetti} count={100} />

      <div className="reveal-content">
        {/* Main birthday text */}
        <h1 className="birthday-headline">
          {BIRTHDAY_CHARS.map((ch, i) => (
            <span
              key={i}
              className={`bday-char ${i < revealedChars ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>

        {showSubText && (
          <div className="reveal-subtext-group" style={{ animation: 'fadeInScale 0.8s ease forwards', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <p className="reveal-sub">{t.revealSub}</p>
            <p className="reveal-name gold-text">
              {birthdayConfig.name}
              <svg className="pink-heart" viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg" aria-label="heart">
                <defs>
                  <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#FFB6C1"/>
                    <stop offset="45%"  stopColor="#FF69B4"/>
                    <stop offset="100%" stopColor="#FF1493"/>
                  </linearGradient>
                </defs>
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
                         c0,9.4,13.5,18.6,16,20.2c2.5-1.6,16-10.8,16-20.2C32,3.8,28.2,0,23.6,0z"
                      fill="url(#hg)"/>
              </svg>
            </p>
          </div>
        )}

        {/* Animated Cake */}
        {showCake && (
          <div className="cake-wrap">
            <div className="cake-plate">
              {/* Candles */}
              <div className="candles-row">
                {[1,2,3].map(i => (
                  <div key={i} className="candle-group">
                    <div className="flame">
                      <div className="flame-inner" />
                    </div>
                    <div className="candle" style={{ background: ['#FFD166','#FF008C','#C77DFF'][i-1] }} />
                  </div>
                ))}
              </div>
              {/* Cake tiers */}
              <div className="cake-top-tier">
                <div className="cake-deco-dots">
                  {[0,1,2,3,4].map(i => <span key={i} className="deco-dot" />)}
                </div>
              </div>
              <div className="cake-mid-tier">
                <div className="cake-swirl">🌸 Happy Birthday 🌸</div>
              </div>
              <div className="cake-base-tier" />
            </div>
          </div>
        )}

        {/* VIDEO SECTION */}
        {showVideoBtn && (
          <div className="video-section" style={{ animation: 'fadeInScale 0.8s ease forwards' }}>
            {!showVideo ? (
              <button
                className="play-video-btn btn-glow"
                onClick={() => { pauseForVideo(); setShowVideo(true); }}
              >
                {t.revealPlayBtn}
              </button>
            ) : (
              <div className="video-card glass-card">
                <p className="video-label">{t.revealVideoLabel}</p>
                <video
                  className="bday-video"
                  src={videoConfig.src}
                  poster={videoConfig.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onEnded={resumeFromVideo}
                  onPause={resumeFromVideo}
                />
              </div>
            )}
          </div>
        )}

        {showNextBtn && (
          <button className="btn-glow next-btn" onClick={onNext}>
            {t.revealNextBtn}
          </button>
        )}
      </div>
    </div>
  );
}
