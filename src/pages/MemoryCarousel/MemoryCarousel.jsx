import { useState, useRef } from 'react';
import { memories, uiText } from '../../data/birthdayData';
import Particles from '../../components/Particles/Particles';
import { useLang } from '../../context/LanguageContext';
import './MemoryCarousel.css';

export default function MemoryCarousel({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 380);
  };

  const prev = () => goTo((current - 1 + memories.length) % memories.length, 'prev');
  const next = () => goTo((current + 1) % memories.length, 'next');

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const mem = memories[current];
  const memTitle = lang === 'ta' ? mem.titleTa : mem.title;
  const memDesc  = lang === 'ta' ? mem.descriptionTa : mem.description;

  return (
    <div className="stage-wrapper carousel-stage stage-enter">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <Particles count={20} />

      <div className="carousel-container">
        <p className="carousel-eyebrow">{t.memEyebrow}</p>
        <h2 className="carousel-heading gradient-text">{t.memHeading}</h2>

        {/* Card */}
        <div
          className={`carousel-card glass-card ${animating ? `slide-${direction}` : 'slide-in'}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-img-wrap">
            {/* height:auto in CSS → full portrait image, zero crop */}
            <img
              key={current}
              src={mem.image}
              alt={mem.title}
              className="carousel-img"
              loading="lazy"
            />
            <div className="img-overlay" />
          </div>

          <div className="carousel-info">
            <h3 className="carousel-title gold-text">{memTitle}</h3>
            <p className="carousel-desc">{memDesc}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="carousel-nav">
          <button className="nav-btn" onClick={prev} aria-label="Previous">‹</button>
          <div className="carousel-dots">
            {memories.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to memory ${i + 1}`}
              />
            ))}
          </div>
          <button className="nav-btn" onClick={next} aria-label="Next">›</button>
        </div>

        <p className="carousel-counter">{current + 1} / {memories.length}</p>

        <button className="btn-glow next-btn" onClick={onNext}>
          {t.memNextBtn}
        </button>
      </div>
    </div>
  );
}
