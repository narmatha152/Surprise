import { useEffect, useRef } from 'react';
import './Particles.css';

export default function Particles({ count = 40, color = '#FF008C' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${i % 3 === 0 ? '#FFD166' : i % 3 === 1 ? color : 'rgba(255,255,255,0.8)'};
        animation-duration: ${Math.random() * 8 + 6}s;
        animation-delay: ${Math.random() * 5}s;
        opacity: ${Math.random() * 0.6 + 0.2};
      `;
      container.appendChild(p);
    }
  }, [count, color]);

  return <div ref={containerRef} className="particles-container" aria-hidden="true" />;
}
