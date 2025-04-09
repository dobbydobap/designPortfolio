import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Recruiter from './components/Recruiter';
import LostKid from './components/LostKid';
import Stalker from './components/Stalker'; 
import Investor from './components/Investor';
import TerminalFun from './components/sections/TerminalFun';
import ShauryaExe from './components/sections/ShauryaExe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/lost-kid" element={<LostKid />} />
        <Route path="/lost-kid/terminal-fun" element={<TerminalFun />} />
        <Route path="/lost-kid/shaurya-exe" element={<ShauryaExe />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </Router>
  );
}

export default App;