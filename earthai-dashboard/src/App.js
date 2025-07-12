// src/App.js
import { useState } from 'react';
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
    }
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
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      <Header />

      <main className="pt-28 px-4 space-y-6">
        {/* Add padding top for fixed header space */}
        <MapComponent onSelect={handleMapClick} loading={loading} />
        <ResultsDashboard data={data} />

        {/* ✅ Wrapped About with section and id="about" for scroll linking */}
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
