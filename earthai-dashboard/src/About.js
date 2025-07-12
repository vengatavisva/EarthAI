import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white via-gray-100 to-white text-gray-800 py-16 px-6 md:px-16 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <h2 className="text-3xl font-bold text-green-700 text-center">About GHG-FuseNet</h2>

        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
          <strong>GHG-FuseNet</strong> is an innovative real-time environmental monitoring platform that predicts
          greenhouse gas levels using AI by fusing satellite imagery, NASA FIRMS fire data, and meteorological data.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500 hover:scale-105 transition">
            <h3 className="font-semibold text-lg text-green-700 mb-2">🌐 Satellite & Sensor Fusion</h3>
            <p className="text-sm text-gray-600">
              Combines NASA satellite imagery and real-time sensor input for accurate carbon emissions tracking and GHG forecasting.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-500 hover:scale-105 transition">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">🧠 AI-Powered Predictions</h3>
            <p className="text-sm text-gray-600">
              Uses deep learning models to estimate CO₂ and NO₂ levels and generate air quality alerts for informed decision-making.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-yellow-500 hover:scale-105 transition">
            <h3 className="font-semibold text-lg text-yellow-700 mb-2">📊 Interactive Visual Dashboard</h3>
            <p className="text-sm text-gray-600">
              Engaging visualizations including bar charts, maps, and alerts help track environmental trends in real-time.
            </p>
          </div>
        </div>

        {/* AI Model Architecture */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">Advanced AI Model Architecture</h3>
          <p className="text-center text-gray-600 max-w-4xl mx-auto">
            Our cutting-edge machine learning system integrates multi-source satellite data, real-time weather patterns, and temporal
            analysis to deliver precise greenhouse gas predictions with unprecedented accuracy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-green-600 font-semibold mb-2">Model Architecture</h4>
              <p><strong>Random Forest Regressor</strong><br />Ensemble learning with superior accuracy</p>
              <ul className="text-sm mt-3 text-gray-600">
                <li>• Estimators: 100 Trees</li>
                <li>• Cross Validation: 5-Fold</li>
                <li>• Feature Importance: Enabled</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-green-600 font-semibold mb-2">Input Features</h4>
              <ul className="text-sm text-gray-600">
                <li><strong>Satellite Data</strong>: Fire Count, FRP, Brightness & Confidence</li>
                <li><strong>Weather Data</strong>: Temperature, Humidity, Wind Speed & Pressure</li>
                <li><strong>Temporal Factors</strong>: Time of Day, Day of Week</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-green-600 font-semibold mb-2">Performance Metrics</h4>
              <p className="text-sm text-gray-600">Prediction Accuracy:</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li>CO₂ R²: <strong className="text-green-700">0.94</strong></li>
                <li>NO₂ R²: <strong className="text-blue-700">0.89</strong></li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">Status Thresholds:</p>
              <ul className="text-sm text-gray-600">
                <li>CO₂ Warning: 400 ppm</li>
                <li>CO₂ Critical: 450 ppm</li>
                <li>NO₂ Warning: 40 ppb</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Suomi-NPP Satellite Section */}
<div className="mt-16">
  <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">Advanced Satellite Integration</h3>
  <p className="text-center text-gray-600 max-w-4xl mx-auto">
    Leveraging state-of-the-art satellite technology and NASA's Fire Information for Resource Management System to provide real-time,
    high-resolution environmental monitoring capabilities.
  </p>

  <div className="bg-white shadow-md rounded-xl p-6 mt-6 grid md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 className="text-green-700 font-semibold text-lg mb-2">Suomi-NPP Satellite</h4>
      <p className="text-sm text-gray-600">
        The Suomi National Polar-orbiting Partnership satellite provides comprehensive 2x daily global coverage, 
        serving as the backbone for fire and climate tracking worldwide. Its VIIRS instrument enables thermal 
        anomaly detection with unprecedented accuracy and reliability for environmental monitoring.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
          <div className="text-xl font-bold text-green-700">2x</div>
          <div className="text-sm text-gray-600">Daily Coverage</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="text-xl font-bold text-blue-700">824km</div>
          <div className="text-sm text-gray-600">Orbital Altitude</div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <img
        src="/sat2.jpg" // Your actual uploaded path
        alt="Suomi NPP Satellite"
        className="rounded-lg shadow-md w-full max-w-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>


        {/* VIIRS Instrument Section */}
        <div className="mt-16">
          <div className="bg-white shadow-md rounded-xl p-6 grid md:grid-cols-2 gap-6 items-center">
            <img
              src="sat1.png"
              alt="VIIRS Instrument"
              className="rounded-lg shadow-md"
            />
            <div>
              <h4 className="text-green-700 font-semibold text-lg mb-2">🛰️ VIIRS Instrument</h4>
              <p className="text-sm text-gray-600">
                The Visible Infrared Imaging Radiometer Suite (VIIRS) represents cutting-edge satellite sensor technology,
                delivering ultra-high resolution fire detection data to NASA FIRMS in near real-time. This enables rapid
                response to environmental changes and precise greenhouse gas monitoring.
              </p>
              <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-100">
                <h5 className="text-md font-semibold text-green-700 mb-2">🔧 Technical Specifications</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Spatial Resolution:</strong> 375m (Thermal infrared bands)</li>
                  <li><strong>Update Frequency:</strong> Every 3 hours (Global coverage rate)</li>
                  <li><strong>Data Provider:</strong> NASA FIRMS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Developers */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">Meet the Developers</h3>
          <p className="text-center text-gray-600 max-w-4xl mx-auto">
            Our multidisciplinary team combines expertise in AI, web development, and environmental science to create cutting-edge monitoring solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <img src="/sudh.png" alt="Sudharsan" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-lg">S. Sudharsan</h4>
              <p className="text-green-600 text-sm mb-2">AI Model Developer</p>
              <p className="text-sm text-gray-600">
                Built and trained the entire AI model, handled dataset integration, feature engineering, and deployment of real-time prediction logic.
              </p>
              <div className="text-xs mt-2 text-gray-500 flex flex-wrap gap-1 justify-center">
                <span>Machine Learning</span><span>Python</span><span>TensorFlow</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <img src="/vis.jpg" alt="Vengata visva" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-lg">S. Vengata Visva</h4>
              <p className="text-green-600 text-sm mb-2">Fullstack Developer</p>
              <p className="text-sm text-gray-600">
                Designed and developed the frontend UI using modern libraries, handled dashboard layout, graphing tools, and interactivity.
              </p>
              <div className="text-xs mt-2 text-gray-500 flex flex-wrap gap-1 justify-center">
                <span>React</span><span>TypeScript</span><span>UI/UX</span><span>Node.js</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <img src="/roh.jpg" alt="Rohith" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-lg">B. Rohith</h4>
              <p className="text-green-600 text-sm mb-2">Fullstack Developer</p>
              <p className="text-sm text-gray-600">
                Implemented FastAPI backend, integrated APIs, managed real-time data flow, and connected the ML model inference to the frontend.
              </p>
              <div className="text-xs mt-2 text-gray-500 flex flex-wrap gap-1 justify-center">
                <span>FastAPI</span><span>Python</span><span>API Integration</span><span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
