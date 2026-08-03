import { useEffect, useRef } from 'react';
import './Fireflies.css';

export default function Fireflies({ count = 25 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const ff = document.createElement('div');
      ff.className = 'firefly';
      const size = Math.random() * 5 + 3;
      ff.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${Math.random() * 10 + 8}s;
        animation-delay: ${Math.random() * 8}s;
        --tx: ${(Math.random() - 0.5) * 200}px;
        --ty: ${(Math.random() - 0.5) * 200}px;
      `;
      container.appendChild(ff);
    }
  }, [count]);

  return <div ref={containerRef} className="fireflies-container" aria-hidden="true" />;
}
