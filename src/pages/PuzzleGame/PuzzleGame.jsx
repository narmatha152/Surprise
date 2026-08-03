import { useState, useCallback, useEffect } from 'react';
import { puzzleImage, uiText } from '../../data/birthdayData';
import Confetti from '../../components/Confetti/Confetti';
import { useLang } from '../../context/LanguageContext';
import './PuzzleGame.css';

const GRID = 3;
const TOTAL = GRID * GRID;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isSolved(pieces) {
  return pieces.every((p, i) => p === i);
}

// Slice image into GRID×GRID equal pieces using Canvas
// Slices the full image (no cropping)
function sliceImage(img) {
  const fullW = img.naturalWidth;
  const fullH = img.naturalHeight;

  const pw = Math.floor(fullW / GRID);
  const ph = Math.floor(fullH / GRID);
  const urls = [];

  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const canvas = document.createElement('canvas');
      canvas.width  = pw;
      canvas.height = ph;
      canvas.getContext('2d').drawImage(
        img,
        col * pw, row * ph, pw, ph,  // source region (full image)
        0, 0, pw, ph                 // dest (full piece)
      );
      urls.push(canvas.toDataURL('image/jpeg', 0.93));
    }
  }
  return urls;
}

export default function PuzzleGame({ onNext }) {
  const { lang } = useLang();
  const t = uiText[lang];
  const [pieces, setPieces]       = useState(() => shuffle(Array.from({ length: TOTAL }, (_, i) => i)));
  const [slices, setSlices]       = useState([]);      // 9 pre-sliced piece images
  const [pieceAR, setPieceAR]     = useState(1);       // width/height ratio of one piece
  const [selected, setSelected]   = useState(null);
  const [dragging, setDragging]   = useState(null);
  const [solved, setSolved]       = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNext, setShowNext]   = useState(false);

  // Load image → canvas-slice it (full image)
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const pw = Math.floor(img.naturalWidth  / GRID);
      const ph = Math.floor(img.naturalHeight / GRID);
      setPieceAR(pw / ph);
      setSlices(sliceImage(img));
    };
    img.src = puzzleImage;
  }, []);

  const swap = useCallback((i, j) => {
    if (i === j) return;
    setPieces(prev => {
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      if (isSolved(next)) {
        setTimeout(() => {
          setSolved(true);
          setShowConfetti(true);
          setTimeout(() => setShowNext(true), 1500);
        }, 200);
      }
      return next;
    });
  }, []);

  const handleTap = (idx) => {
    if (solved) return;
    if (selected === null) { setSelected(idx); }
    else                   { swap(selected, idx); setSelected(null); }
  };

  const handleDragStart = (idx) => setDragging(idx);
  const handleDrop      = (idx) => {
    if (dragging !== null && dragging !== idx) swap(dragging, idx);
    setDragging(null);
  };

  const handleReset = () => {
    setPieces(shuffle(Array.from({ length: TOTAL }, (_, i) => i)));
    setSelected(null);
    setSolved(false);
    setShowConfetti(false);
    setShowNext(false);
  };

  return (
    <div className="stage-wrapper puzzle-stage stage-enter">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      {showConfetti && <Confetti active key="puzzle-confetti" count={100} />}

      <div className="puzzle-container">
        <p className="puzzle-eyebrow">{t.puzEyebrow}</p>
        <h2 className="puzzle-heading gradient-text">
          {t.puzHeading}
        </h2>
        <p className="puzzle-hint">
          {window.matchMedia('(pointer: coarse)').matches
            ? t.puzHintCoarse
            : t.puzHintFine}
        </p>

        {slices.length === 0 && (
          <div className="puzzle-loading">{t.puzLoading}</div>
        )}

        {slices.length > 0 && (
          <div
            className={`puzzle-grid ${solved ? 'solved' : ''}`}
            style={{ '--ar': pieceAR }}
          >
            {pieces.map((pieceIdx, cellIdx) => {
              const isSelected = selected === cellIdx;
              return (
                <div
                  key={cellIdx}
                  className={`puzzle-cell ${isSelected ? 'cell-selected' : ''} ${dragging === cellIdx ? 'cell-dragging' : ''}`}
                  draggable
                  onDragStart={() => handleDragStart(cellIdx)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(cellIdx)}
                  onClick={() => handleTap(cellIdx)}
                  onTouchEnd={(e) => { e.preventDefault(); handleTap(cellIdx); }}
                >
                  <img
                    src={slices[pieceIdx]}
                    alt={`piece ${pieceIdx + 1}`}
                    className="piece-img"
                    draggable={false}
                  />
                  {isSelected && <div className="cell-select-ring" />}
                </div>
              );
            })}
          </div>
        )}

        {solved ? (
          <div className="puzzle-success">
            <div className="success-emoji">🎉</div>
            <p className="success-text gradient-text">{t.puzSuccess}</p>
            <p className="puzzle-caption-text">{t.puzCaption}</p>
            {showNext && (
              <button className="btn-glow" onClick={onNext}>
                {t.puzFinalBtn}
              </button>
            )}
          </div>
        ) : (
          slices.length > 0 && (
            <button className="reset-btn" onClick={handleReset}>{t.puzShuffleBtn}</button>
          )
        )}
      </div>
    </div>
  );
}
