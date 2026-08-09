import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../styles/theme.css';
import '../../styles/global.css';
import './BirthdayExperience.css';

import GiftBox         from '../GiftBox/GiftBox';
import QuestionLock    from '../QuestionLock/QuestionLock';
import LoadingScreen   from '../LoadingScreen/LoadingScreen';
import ThankYou        from '../ThankYou/ThankYou';
import BirthdayReveal  from '../BirthdayReveal/BirthdayReveal';
import MakeAWish       from '../MakeAWish/MakeAWish';
import MemoryCarousel  from '../MemoryCarousel/MemoryCarousel';
import BalloonSurprise from '../BalloonSurprise/BalloonSurprise';
import PuzzleGame      from '../PuzzleGame/PuzzleGame';
import ScratchCard     from '../ScratchCard/ScratchCard';
import EndingScreen    from '../EndingScreen/EndingScreen';

const STAGES = [
  'gift',       // 0
  'question',   // 1
  'loading',    // 2
  'thankyou',   // 3  ← NEW: shown after correct answer loading
  'reveal',     // 4  ← existing Birthday Reveal
  'makewish',   // 5  ← NEW: Make a Wish / Send to Universe
  'memories',   // 6  ← existing Memory Carousel
  'balloons',   // 7
  'puzzle',     // 8
  'scratch',    // 9
  'ending',     // 10
];

const LS_KEY = 'bday_stage_idx';

export default function BirthdayExperience() {
  // ── Restore stage from localStorage on refresh ──────────────
  const [stageIdx, setStageIdx] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      const parsed = saved !== null ? parseInt(saved, 10) : 0;
      return isNaN(parsed) ? 0 : Math.min(parsed, STAGES.length - 1);
    } catch {
      return 0;
    }
  });

  const stage = STAGES[stageIdx];

  const next = () => setStageIdx(i => Math.min(i + 1, STAGES.length - 1));
  const prev = () => setStageIdx(i => Math.max(i - 1, 0));

  // Persist to localStorage whenever stage changes
  useEffect(() => {
    try { localStorage.setItem(LS_KEY, stageIdx); } catch {}
  }, [stageIdx]);

  // Scroll to top on stage change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [stageIdx]);

  const [toastMsg, setToastMsg] = useState(null);
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleNextClick = () => {
    if (stage === 'makewish') {
      const savedWish = localStorage.getItem('birthday_manifestation') || '';
      if (!savedWish.trim()) {
        showToast("Please make a wish before proceeding! ✨");
        return; // Block navigation
      }
    }
    // allow navigation
    next();
  };

  const canGoBack = stageIdx > 0;
  const canGoNext = stageIdx < STAGES.length - 1;

  return (
    <>
      <div key={stage} style={{ minHeight: '100vh' }}>
        {stage === 'gift'      && <GiftBox         onNext={next} />}
        {stage === 'question'  && <QuestionLock    onNext={next} />}
        {stage === 'loading'   && <LoadingScreen   onNext={next} />}
        {stage === 'thankyou'  && <ThankYou        onNext={next} />}
        {stage === 'reveal'    && <BirthdayReveal  onNext={next} />}
        {stage === 'makewish'  && <MakeAWish       onNext={next} />}
        {stage === 'memories'  && <MemoryCarousel  onNext={next} />}
        {stage === 'balloons'  && <BalloonSurprise onNext={next} />}
        {stage === 'puzzle'    && <PuzzleGame      onNext={next} />}
        {stage === 'scratch'   && <ScratchCard     onNext={next} />}
        {stage === 'ending'    && <EndingScreen />}
      </div>

      {/* ── Floating stage navigation — top-right arrows only ── */}
      <nav className="stage-nav" aria-label="Stage navigation">
        <button
          className={`stage-nav-btn nav-prev ${canGoBack ? 'visible' : ''}`}
          onClick={prev}
          disabled={!canGoBack}
          aria-label="Previous stage"
          title="Go back"
        >
          <FaArrowLeft />
        </button>

        <button
          className={`stage-nav-btn nav-next ${canGoNext ? 'visible' : ''}`}
          onClick={handleNextClick}
          disabled={!canGoNext}
          aria-label="Next stage"
          title="Go forward"
        >
          <FaArrowRight />
        </button>
      </nav>

      {/* ── Toast Notification ── */}
      <div className={`global-toast ${toastMsg ? 'toast-visible' : ''}`}>
        {toastMsg}
      </div>
    </>
  );
}
