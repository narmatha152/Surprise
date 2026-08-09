import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../../context/LanguageContext';
import { uiText } from '../../data/birthdayData';
import './MakeAWish.css';

const WISH_LS_KEY = 'birthday_manifestation';
const BIRTHDAY_NAME = 'Jeeva';

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}));

const UNI_PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  dur: 2 + Math.random() * 3,
}));

function StarField() {
  return STARS.map(s => (
    <div key={s.id} className="maw-star"
      style={{ left:`${s.x}%`, top:`${s.y}%`,
               width:`${s.size}px`, height:`${s.size}px`,
               animationDuration:`${s.dur}s`, animationDelay:`${s.delay}s` }}
    />
  ));
}

function Particles() {
  return UNI_PARTICLES.map(p => (
    <div key={p.id} className="uni-particle"
      style={{ left:`${p.x}%`, top:`${p.y}%`,
               animationDelay:`${p.delay}s`, animationDuration:`${p.dur}s` }}
    />
  ));
}

export default function MakeAWish({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const savedWish = (() => { try { return localStorage.getItem(WISH_LS_KEY) || ''; } catch { return ''; } })();

  // If a wish is already saved → go straight to preview (no email re-send)
  const [phase, setPhase] = useState(savedWish.trim() ? 'preview' : 'write');
  const [wish, setWish] = useState(savedWish);
  const [shootActive, setShootActive] = useState(false);  // shooting star trigger
  const sendGuard = useRef(false);
  const textareaRef = useRef(null);

  // ── Submit ──────────────────────────────────────────────────
  const handleSubmit = () => {
    if (sendGuard.current) return;
    const trimmed = wish.trim();
    if (!trimmed) { textareaRef.current?.focus(); return; }

    try { localStorage.setItem(WISH_LS_KEY, trimmed); } catch {}
    sendGuard.current = true;

    // Animation timeline (fixed, not email-dependent)
    setPhase('sending');
    setTimeout(() => setShootActive(true), 1000);   // star flies diagonally
    setTimeout(() => setPhase('universe'), 4200);    // universe screen
    setTimeout(() => setPhase('done'), 7200);        // show Continue →

    // Email fires in parallel — no UI confirmation shown
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { to_email: import.meta.env.VITE_BIRTHDAY_RECIPIENT_EMAIL, birthday_name: BIRTHDAY_NAME, wish: trimmed },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).catch(err => console.error('[EmailJS] wish email failed:', err));
  };

  // ── PREVIEW (wish already exists) ──────────────────────────
  if (phase === 'preview') {
    return (
      <div className="stage-wrapper maw-stage stage-enter">
        <StarField />
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="maw-content">
          <div className="maw-eyebrow">{t.mawEyebrow}</div>
          <h2 className="maw-heading gradient-text">{t.mawPreviewHeading}</h2>
          <p className="maw-sub1">{t.mawPreviewSub}</p>
          <div className="maw-preview-card glass-card">
            <p className="maw-preview-wish">"{wish.trim()}"</p>
          </div>
          <p className="maw-preview-sent">{t.mawPreviewSent}</p>
          <button className="btn-glow maw-send-btn" onClick={onNext}>{t.mawPreviewBtn}</button>
        </div>
      </div>
    );
  }

  // ── WRITE ───────────────────────────────────────────────────
  if (phase === 'write') {
    return (
      <div className="stage-wrapper maw-stage stage-enter">
        <StarField />
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="maw-content">
          <div className="maw-eyebrow">{t.mawEyebrow}</div>
          <h2 className="maw-heading gradient-text">{t.mawHeading}</h2>
          <p className="maw-sub1">{t.mawSub1}</p>
          <p className="maw-sub2">{t.mawSub2}</p>

          <div className="maw-card glass-card">
            <textarea
              ref={textareaRef}
              className="maw-textarea"
              placeholder={t.mawPlaceholder}
              value={wish}
              onChange={e => setWish(e.target.value)}
              rows={5}
            />
          </div>

          <button
            className="btn-glow maw-send-btn"
            onClick={handleSubmit}
            disabled={!wish.trim()}
          >
            {t.mawBtn}
          </button>
        </div>
      </div>
    );
  }

  // ── SENDING (shooting star animation) ───────────────────────
  if (phase === 'sending') {
    return (
      <div className="stage-wrapper maw-anim-stage">
        <Particles />
        <StarField />
        {/* Wish fades out */}
        <div className={`wish-fade-card glass-card ${shootActive ? 'wish-fade-out' : ''}`}>
          <p className="wish-display">"{wish.trim()}"</p>
        </div>
        {/* Shooting star — left to right */}
        <div className={`shoot-star ${shootActive ? 'shoot-star-active' : ''}`}>
          ✨
          <div className="shoot-star-tail" />
        </div>
      </div>
    );
  }

  // ── UNIVERSE + DONE ──────────────────────────────────────────
  return (
    <div className="stage-wrapper maw-universe-stage">
      <Particles />
      <StarField />
      <div className="maw-universe-content">
        <div className="uni-sent-icon">🌌✨</div>
        <h2 className="uni-sent-title gradient-text">
          {t.mawUniSentTitle}
        </h2>
        <p className="uni-soon-text">
          {t.mawUniSoonText}
        </p>
        <div className="uni-wish-display glass-card">
          <p className="uni-wish-text">"{wish.trim()}"</p>
        </div>
        <div className="uni-affirmations">
          <p>{t.mawUniAffirm1}</p>
          <p>{t.mawUniAffirm2}</p>
          <p>{t.mawUniAffirm3}</p>
        </div>
        <p className="uni-closing">
          {t.mawUniClosing}
        </p>
        {phase === 'done' && (
          <button className="btn-glow uni-continue-btn" onClick={onNext}>
            {t.mawUniBtn}
          </button>
        )}
      </div>
    </div>
  );
}
