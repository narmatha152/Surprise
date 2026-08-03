import './styles/theme.css';
import './styles/global.css';
import { LanguageProvider } from './context/LanguageContext';
import LangToggle from './components/LangToggle/LangToggle';
import BirthdayExperience from './pages/BirthdayExperience/BirthdayExperience';

export default function App() {
  return (
    <LanguageProvider>
      <LangToggle />
      <BirthdayExperience />
    </LanguageProvider>
  );
}
