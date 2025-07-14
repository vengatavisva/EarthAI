// src/App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './MapComponent';
import ResultsDashboard from './ResultsDashboard';
import Header from './Header';
import axios from 'axios';
import './App.css';
import About from './About';

function App() {
  const [data, setData] = useState({
    location: { lat: 0, lon: 0 },
    weather: {
      temperature: 0,
      wind_speed: 0,
      pressure: 0,
      humidity: 0
    },
    fire: {
      fire_count: 0,
      avg_frp: 0,
      max_frp: 0,
      avg_confidence: 0,
      avg_brightness: 0
    },
    co2: 0,
    no2: 0,
    alerts: {
      co2: "⏳ Waiting...",
      no2: "⏳ Waiting..."
    },
    ghg_causes: ["📄 No causes detected yet. Please select a location."],
    ghg_effects: ["💡 Effects will be displayed after prediction."],
    precautions: ["🟢 General advice: Stay informed and check local updates."]
  });

  const [loading, setLoading] = useState(false);

  const handleMapClick = async ({ lat, lng }) => {
    try {
      setLoading(true);
      const response = await axios.post('https://ghg-api.onrender.com/predict/', {
        lat: lat,
        lon: lng
      });
      setData({
        ...response.data,
        location: { lat, lon: lng }
      });
    } catch (err) {
      console.error('API error:', err);
      alert('Failed to fetch prediction data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 scroll-smooth">
        <Header />

        <main className="pt-28 px-4 space-y-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MapComponent onSelect={handleMapClick} loading={loading} />
                  <ResultsDashboard data={data} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
