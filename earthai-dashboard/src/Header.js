// src/Header.js
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState('home');

  const handleClick = (section) => {
    setActive(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const buttonStyle = (name) =>
    `px-5 py-2 rounded-md font-semibold shadow transition-all duration-300 ${
      active === name || location.pathname === (name === 'home' ? '/' : `/${name}`)
        ? 'bg-gradient-to-r from-green-500 to-green-700 text-white'
        : 'bg-gray-200 hover:bg-gray-400 text-black'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white backdrop-blur-md border-b border-gray-200">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3">
        <img src="/GHG_logo.png" alt="Logo" className="h-9 w-9" />
        <div>
          <h1 className="text-xl font-extrabold text-green-700 tracking-wide">GHG-FuseNet</h1>
          <p className="text-xs text-gray-500 -mt-1">Live Forecasts. Smarter Alerts. Safer Cities.</p>
        </div>
      </div>

      {/* Nav Buttons */}
      <nav className="flex items-center space-x-4">
        <Link to="/" onClick={() => handleClick('home')} className={buttonStyle('home')}>
          Home
        </Link>
        <Link to="/about" onClick={() => handleClick('about')} className={buttonStyle('about')}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
