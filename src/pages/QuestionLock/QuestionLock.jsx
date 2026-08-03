import { useState, useRef, useEffect } from 'react';
import { birthdayConfig, uiText } from '../../data/birthdayData';
import Particles from '../../components/Particles/Particles';
import { useLang } from '../../context/LanguageContext';
import './QuestionLock.css';

export default function QuestionLock({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('idle'); // idle | wrong | correct | angry
  const [attempts, setAttempts] = useState(0);
  const [unlocking, setUnlocking] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (unlocking) return;
    const trimmed = answer.trim().toLowerCase();
    const isCorrect = birthdayConfig.correctAnswers.includes(trimmed);

    if (isCorrect) {
      setStatus('correct');
      setUnlocking(true);
      setTimeout(() => onNext(), 2000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);

      if (newAttempts >= 3) {
        setStatus('angry');
      } else {
        setStatus('wrong');
      }
      setAnswer('');
    }
  };

  return (
    <div className="stage-wrapper question-stage stage-enter">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <Particles count={25} />

      <div className="question-card glass-card">
        {/* Lock icon */}
        <div className={`lock-icon ${status === 'correct' ? 'unlocked' : ''} ${shaking ? 'shake' : ''}`}>
          {status === 'correct' ? '🔓' : status === 'angry' ? '' : '🔐'}
        </div>

        {/* Angry animation */}
        {status === 'angry' && (
          <div className="angry-container">
            <div className="angry-emoji">😤</div>
            <div className="angry-sparks">
              {['💢','💢','💢','😠','🔥','💢'].map((s, i) => (
                <span key={i} className="angry-spark" style={{ '--i': i }}>{s}</span>
              ))}
            </div>
            <p className="angry-text">{t.qLockAngryText1}<br />{t.qLockAngryText2}</p>
            <p className="angry-sub">{t.qLockAngrySub}</p>
          </div>
        )}

        {status !== 'angry' && (
          <>
            <p className="question-tag">{t.qLockTag}</p>
            <h2 className="question-title">{birthdayConfig.secretQuestion}</h2>

            {status === 'wrong' && (
              <p className="wrong-msg">
                {t.qLockWrong1}<br />
                <span>{t.qLockWrong2(3 - attempts)}</span>
              </p>
            )}

            {status === 'correct' && (
              <p className="correct-msg">{t.qLockCorrect}</p>
            )}

            <form onSubmit={handleSubmit} className="question-form">
              <div className={`answer-input-wrap ${shaking ? 'shake' : ''}`}>
                <input
                  ref={inputRef}
                  type="text"
                  className="answer-input"
                  placeholder={birthdayConfig.answerHint}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  disabled={unlocking}
                  autoComplete="off"
                  spellCheck="false"
                />
                <div className="input-glow" />
              </div>

              <button
                type="submit"
                className="btn-glow submit-btn"
                disabled={unlocking || !answer.trim()}
              >
                {unlocking ? t.qLockOpeningBtn : t.qLockUnlockBtn}
              </button>
            </form>
          </>
        )}

        {status === 'angry' && (
          <form onSubmit={handleSubmit} className="question-form" style={{ marginTop: '1.5rem' }}>
            <div className="answer-input-wrap">
              <input
                type="text"
                className="answer-input"
                placeholder={t.qLockAngryPlaceholder}
                value={answer}
                onChange={(e) => { setAnswer(e.target.value); setStatus('angry'); }}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn-glow submit-btn">
              {t.qLockAngryBtn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
