import { MapPin } from 'lucide-react';

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'why', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

/** Renders text as SVG to prevent scraping */
function SvgText({
  text,
  fontSize = 14,
  color = '#94a3b8',
}: {
  text: string;
  fontSize?: number;
  color?: string;
}) {
  const width = text.length * fontSize * 0.62;
  return (
    <svg
      viewBox={`0 0 ${width} ${fontSize * 1.4}`}
      style={{ height: `${fontSize * 1.4}px`, width: `${width}px`, display: 'inline-block', verticalAlign: 'middle' }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <text
        x="0"
        y={fontSize * 1.05}
        fill={color}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize={fontSize}
        fontWeight="400"
      >
        {text}
      </text>
    </svg>
  );
}

export function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-mx container-px py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-white">
              Scan<span className="gradient-text">VX</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              We build, secure, and maintain IT infrastructure for businesses
              and institutions across Northern Malaysia.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-400">
              scanvx.my
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="h-4 w-4 shrink-0 text-brand-400 mt-0.5" />
                14, Taman Sayang, 06250 Alor Setar, Kedah
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-brand-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <SvgText text="+6010 544 8902" fontSize={14} color="#94a3b8" />
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <SvgText text="sale@scanvx.com.my" fontSize={14} color="#94a3b8" />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} ScanVX Solution (AS0377850-V). All rights reserved.
          </p>
          <p className="text-xs text-ink-600">
            scanvx.my
          </p>
        </div>
      </div>
    </footer>
  );
}
