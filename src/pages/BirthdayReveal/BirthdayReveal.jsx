import { useState, useEffect, useRef, useMemo } from 'react';
import { birthdayConfig, videoConfig, uiText } from '../../data/birthdayData';
import Fireflies from '../../components/Fireflies/Fireflies';
import Confetti from '../../components/Confetti/Confetti';
import { useLang } from '../../context/LanguageContext';
import { useMusic } from '../../context/MusicContext';
import './BirthdayReveal.css';

// ── Live clock hook ─────────────────────────────────────────────
function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatDate(d) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  return `${days[d.getDay()]} • ${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function formatTime(d) {
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2,'0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${String(h).padStart(2,'0')}:${m} ${ampm}`;
}

// ── Stars generated once ────────────────────────────────────────
const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: Math.random() * 3 + 2,
  delay: Math.random() * 4,
}));

// Golden light orbs
const ORBS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 8,
  dur: 3 + Math.random() * 4,
  delay: Math.random() * 5,
}));

export default function BirthdayReveal({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const { pauseForVideo, resumeFromVideo } = useMusic();
  const now = useLiveClock();

  const BIRTHDAY_CHARS = t.revealTitleChars;

  // Phases: countdown → reveal → subtext → cake → video → quote → next
  const [cdNum, setCdNum]           = useState(3);        // countdown 3 2 1
  const [phase, setPhase]           = useState('countdown'); // countdown | reveal | full
  const [revealedChars, setRevealedChars] = useState(0);
  const [showClock, setShowClock]   = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [showCake, setShowCake]     = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showVideo, setShowVideo]   = useState(false);
  const [showVideoBtn, setShowVideoBtn] = useState(false);
  const [showQuote, setShowQuote]   = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const revealStarted = useRef(false);

  // ── Countdown 3 → 2 → 1 ─────────────────────────────────────
  useEffect(() => {
    if (phase !== 'countdown') return;

    const steps = [
      { num: 3, delay: 0 },
      { num: 2, delay: 1000 },
      { num: 1, delay: 2000 },
      { num: 0, delay: 3000 }, // 0 triggers reveal
    ];

    const timers = steps.map(({ num, delay }) =>
      setTimeout(() => {
        if (num === 0) {
          setPhase('reveal');
          setShowClock(true);
        } else {
          setCdNum(num);
        }
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  // ── Character-by-character reveal of HAPPY BIRTHDAY ──────────
  useEffect(() => {
    if (phase !== 'reveal' || revealStarted.current) return;
    revealStarted.current = true;

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setRevealedChars(i);
      if (i >= BIRTHDAY_CHARS.length) {
        clearInterval(timer);
        setPhase('full');
        setTimeout(() => setShowSubText(true), 500);
        setTimeout(() => { setShowCake(true); setShowConfetti(true); }, 1400);
        setTimeout(() => setShowVideoBtn(true), 2400);
        setTimeout(() => setShowQuote(true), 3200);
        setTimeout(() => setShowNextBtn(true), 4000);
      }
    }, 140);
    return () => clearInterval(timer);
  }, [phase, BIRTHDAY_CHARS.length]);

  // ── Auto-stop confetti ────────────────────────────────────────
  useEffect(() => {
    if (!showConfetti) return;
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, [showConfetti]);

  // ── COUNTDOWN SCREEN ─────────────────────────────────────────
  if (phase === 'countdown') {
    return (
      <div className="stage-wrapper reveal-stage stage-enter reveal-dark">
        {STARS.map(s => (
          <div key={s.id} className="star"
            style={{ left:`${s.x}%`, top:`${s.y}%`, width:`${s.size}px`, height:`${s.size}px`,
                     animationDuration:`${s.dur}s`, animationDelay:`${s.delay}s` }}
          />
        ))}
        {ORBS.map(o => (
          <div key={o.id} className="rev-orb"
            style={{ left:`${o.x}%`, top:`${o.y}%`, width:`${o.size}px`, height:`${o.size}px`,
                     animationDuration:`${o.dur}s`, animationDelay:`${o.delay}s` }}
          />
        ))}
        <Fireflies count={20} />
        <div className="cd-wrap">
          <p className="cd-label">Get ready…</p>
          <div className="cd-number" key={cdNum}>{cdNum}</div>
          <div className="cd-sparkles">
            {['✦','✦','✦'].map((s,i) => <span key={i} className="cd-spark" style={{'--i':i}}>{s}</span>)}
          </div>
        </div>
      </div>
    );
  }

  // ── REVEAL + FULL SCREEN ─────────────────────────────────────
  return (
    <div className="stage-wrapper reveal-stage stage-enter">
      {STARS.map(s => (
        <div key={s.id} className="star"
          style={{ left:`${s.x}%`, top:`${s.y}%`, width:`${s.size}px`, height:`${s.size}px`,
                   animationDuration:`${s.dur}s`, animationDelay:`${s.delay}s` }}
        />
      ))}
      {ORBS.map(o => (
        <div key={o.id} className="rev-orb"
          style={{ left:`${o.x}%`, top:`${o.y}%`, width:`${o.size}px`, height:`${o.size}px`,
                   animationDuration:`${o.dur}s`, animationDelay:`${o.delay}s` }}
        />
      ))}

      <Fireflies count={30} />
      <Confetti active={showConfetti} count={100} />

      <div className="reveal-content">
        {/* Live clock */}
        {showClock && (
          <div className="rev-clock" style={{ animation: 'fadeInScale 0.7s ease forwards' }}>
            <p className="rev-clock-date">{formatDate(now)}</p>
            <p className="rev-clock-time">{formatTime(now)}</p>
          </div>
        )}

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
            <p className="rev-sweetheart">My Sweetheart ❤️</p>
          </div>
        )}

        {/* Animated Cake */}
        {showCake && (
          <div className="cake-wrap">
            <div className="cake-plate">
              <div className="candles-row">
                {[1,2,3].map(i => (
                  <div key={i} className="candle-group">
                    <div className="flame"><div className="flame-inner" /></div>
                    <div className="candle" style={{ background: ['#FFD166','#FF008C','#C77DFF'][i-1] }} />
                  </div>
                ))}
              </div>
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

        {/* Birthday quote */}
        {showQuote && (
          <p className="rev-quote" style={{ animation: 'fadeInScale 0.8s ease forwards' }}>
            "May this new chapter of your life be filled with everything your heart quietly wishes for. ✨"
          </p>
        )}

        {showNextBtn && (
          <button className="btn-glow next-btn" onClick={onNext}>
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
