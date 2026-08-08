import './styles/theme.css';
import './styles/global.css';
import { LanguageProvider } from './context/LanguageContext';
import { MusicProvider }    from './context/MusicContext';
import LangToggle           from './components/LangToggle/LangToggle';
import MusicPlayer          from './components/MusicPlayer/MusicPlayer';
import BirthdayExperience   from './pages/BirthdayExperience/BirthdayExperience';

export default function App() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <LangToggle />
        <BirthdayExperience />
        {/* Floating music control — rendered outside page flow so it persists across all stages */}
        <MusicPlayer />
      </MusicProvider>
    </LanguageProvider>
  );
}
