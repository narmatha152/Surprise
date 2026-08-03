import { useLang } from '../../context/LanguageContext';
import './LangToggle.css';

export default function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      id="lang-toggle-btn"
      className="lang-toggle"
      onClick={toggle}
      title={lang === 'en' ? 'Switch to Tamil' : 'Switch to English'}
      aria-label="Toggle language"
    >
      <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${lang === 'ta' ? 'active' : ''}`}>த</span>
    </button>
  );
}
