import React from 'react';
import CurrentLevelsChart from './CurrentLevelsChart';
import {
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Flame,
  Zap,
  Target,
  Sun,
  Brain,
  Leaf,
  AlertCircle,
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function ResultsDashboard({ data }) {
  if (!data) return <div className="p-6 text-gray-700">No data available.</div>;

  const {
    weather = {},
    fire = {},
    co2 = 0,
    no2 = 0,
    alerts = {},
    ghg_causes = [],
    ghg_effects = [],
    precautions = [],
    disaster_risks = {}
  } = data;

  return (
    <div className="p-6 space-y-8 text-gray-800">
      {/* Weather Section */}
      <SectionHeader icon={<Thermometer size={24} />} title="Weather Data" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard title="Temperature" value={`${weather.temperature ?? 'N/A'} °C`} icon={<Thermometer size={20} />} />
        <InfoCard title="Humidity" value={`${weather.humidity ?? 'N/A'} %`} icon={<Droplets size={20} />} />
        <InfoCard title="Wind Speed" value={`${weather.wind_speed ?? 'N/A'} km/h`} icon={<Wind size={20} />} />
        <InfoCard title="Pressure" value={`${weather.pressure ?? 'N/A'} hPa`} icon={<Gauge size={20} />} />
      </div>

      {/* Fire Data Section */}
      <SectionHeader icon={<Flame size={24} />} title="NASA FIRMS Fire Data" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <InfoCard title="Fire Count" value={fire.fire_count ?? 'N/A'} icon={<Flame size={20} />} />
        <InfoCard title="Average FRP" value={`${(fire.avg_frp ?? 0).toFixed(1)} MW`} icon={<Zap size={20} />} />
        <InfoCard title="Max FRP" value={`${fire.max_frp ?? 'N/A'} MW`} icon={<Target size={20} />} />
        <InfoCard title="Confidence" value={`${fire.avg_confidence ?? 'N/A'} %`} icon={<Target size={20} />} />
        <InfoCard title="Brightness" value={`${(fire.avg_brightness ?? 0).toFixed(1)} K`} icon={<Sun size={20} />} />
      </div>

      {/* AI Model Predictions */}
      <SectionHeader icon={<Brain size={24} />} title="AI Model Predictions" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PredictionCard
          title="CO₂ Concentration"
          value={`${co2 ?? 0} ppm`}
          icon={<Leaf size={20} />}
          badge={alerts.co2?.includes('High') ? 'Warning' : 'Safe'}
        />
        <PredictionCard
          title="NO₂ Concentration"
          value={`${no2 ?? 0} ppb`}
          icon={<Wind size={20} />}
          badge={alerts.no2?.includes('Hazardous') ? 'Warning' : 'Safe'}
        />
        <PredictionCard
          title="Air Quality Index"
          value={calculateAQI(co2, no2)}
          icon={<Gauge size={20} />}
          badge="Safe"
        />
      </div>

      {/* GHG Insights Section */}
      <GHGInsights
        causes={ghg_causes}
        effects={ghg_effects}
        precautions={precautions}
      />

      {/* Disaster Intelligence Section */}
      <SectionHeader icon={<AlertCircle size={24} />} title="Disaster Intelligence" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RiskCard
          title="🔥 Fire Risk"
          description={disaster_risks.fire_risk?.reason || "No data available."}
          status={disaster_risks.fire_risk?.status || "Unknown"}
        />
        <RiskCard
          title="🌡️ Heatwave"
          description={disaster_risks.heatwave?.reason || "No data available."}
          status={disaster_risks.heatwave?.status || "Unknown"}
        />
        <RiskCard
          title="🌪️ Storm Warning"
          description={disaster_risks.storm_warning?.reason || "No data available."}
          status={disaster_risks.storm_warning?.status || "Unknown"}
        />
        <RiskCard
          title="🌵 Drought Alert"
          description={disaster_risks.drought_alert?.reason || "No data available."}
          status={disaster_risks.drought_alert?.status || "Unknown"}
        />
        <RiskCard
          title="🌫️ Smog Alert"
          description={disaster_risks.smog_alert?.reason || "No data available."}
          status={disaster_risks.smog_alert?.status || "Unknown"}
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
    <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-900 border-b pb-1">
      <span className="text-green-600">{icon}</span>
      {title}
    </h2>
  );
}

// Info Card
function InfoCard({ title, value, icon }) {
  const [val, unit] = String(value).includes(' ')
    ? String(value).split(' ')
    : [value, ''];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-gray-200">
      <div className="text-sm text-gray-500 flex justify-between items-center mb-1">
        <span>{title}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="text-2xl font-semibold text-gray-900">
        {val}
        {unit && (
          <span className="text-sm font-medium text-gray-500 ml-1 align-middle">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

// Prediction Card
function PredictionCard({ title, value, icon, badge }) {
  const [val, unit] = String(value).includes(' ')
    ? String(value).split(' ')
    : [value, ''];

  const badgeStyle =
    badge === 'Warning'
      ? 'bg-yellow-100 text-yellow-800'
      : badge === 'Safe'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-gray-200">
      <div className="text-sm text-gray-500 flex justify-between items-center mb-1">
        <span>{title}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-900">
          {val}
          {unit && (
            <span className="text-sm font-medium text-gray-500 ml-1 align-middle">
              {unit}
            </span>
          )}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${badgeStyle}`}>
          {badge}
        </span>
      </div>
    </div>
  );
}

// GHG Insights
function GHGInsights({ causes = [], effects = [], precautions = [] }) {
  if (causes.length === 0 && effects.length === 0 && precautions.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InsightCard
        title="Causes"
        icon={<AlertCircle size={20} />}
        items={causes}
        color="border-orange-400 bg-orange-50"
      />
      <InsightCard
        title="Effects"
        icon={<Activity size={20} />}
        items={effects}
        color="border-yellow-400 bg-yellow-50"
      />
      <InsightCard
        title="Precautions"
        icon={<ShieldCheck size={20} />}
        items={precautions}
        color="border-green-400 bg-green-50"
      />
    </div>
  );
}

function InsightCard({ title, icon, items, color }) {
  return (
    <div className={`rounded-xl p-4 shadow-sm hover:shadow-md transition border ${color}`}>
      <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
        <span className="text-gray-600">{icon}</span>
        {title}
      </div>
      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
        {items.length > 0 ? (
          items.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li className="text-gray-500 italic">No data available.</li>
        )}
      </ul>
    </div>
  );
}

// Risk Card
function RiskCard({ title, description, status }) {
  const badgeStyles = {
    Alert: 'bg-red-100 text-red-700',
    Caution: 'bg-orange-100 text-orange-700',
    Safe: 'bg-green-100 text-green-700',
    Unknown: 'bg-gray-100 text-gray-600'
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800 text-md">{title}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${badgeStyles[status] || 'bg-gray-100 text-gray-700'}`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// AQI Calculator
function calculateAQI(co2 = 0, no2 = 0) {
  return Math.round((co2 / 10 + no2 * 2) / 2);
}
