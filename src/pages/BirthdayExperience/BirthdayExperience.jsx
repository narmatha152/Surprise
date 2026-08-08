import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../../styles/theme.css';
import '../../styles/global.css';
import './BirthdayExperience.css';

import GiftBox         from '../GiftBox/GiftBox';
import QuestionLock    from '../QuestionLock/QuestionLock';
import LoadingScreen   from '../LoadingScreen/LoadingScreen';
import BirthdayReveal  from '../BirthdayReveal/BirthdayReveal';
import MemoryCarousel  from '../MemoryCarousel/MemoryCarousel';
import BalloonSurprise from '../BalloonSurprise/BalloonSurprise';
import PuzzleGame      from '../PuzzleGame/PuzzleGame';
import ScratchCard     from '../ScratchCard/ScratchCard';
import EndingScreen    from '../EndingScreen/EndingScreen';

const STAGES = [
  'gift',
  'question',
  'loading',
  'reveal',
  'memories',
  'balloons',
  'puzzle',
  'scratch',
  'ending',
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

  const canGoBack = stageIdx > 0;
  const canGoNext = stageIdx < STAGES.length - 1;

  return (
    <>
      <div key={stage} style={{ minHeight: '100vh' }}>
        {stage === 'gift'      && <GiftBox         onNext={next} />}
        {stage === 'question'  && <QuestionLock    onNext={next} />}
        {stage === 'loading'   && <LoadingScreen   onNext={next} />}
        {stage === 'reveal'    && <BirthdayReveal  onNext={next} />}
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
          onClick={next}
          disabled={!canGoNext}
          aria-label="Next stage"
          title="Go forward"
        >
          <FaArrowRight />
        </button>
      </nav>
    </>
  );
}
