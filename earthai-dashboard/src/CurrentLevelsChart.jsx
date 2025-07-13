import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
  } from 'recharts';
  
export default function CurrentLevelsChart({ data }) {
  if (!data) return null;

  const chartData = [
    { label: 'CO₂ Concentration', value: data.co2 ?? 0, unit: 'ppm' },
    { label: 'NO₂ Concentration', value: data.no2 ?? 0, unit: 'ppb' },
    { label: 'Temperature', value: data.weather?.temperature ?? 0, unit: '°C' },
    { label: 'Humidity', value: data.weather?.humidity ?? 0, unit: '%' },
    { label: 'Active Fire Count', value: data.fire?.fire_count ?? 0, unit: '' },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-3xl shadow-2xl transition hover:shadow-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
        🌿 Environmental Overview
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Real-time summary of key environmental metrics
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis
            dataKey="label"
            angle={-15}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => [`${value} ${props.payload.unit}`, props.payload.label]}
            contentStyle={{ borderRadius: '10px', backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="value" fill="url(#barGradient)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
