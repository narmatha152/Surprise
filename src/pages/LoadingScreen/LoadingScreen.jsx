import { useEffect, useState } from 'react';
import { birthdayConfig, uiText } from '../../data/birthdayData';
import Particles from '../../components/Particles/Particles';
import { useLang } from '../../context/LanguageContext';
import './LoadingScreen.css';

export default function LoadingScreen({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = t.loadPhases;

  useEffect(() => {
    const duration = birthdayConfig.loadingDuration;
    const interval = 60;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const pct = Math.min(100, Math.round((current / steps) * 100));
      setProgress(pct);
      setPhase(Math.floor((pct / 100) * (phases.length - 1)));

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => onNext(), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stage-wrapper loading-stage stage-enter">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <Particles count={20} />

      <div className="loading-content">
        {/* Circular loader */}
        <div className="loader-ring-wrap">
          <svg className="loader-ring" viewBox="0 0 120 120">
            <circle className="ring-track" cx="60" cy="60" r="52" />
            <circle
              className="ring-fill"
              cx="60" cy="60" r="52"
              style={{
                strokeDashoffset: `${327 - (327 * progress) / 100}`,
              }}
            />
          </svg>
          <div className="loader-inner">
            <span className="loader-emoji">✨</span>
            <span className="loader-pct">{progress}%</span>
          </div>
          {/* Orbiting dots */}
          {[0,1,2].map(i => (
            <div key={i} className="orbit-dot" style={{ '--i': i }} />
          ))}
        </div>

        <p className="loading-main-text">{t.loadMainText}</p>
        <p className="loading-phase-text">{phases[phase]}</p>

        {/* Progress bar */}
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Decorative sparkles */}
        <div className="loading-sparkles">
          {['✦','✧','✦','✧','✦'].map((s,i) => (
            <span key={i} className="spark" style={{ '--i': i }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
