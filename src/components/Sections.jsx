import React from 'react';
import { Award, Star, Trophy, Palette, Code, PenTool, Smartphone, MapPin, Linkedin, Mail, Instagram } from 'lucide-react';

function SectionWrapper({ id, active, children }) {
  return (
    <section
      id={id}
      className={`${active ? 'block' : 'hidden'} py-20 sm:py-24`}
      aria-hidden={!active}
    >
      {children}
    </section>
  );
}

export default function Sections({ active }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Projects */}
      <SectionWrapper id="projects" active={active === 'Projects'}>
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-gray-400">A selection of recent work and experiments.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <article key={n} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <img
                src={`https://placehold.co/600x400/111827/FFFFFF?text=Project+${n}`}
                alt={`Project ${n}`}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">Project Title {n}</h3>
                <p className="mt-1 text-sm text-gray-300">
                  A short description that highlights goals, process, and results.
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Achievements */}
      <SectionWrapper id="achievements" active={active === 'Achievements'}>
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
          <p className="mt-2 text-gray-400">Milestones that make us proud.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="shrink-0 text-indigo-400"><Award /></div>
            <div>
              <h3 className="text-white font-semibold">Design Award 2024</h3>
              <p className="text-gray-300 text-sm">Recognized for outstanding visual identity in tech.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="shrink-0 text-indigo-400"><Star /></div>
            <div>
              <h3 className="text-white font-semibold">Top-rated Agency</h3>
              <p className="text-gray-300 text-sm">Consistently earning 5-star client reviews.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="shrink-0 text-indigo-400"><Trophy /></div>
            <div>
              <h3 className="text-white font-semibold">Innovation Trophy</h3>
              <p className="text-gray-300 text-sm">Awarded for interactive web experience excellence.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper id="services" active={active === 'Services'}>
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-2 text-gray-400">From strategy to execution — we build with intent.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-indigo-400"><Palette /></div>
            <h3 className="mt-3 text-white font-semibold">Branding</h3>
            <p className="mt-1 text-sm text-gray-300">Identity systems, visual language, and guidelines.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-indigo-400"><Code /></div>
            <h3 className="mt-3 text-white font-semibold">Web Development</h3>
            <p className="mt-1 text-sm text-gray-300">High-performance websites and web apps.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-indigo-400"><PenTool /></div>
            <h3 className="mt-3 text-white font-semibold">UI/UX Design</h3>
            <p className="mt-1 text-sm text-gray-300">Human-centered interfaces that convert.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-indigo-400"><Smartphone /></div>
            <h3 className="mt-3 text-white font-semibold">Mobile Experience</h3>
            <p className="mt-1 text-sm text-gray-300">Responsive design and progressive web apps.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* About */}
      <SectionWrapper id="about" active={active === 'About'}>
        <header className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
        </header>
        <p className="text-gray-300 max-w-3xl">
          PixelPulse Studio is a creative technology agency crafting memorable brands and immersive
          digital experiences. Our mission is to combine strategic thinking with bold design and
          interactive engineering to help brands connect deeply with their audiences.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-3">Location</h3>
            <div className="flex items-start gap-3 text-gray-300"><MapPin className="text-indigo-400" /> Mumbai, India</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <div className="flex flex-col gap-3 text-gray-300">
              <a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#" aria-label="LinkedIn">
                <Linkedin className="text-indigo-400" /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="mailto:hello@pixelpulse.studio" aria-label="Email">
                <Mail className="text-indigo-400" /> Email
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white transition-colors" href="#" aria-label="Instagram">
                <Instagram className="text-indigo-400" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
