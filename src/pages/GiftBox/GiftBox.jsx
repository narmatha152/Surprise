import { useState } from 'react';
import Particles from '../../components/Particles/Particles';
import { useLang } from '../../context/LanguageContext';
import { uiText } from '../../data/birthdayData';
import './GiftBox.css';

export default function GiftBox({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [opened, setOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [glitter, setGlitter] = useState([]);
  const [transitioning, setTransitioning] = useState(false);

  const handleOpen = () => {
    if (opened || transitioning) return;
    setOpened(true);

    // Spawn hearts
    const h = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 40 + Math.random() * 120 - 60,
      delay: Math.random() * 0.5,
      size: Math.random() * 20 + 16,
    }));
    setHearts(h);

    // Spawn glitter
    const g = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      angle: (i / 30) * 360,
      distance: Math.random() * 100 + 60,
      color: ['#FFD166', '#FF008C', '#FFFFFF', '#F6C453', '#C90078'][i % 5],
    }));
    setGlitter(g);

    setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => onNext(), 800);
    }, 1800);
  };

  return (
    <div className="stage-wrapper gift-stage stage-enter">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <Particles count={35} />

      <div className={`gift-content ${transitioning ? 'fade-out' : ''}`}>
        <p className="gift-pre-text">{t.giftPreText}</p>
        <h1 className="gift-title">{t.giftTitle}</h1>

        {/* Gift Box */}
        <div
          className={`gift-box-wrapper ${opened ? 'opened' : ''}`}
          onClick={handleOpen}
          onTouchEnd={(e) => { e.preventDefault(); handleOpen(); }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
          aria-label="Tap to open gift"
        >
          {/* Lid */}
          <div className="gift-lid">
            <div className="gift-lid-ribbon" />
            <div className="gift-lid-bow">
              <div className="bow-left" />
              <div className="bow-right" />
              <div className="bow-knot" />
            </div>
          </div>

          {/* Box body */}
          <div className="gift-box-body">
            <div className="gift-ribbon-vertical" />
          </div>

          {/* Glowing heart coming out */}
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
