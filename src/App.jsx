import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import MarketPrice from './pages/MarketPrice';
import GovernmentSchemes from './pages/GovernmentSchemes';
import Crops from './pages/Crops';
import Community from './pages/Community';
import AIChatbot from './pages/AIChatbot';

function App() {
  return (
    <div className="w-screen min-h-screen m-0 p-0 overflow-x-hidden">
      <Navbar />
      <div className="w-full m-0 p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/market-price" element={<MarketPrice />} />
          <Route path="/schemes" element={<GovernmentSchemes />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/community" element={<Community />} />
          <Route path="/chatbot" element={<AIChatbot />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;