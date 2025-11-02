import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'Home', label: 'Home' },
  { key: 'Projects', label: 'Projects' },
  { key: 'Achievements', label: 'Achievements' },
  { key: 'Services', label: 'Services' },
  { key: 'About', label: 'About Us' },
];

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (key) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-3 rounded-xl bg-black/40 backdrop-blur supports-[backdrop-filter]:backdrop-blur border border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => handleNavigate('Home')}
              className="text-lg sm:text-xl font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors"
              aria-label="PixelPulseStudio Home"
            >
              PixelPulse<span className="text-indigo-400">Studio</span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className={
                    `px-2 py-1 text-sm font-medium transition-colors ` +
                    (active === item.key
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-white')
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-gray-200 hover:bg-white/5"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-2">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.key)}
                    className={
                      `text-left w-full px-3 py-2 rounded-lg transition-colors ` +
                      (active === item.key
                        ? 'text-indigo-400 bg-white/5'
                        : 'text-gray-300 hover:text-white hover:bg-white/5')
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
