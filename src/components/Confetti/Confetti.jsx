import { useEffect, useRef } from 'react';
import './Confetti.css';

const COLORS = ['#FFD166','#FF008C','#C90078','#FFFFFF','#F6C453','#FF6B9D','#C77DFF'];

export default function Confetti({ active = true, count = 80 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const isCircle = Math.random() > 0.5;
      piece.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        border-radius: ${isCircle ? '50%' : '2px'};
        animation-duration: ${Math.random() * 2 + 2}s;
        animation-delay: ${Math.random() * 1.5}s;
        --rotate: ${Math.random() * 720 - 360}deg;
        --drift: ${(Math.random() - 0.5) * 200}px;
      `;
      container.appendChild(piece);
    }

    const timer = setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 5000);
    return () => clearTimeout(timer);
  }, [active, count]);

  return <div ref={containerRef} className="confetti-container" aria-hidden="true" />;
}
