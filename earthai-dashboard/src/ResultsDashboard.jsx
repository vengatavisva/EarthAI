import React from 'react';
import CurrentLevelsChart from './CurrentLevelsChart';
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from 'react-icons/wi';
import {
  MdLocalFireDepartment,
  MdBrightness5,
  MdSpeed,
  MdThumbsUpDown,
} from 'react-icons/md';
import { FaLeaf, FaWind } from 'react-icons/fa';

export default function ResultsDashboard({ data }) {
  if (!data) return <div className="p-6 text-gray-700">No data available.</div>;

  const { weather = {}, fire = {}, co2 = 0, no2 = 0, alerts = {} } = data;

  return (
    <div className="p-6 space-y-8 text-gray-800">
      {/* Weather Section */}
      <SectionHeader icon={<WiThermometer size={24} />} title="Weather Data" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard title="Temperature" value={`${weather.temperature ?? 'N/A'} °C`} icon={<WiThermometer size={20} />} />
        <InfoCard title="Humidity" value={`${weather.humidity ?? 'N/A'} %`} icon={<WiHumidity size={20} />} />
        <InfoCard title="Wind Speed" value={`${weather.wind_speed ?? 'N/A'} km/h`} icon={<WiStrongWind size={20} />} />
        <InfoCard title="Pressure" value={`${weather.pressure ?? 'N/A'} hPa`} icon={<WiBarometer size={20} />} />
      </div>

      {/* Fire Data Section */}
      <SectionHeader icon={<MdLocalFireDepartment size={24} />} title="NASA FIRMS Fire Data" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <InfoCard title="Fire Count" value={fire.fire_count ?? 'N/A'} icon={<MdLocalFireDepartment size={20} />} />
        <InfoCard title="Average FRP" value={`${(fire.avg_frp ?? 0).toFixed(1)} MW`} icon={<MdSpeed size={20} />} />
        <InfoCard title="Max FRP" value={`${fire.max_frp ?? 'N/A'} MW`} icon={<MdSpeed size={20} />} />
        <InfoCard title="Confidence" value={`${fire.avg_confidence ?? 'N/A'} %`} icon={<MdThumbsUpDown size={20} />} />
        <InfoCard title="Brightness" value={`${(fire.avg_brightness ?? 0).toFixed(1)} K`} icon={<MdBrightness5 size={20} />} />
      </div>

      {/* AI Model Predictions */}
      <SectionHeader icon={<FaLeaf size={20} />} title="AI Model Predictions" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PredictionCard
          title="CO₂ Concentration"
          value={`${co2 ?? 0} ppm`}
          icon={<FaLeaf size={20} />}
          badge={alerts.co2?.includes('High') ? 'Warning' : 'Safe'}
        />
        <PredictionCard
          title="NO₂ Concentration"
          value={`${no2 ?? 0} ppb`}
          icon={<FaWind size={20} />}
          badge={alerts.no2?.includes('Hazardous') ? 'Warning' : 'Safe'}
        />
        <PredictionCard
          title="Air Quality Index"
          value={calculateAQI(co2, no2)}
          icon={<WiStrongWind size={20} />}
          badge="Safe"
        />
      </div>

      {/* Chart Section */}
      <CurrentLevelsChart data={data} />
    </div>
  );
}

// Section Header
function SectionHeader({ icon, title }) {
  return (
    <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
      {icon}
      {title}
    </h2>
  );
}

// Info Card
function InfoCard({ title, value, icon }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <div className="text-sm text-gray-600 flex justify-between items-center">
        {title}
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="text-2xl font-bold mt-2 text-gray-900">{value}</div>
    </div>
  );
}

// Prediction Card with badge
function PredictionCard({ title, value, icon, badge }) {
  const badgeColor =
    badge === 'Warning'
      ? 'bg-yellow-400 text-yellow-900'
      : badge === 'Safe'
      ? 'bg-green-500 text-white'
      : 'bg-gray-400 text-white';

  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <div className="text-sm text-gray-600 flex justify-between items-center">
        {title}
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <span className={`text-xs px-3 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </div>
  );
}

// Fake AQI calculator (can be replaced with actual logic)
function calculateAQI(co2 = 0, no2 = 0) {
  return Math.round((co2 / 10 + no2 * 2) / 2);
}
