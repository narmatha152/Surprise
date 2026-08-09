import { useState, useEffect } from 'react';
import { useLang } from '../../context/LanguageContext';
import { uiText } from '../../data/birthdayData';
import './ThankYou.css';

const FLOATING_HEARTS = ['❤️', '💗', '💖', '💕', '🌸', '💝', '✨', '💗'];

export default function ThankYou({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [hearts] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      char: FLOATING_HEARTS[i % FLOATING_HEARTS.length],
      x: Math.random() * 100,
      delay: Math.random() * 6,
      dur: 5 + Math.random() * 5,
      size: 0.9 + Math.random() * 1.1,
    }))
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="stage-wrapper thankyou-stage">
      {/* floating hearts */}
      {hearts.map(h => (
        <span
          key={h.id}
          className="ty-heart"
          style={{
            left: `${h.x}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.dur}s`,
            fontSize: `${h.size}rem`,
          }}
        >
          {h.char}
        </span>
      ))}

      {/* bg blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <div className={`ty-card glass-card ${visible ? 'ty-card-visible' : ''}`}>
        {/* top glow orb */}
        <div className="ty-orb" />

        <div className="ty-crown">{t.tyCrown}</div>

        <h1 className="ty-main">
          {t.tyMain}
          <span className="ty-sweep gradient-text">{t.tySweep}</span>{' '}
          <span className="ty-heart-inline">❤️</span>
        </h1>

        <div className="ty-divider">
          <span className="ty-star">✦</span>
          <span className="ty-star">✦</span>
          <span className="ty-star">✦</span>
        </div>
        <p className="ty-subtitle">
          {t.tySubtitle}
        </p>

        <p className="ty-more">
          {t.tyMore}
        </p>

        <button className="btn-glow ty-btn" onClick={onNext}>
          {t.tyBtn}
        </button>
      </div>
    </div>
  );
}
