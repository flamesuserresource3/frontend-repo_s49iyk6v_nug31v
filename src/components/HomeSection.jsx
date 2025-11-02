import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HomeSection({ onSeeWork }) {
  return (
    <section
      aria-label="Home"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
          Your brand's pulse, <span className="text-indigo-400">pixel by pixel</span>.
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We craft bold identities and immersive digital experiences that move people.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={onSeeWork}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 font-medium shadow-lg shadow-indigo-900/30 transition-colors"
          >
            See Our Work
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
