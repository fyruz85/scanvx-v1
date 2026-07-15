import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Solutions' },
  { id: 'why', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#06152d]/90 shadow-xl shadow-black/20 backdrop-blur-xl'
          : 'bg-[#071a37]/55 backdrop-blur-sm'
      }`}
    >
      <div className="container-mx container-px">
        <div className="flex h-[72px] items-center justify-between lg:h-[84px]">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label="ScanVX Solutions home"
          >
            <img
              src="/images/scanvx-logo.svg"
              alt="ScanVX Solutions"
              className="h-11 w-auto sm:h-12 lg:h-14"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  activeId === link.id ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[#2ea8ff]" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden items-center rounded-lg bg-[#147cf0] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-[#268cff] lg:inline-flex"
          >
            Free Consultation
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mb-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#071a37]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  activeId === link.id
                    ? 'bg-blue-500/15 text-blue-300'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 rounded-lg bg-[#147cf0] px-5 py-3 text-sm font-bold text-white"
            >
              Free Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
