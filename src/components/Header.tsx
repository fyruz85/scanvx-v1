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
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div
        className={`mx-auto max-w-[1280px] rounded-[20px] border bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.18)]'
            : 'border-white/80 shadow-[0_14px_38px_rgba(6,24,54,0.14)]'
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-[66px] lg:h-[70px]' : 'h-[72px] lg:h-[78px]'
            }`}
          >
            <div className="flex min-w-0 items-center gap-4">
              <button
                onClick={() => scrollTo('home')}
                className="flex shrink-0 items-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="ScanVX Solutions home"
              >
                <img
                  src="/images/scanvx-logo.svg"
                  alt="ScanVX Solutions"
                  className={`w-auto transition-all duration-300 ${
                    scrolled
                      ? 'h-[48px] sm:h-[52px] lg:h-[54px]'
                      : 'h-[52px] sm:h-[56px] lg:h-[60px]'
                  }`}
                />
              </button>

              <span className="hidden h-8 w-px bg-slate-200 xl:block" aria-hidden="true" />
            </div>

            <nav
              className="hidden items-center gap-1 rounded-2xl bg-slate-50/80 p-1 lg:flex"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeId === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100'
                        : 'text-slate-600 hover:bg-white hover:text-slate-950 hover:shadow-sm'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_28px_rgba(37,99,235,0.34)] lg:inline-flex"
            >
              Free Consultation
            </button>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:bg-blue-50 hover:text-blue-700 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <nav
              className="mb-3 border-t border-slate-100 pb-1 pt-3 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 rounded-2xl bg-slate-50/80 p-2">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;

                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                          : 'text-slate-700 hover:bg-white hover:text-slate-950'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => scrollTo('contact')}
                  className="mt-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                >
                  Free Consultation
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
