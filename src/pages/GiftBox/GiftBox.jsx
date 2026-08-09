import { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { uiText } from '../../data/birthdayData';
import { useMusic } from '../../context/MusicContext';
import './GiftBox.css';

/* Generate random firefly dots */
const NUM_FIREFLIES = 55;
const fireflies = Array.from({ length: NUM_FIREFLIES }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  dur: Math.random() * 3 + 2.5,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.3,
}));

export default function GiftBox({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const { startMusic } = useMusic();
  const [opened, setOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [glitter, setGlitter] = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const [shake, setShake] = useState(false);

  // Idle shake hint every 3s
  useEffect(() => {
    if (opened) return;
    const t = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }, 3000);
    return () => clearInterval(t);
  }, [opened]);

  const handleOpen = () => {
    startMusic();
    if (opened || transitioning) return;
    setOpened(true);

    // Spawn hearts
    const h = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 40 + Math.random() * 140 - 70,
      delay: Math.random() * 0.5,
      size: Math.random() * 22 + 16,
    }));
    setHearts(h);

    // Spawn glitter
    const g = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      angle: (i / 36) * 360,
      distance: Math.random() * 120 + 70,
      color: ['#FFD166', '#FF008C', '#FFFFFF', '#F6C453', '#C90078'][i % 5],
    }));
    setGlitter(g);

    setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => onNext(), 900);
    }, 1900);
  };

  return (
    <div className="stage-wrapper gift-stage stage-enter">

      {/* ── Dark cinematic background ── */}
      <div className="gift-bg-dark" />
      <div className="gift-vignette" />

      {/* ── Scattered golden fireflies ── */}
      {fireflies.map(f => (
        <div
          key={f.id}
          className="gift-firefly"
          style={{
            left: `${f.x}%`,
            top:  `${f.y}%`,
            width:  `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.dur}s`,
            animationDelay:    `${f.delay}s`,
            opacity: f.opacity,
          }}
        />
      ))}

      {/* ── Main content ── */}
      <div className={`gift-content ${transitioning ? 'fade-out' : ''}`}>
        <p className="gift-pre-text">{t.giftPreText}</p>
        <h1 className="gift-title">{t.giftTitle}</h1>

        {/* ── Premium 3D Gift Box ── */}
        <div
          className={`gift-box-wrapper ${opened ? 'opened' : ''} ${shake ? 'shake' : ''}`}
          onClick={handleOpen}
          onTouchEnd={(e) => { e.preventDefault(); handleOpen(); }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
          aria-label="Tap to open gift"
        >
          {/* Glow ring behind box */}
          <div className="gift-glow-ring" />

          {/* Lid — no bow inside */}
          <div className="gift-lid">
            <div className="gift-lid-shine" />
            <div className="gift-lid-ribbon" />
          </div>

          {/* Bow — direct child of wrapper so it's never clipped */}
          <div className="gift-lid-bow">
            <div className="bow-left" />
            <div className="bow-right" />
            <div className="bow-knot">
              <div className="bow-knot-shine" />
            </div>
          </div>

          {/* Box body */}
          <div className="gift-box-body">
            <div className="gift-body-shine" />
            <div className="gift-ribbon-vertical" />
            <div className="gift-body-shadow" />
          </div>

          {/* Heart rising */}
          {opened && (
            <div className="gift-heart-rise">💖</div>
          )}

          {/* Glitter burst */}
          {glitter.map((g) => (
            <div
              key={g.id}
              className="glitter-piece"
              style={{
                '--angle': `${g.angle}deg`,
                '--dist': `${g.distance}px`,
                background: g.color,
                animationDelay: `${Math.random() * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating hearts */}
        {hearts.map((h) => (
          <div
            key={h.id}
            className="floating-heart"
            style={{
              left: `calc(50% + ${h.x}px)`,
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
            }}
          >
            💗
          </div>
        ))}

        <p className="gift-tap-text">
          {opened ? t.giftOpening : t.giftTapOpen}
        </p>
      </div>
    </div>
  );
}
