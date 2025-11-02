import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-gray-400">
          © {year} PixelPulse Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
