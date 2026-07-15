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
  const activeId = useScrollSpy(navLinks.map((link) => link.id));

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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 shadow-lg shadow-slate-900/10'
          : 'border-slate-100'
      }`}
    >
      <div className="container-mx container-px">
        <div className="flex h-[78px] items-center justify-between lg:h-[92px]">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="ScanVX Solutions home"
          >
            <img
              src="/images/scanvx-logo.svg"
              alt="ScanVX Solutions"
              className="h-[58px] w-auto sm:h-[64px] lg:h-[72px]"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  activeId === link.id
                    ? 'text-slate-950'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-blue-600" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex"
          >
            Free Consultation
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mb-4 flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl lg:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  activeId === link.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white"
            >
              Free Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
