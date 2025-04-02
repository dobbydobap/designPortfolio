import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Recruiter from './components/Recruiter';
import AspiringDeveloper from './components/AspiringDeveloper';
import Stalker from './components/Stalker'; 
import Investor from './components/Investor'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/aspiring-developer" element={<AspiringDeveloper />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </Router>
  );
}

export default App;