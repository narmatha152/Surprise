import { useState } from 'react';
import { createPortal } from 'react-dom';
import { balloonStory, uiText } from '../../data/birthdayData';
import { useLang } from '../../context/LanguageContext';
import Confetti from '../../components/Confetti/Confetti';
import './BalloonSurprise.css';

export default function BalloonSurprise({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];

  const [phase, setPhase]             = useState('intro');
  const [popped, setPopped]           = useState({});
  const [activeStory, setActiveStory] = useState(null);
  const [confettiKey, setConfettiKey] = useState(0);
  const [popping, setPopping]         = useState({});
  const [showGallery, setShowGallery] = useState(false);

  const poppedCount = Object.keys(popped).length;
  const allPopped   = poppedCount === balloonStory.length;

  const handlePop = (balloon) => {
    if (popped[balloon.id] || popping[balloon.id]) return;
    setPopping(p => ({ ...p, [balloon.id]: true }));
    setConfettiKey(k => k + 1);

    setTimeout(() => {
      const newPopped = { ...popped, [balloon.id]: true };
      setPopped(newPopped);
      setActiveStory(balloon);
      setPopping(p => ({ ...p, [balloon.id]: false }));

      if (Object.keys(newPopped).length === balloonStory.length) {
        setTimeout(() => {
          setActiveStory(null);
          setShowGallery(true);
        }, 1200);
      }
    }, 500);
  };

  // Helper: pick EN or Tamil field
  const title   = (item) => lang === 'ta' ? item.titleTa   : item.title;
  const message = (item) => lang === 'ta' ? item.messageTa : item.message;

  // ── Portal overlays — rendered at document.body level so they are NEVER
  //    clipped by any ancestor transform/filter (from .stage-enter animation).
  //    Without this, position:fixed inside a transformed parent is positioned
  //    relative to that parent, not the viewport → pink gap at the bottom.
  const storyOverlay = activeStory && !showGallery && createPortal(
    <div className="story-overlay" onClick={() => setActiveStory(null)}>
      <div className="story-card glass-card" onClick={e => e.stopPropagation()}>
        <button className="story-close" onClick={() => setActiveStory(null)}>✕</button>
        <div className="story-age-badge" style={{ background: activeStory.color }}>
          Age {activeStory.age} {activeStory.emoji}
        </div>
        <div className="story-img-wrap">
          <img src={activeStory.image} alt={title(activeStory)} className="story-image" />
        </div>
        <h3 className="story-title gold-text">{title(activeStory)}</h3>
        <p className="story-message">{message(activeStory)}</p>
        <button className="btn-glow" onClick={() => setActiveStory(null)} style={{ marginTop: '0.5rem' }}>
          {t.closeBtn}
        </button>
      </div>
    </div>,
    document.body
  );

  const galleryPortal = showGallery && createPortal(
    <div className="gallery-fullscreen">
      <div className="gallery-scene-inline">
        <p className="gallery-heading gradient-text">{t.galleryHeading}</p>
        <p className="gallery-sub">{t.gallerySub}</p>

        <div className="story-gallery-grid">
          {balloonStory.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-card"
              style={{ '--bcolor': item.color, animationDelay: `${idx * 0.07}s` }}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.image}
                  alt={title(item)}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-age-tag" style={{ background: item.color }}>
                  Age {item.age} {item.emoji}
                </div>
              </div>
              <div className="gallery-info">
                <h4 className="gallery-title">{title(item)}</h4>
                <p className="gallery-msg">{message(item)}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-glow gallery-next-btn" onClick={onNext}>
          {t.nextBtn}
        </button>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      {/* Portal overlays — outside stage-wrapper so fixed positioning works correctly */}
      {storyOverlay}
      {galleryPortal}

      <div className="stage-wrapper balloon-stage stage-enter">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />

        {/* ---- Intro Modal ---- */}
        {phase === 'intro' && (
          <div className="balloon-modal glass-card">
            <div className="modal-emoji">🎈✨🎉</div>
            <h2 className="modal-title gradient-text">{t.introTitle}</h2>
            <p className="modal-sub">{t.introSub}</p>
            <button className="btn-glow" onClick={() => setPhase('balloons')}>
              {t.continueBtn}
            </button>
          </div>
        )}

        {/* ---- Balloons ---- */}
        {phase === 'balloons' && (
          <div className="balloons-scene">
            {!showGallery && (
              <>
                <p className="balloons-title gradient-text">{t.balloonTitle}</p>
                <p className="balloons-sub">{t.balloonSub(poppedCount, balloonStory.length)}</p>

                <div className="balloons-grid">
                  {balloonStory.map((balloon) => (
                    <div
                      key={balloon.id}
                      className={`balloon-item ${popped[balloon.id] ? 'popped' : ''} ${popping[balloon.id] ? 'popping' : ''}`}
                      onClick={() => handlePop(balloon)}
                      onTouchEnd={(e) => { e.preventDefault(); handlePop(balloon); }}
                      style={{ '--bcolor': balloon.color }}
                    >
                      {!popped[balloon.id] ? (
                        <div className="balloon-body">
                          <div className="balloon-shine" />
                          <span className="balloon-emoji">{balloon.emoji}</span>
                          <div className="balloon-string" />
                        </div>
                      ) : (
                        <div className="popped-placeholder">✓</div>
                      )}
                    </div>
                  ))}
                </div>

                {allPopped && (
                  <div className="all-popped">
                    <p className="all-popped-text gradient-text">{t.allPoppedText}</p>
                    <p className="all-popped-loading">{t.allPoppedLoading}</p>
                  </div>
                )}
              </>
            )}

            <Confetti key={confettiKey} active={true} count={60} />
          </div>
        )}
      </div>
    </>
  );
}
