import { useState } from 'react';
import { birthdayConfig, uiText } from '../../data/birthdayData';
import Fireflies from '../../components/Fireflies/Fireflies';
import Confetti from '../../components/Confetti/Confetti';
import { useLang } from '../../context/LanguageContext';
import './EndingScreen.css';

export default function EndingScreen() {
  const { lang } = useLang();
  const t = uiText[lang];

  return (
    <div className="stage-wrapper ending-stage stage-enter">
      <Fireflies count={35} />
      <Confetti active count={120} />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <div className="ending-content">
        <div className="ending-crown">👑</div>
        <h1 className="ending-title gradient-text">{t.endTitle(birthdayConfig.name)}</h1>
        <p className="ending-heart">💖</p>
        <p className="ending-message">
          {t.endMessage1}<br />
          {t.endMessage2}
        </p>
        <div className="ending-sparkles">
          {['✦','💫','✨','⭐','💫','✦','🌟'].map((s,i)=>(
            <span key={i} className="end-spark" style={{'--i':i}}>{s}</span>
          ))}
        </div>
        <p className="ending-sign gold-text">{t.endSign}</p>

        <button className="btn-glow replay-btn" onClick={() => window.location.reload()}>
          {t.endReplayBtn}
        </button>
      </div>
    </div>
  );
}
