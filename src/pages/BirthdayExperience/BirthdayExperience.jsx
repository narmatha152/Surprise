import { useState } from 'react';
import '../../styles/theme.css';
import '../../styles/global.css';

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

export default function BirthdayExperience() {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = STAGES[stageIdx];
  const next = () => setStageIdx(i => Math.min(i + 1, STAGES.length - 1));

  return (
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
  );
}
