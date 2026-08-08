import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { scratchReveal, letterContent, letterContentTa, scratchCardImage, uiText } from '../../data/birthdayData';
import Particles from '../../components/Particles/Particles';
import { useLang } from '../../context/LanguageContext';
import './ScratchCard.css';

const REVEAL_THRESHOLD = 0.6;


export default function ScratchCard({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const scratchRevealMessage = lang === 'ta' ? scratchReveal.messageTa : scratchReveal.message;

  const canvasRef = useRef(null);
  const [scratching, setScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // Reset progress when language changes
    setRevealed(false);
    setProgress(0);
    ctx.globalCompositeOperation = 'source-over';

    // Scratch overlay gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0,   '#260019');
    grad.addColorStop(0.4, '#68003F');
    grad.addColorStop(0.8, '#C90078');
    grad.addColorStop(1,   '#FF008C');
    ctx.fillStyle = grad;
    ctx.roundRect(0, 0, W, H, 16);
    ctx.fill();

    // Checkerboard sheen
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 20; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillRect(i * (W / 40), j * (H / 20), W / 40, H / 20);
        }
      }
    }

    // Coin-scratch lines
    ctx.strokeStyle = 'rgba(255,209,102,0.2)';
    ctx.lineWidth = 1;
    for (let k = 0; k < 8; k++) {
      ctx.beginPath();
      ctx.moveTo(0, (H / 8) * k + 10);
      ctx.lineTo(W, (H / 8) * k + 10);
      ctx.stroke();
    }

    // Label text
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = 'bold 17px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(t.scrLabel1, W / 2, H / 2 - 12);
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.fillText(t.scrLabel2, W / 2, H / 2 + 12);
  }, [lang, t.scrLabel1, t.scrLabel2]);

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * scaleX,
      y: (src.clientY - rect.top) * scaleY,
    };
  };

  const scratch = (e) => {
    if (!scratching || revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getPos(e, canvas);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);  // Increased brush size from 30 to 40
    ctx.fill();
    checkProgress(canvas, ctx);
  };

  const checkProgress = (canvas, ctx) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    let totalChecked = 0;
    // Check every 16th pixel to drastically improve mobile performance
    for (let i = 3; i < pixels.length; i += 64) {
      totalChecked++;
      if (pixels[i] < 10) transparent++;
    }
    const pct = transparent / totalChecked;
    setProgress(Math.round(pct * 100));
    if (pct >= REVEAL_THRESHOLD && !revealed) {
      setRevealed(true);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleStart = (e) => { e.preventDefault(); setScratching(true); };
  const handleEnd   = ()  => setScratching(false);

  return (
    <div className="stage-wrapper scratch-stage stage-enter">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <Particles count={20} />

      <div className="scratch-container">
        <p className="scratch-eyebrow">{t.scrEyebrow}</p>
        <h2 className="scratch-heading gradient-text">{t.scrHeading}</h2>

        {/* ---- Scratch card ---- */}
        <div className={`scratch-card-wrap ${revealed ? 'revealed' : ''}`}>

          {/* Hidden content underneath */}
          <div className="scratch-reveal-content">
            <div className="reveal-inner">
              {/* Layer 1 — full cover image */}
              <img
                src={scratchCardImage}
                alt="Birthday surprise"
                className="reveal-image"
              />
              {/* Layer 2 — dark gradient overlay */}
              <div className="reveal-image-overlay" />
              {/* Layer 3 — text floating on top */}
              <div className="reveal-text-layer">
                <div className="reveal-icon">💖</div>
                <div className="reveal-lines">
                  {scratchRevealMessage.split('\n').map((line, i) => (
                    <p key={i} className={i === 0 ? 'reveal-main' : 'reveal-sub-line'}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scratch canvas on top */}
          <canvas
            ref={canvasRef}
            className={`scratch-canvas ${revealed ? 'canvas-hidden' : ''}`}
            width={340}
            height={320}
            onMouseDown={handleStart}
            onMouseMove={scratch}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={(e) => { e.preventDefault(); scratch(e); }}
            onTouchEnd={handleEnd}
            style={{ touchAction: 'none' }}
          />
        </div>

        {!revealed && (
          <div className="scratch-progress">
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="scratch-pct">{t.scrProgress(progress)}</p>
          </div>
        )}

        {revealed && (
          <div className="scratch-success">
            <p className="scratch-success-text gradient-text">{t.scrSuccess}</p>
            <button className="btn-glow letter-btn" onClick={() => setShowLetter(true)}>
              {t.scrLetterBtn}
            </button>
          </div>
        )}

        {/* Letter modal — rendered via portal so position:fixed works
            correctly even though .stage-enter applies transform to ancestor */}
        {showLetter && createPortal(
          <div className="letter-overlay" onClick={() => setShowLetter(false)}>
            <div className="letter-card-wrapper" onClick={e => e.stopPropagation()}>
              <LetterCard onClose={() => setShowLetter(false)} onNext={onNext} lang={lang} t={t} />
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

/* ---- Letter Card (inline) ---- */
function LetterCard({ onClose, onNext, lang, t }) {
  const content = lang === 'ta' ? letterContentTa : letterContent;
  const [typed, setTyped]   = useState(0);
  const [done, setDone]     = useState(false);
  const bodyRef             = useRef(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(i);
      // Auto-scroll as text types
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
      if (i >= content.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 35);  // 35 ms per character — slow typewriter feel
    return () => clearInterval(timer);
  }, [content.length]);

  return (
    <div className="letter-card glass-card">
      <button className="story-close" onClick={onClose}>✕</button>
      <div className="letter-emoji">💌</div>
      <h3 className="letter-heading gold-text">{t.scrLetterHeading}</h3>

      {/* Scrollable body */}
      <div className="letter-body" ref={bodyRef}>
        <pre className="letter-text">
          {content.slice(0, typed)}
          {!done && <span className="cursor">|</span>}
        </pre>
      </div>

      {/* Button — always at the bottom, outside the scroll area */}
      <div className="letter-footer">
        {done ? (
          <button className="btn-glow letter-end-btn" onClick={onNext}>
            {t.scrEndBtn}
          </button>
        ) : (
          <button
            className="skip-btn"
            onClick={() => { setTyped(content.length); setDone(true); }}
          >
            {t.scrSkipBtn}
          </button>
        )}
      </div>
    </div>
  );
}
