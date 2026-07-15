import { MapPin, Clock, CheckCircle2, Copy, ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

const ADDRESS = '14, Taman Sayang, 06250 Alor Setar, Kedah';
const MAPS_URL = 'https://maps.google.com/?q=14+Taman+Sayang+06250+Alor+Setar+Kedah';
const WHATSAPP_NUMBER = '60105448902';
const WHATSAPP_MSG = encodeURIComponent(
  'Hi ScanVX! I would like to enquire about your IT services and get a free quote.'
);

const waBenefits = [
  'Fast, direct conversation',
  'Prefilled enquiry message',
  'Continue securely in WhatsApp',
];

/** Renders text as SVG so it can't be selected/copied by bots */
function SvgText({
  text,
  className = '',
  fontSize = 14,
  color = '#e2e8f0',
}: {
  text: string;
  className?: string;
  fontSize?: number;
  color?: string;
}) {
  const width = text.length * fontSize * 0.62;
  return (
    <svg
      viewBox={`0 0 ${width} ${fontSize * 1.4}`}
      className={className}
      style={{ height: `${fontSize * 1.4}px`, width: `${width}px`, display: 'inline-block', verticalAlign: 'middle' }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={undefined}
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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/20"
    >
      {copied ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? 'Copied!' : 'Copy address'}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-600">
            Contact Details
          </span>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Reach out for a free consultation — we respond within 24 hours.
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15 lg:grid lg:grid-cols-2">
          {/* LEFT — dark panel */}
          <Reveal className="relative overflow-hidden bg-ink-900 p-8 sm:p-10 lg:p-12">
            {/* subtle grid bg */}
            <div className="absolute inset-0 hero-grid opacity-40" />
            {/* decorative icon watermark */}
            <div className="pointer-events-none absolute right-4 top-6 opacity-5">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
                <rect x="2" y="2" width="8" height="8" rx="1" />
                <rect x="14" y="2" width="8" height="8" rx="1" />
                <rect x="2" y="14" width="8" height="8" rx="1" />
                <line x1="18" y1="14" x2="18" y2="22" />
                <line x1="14" y1="18" x2="22" y2="18" />
                <line x1="6" y1="6" x2="18" y2="6" />
                <line x1="12" y1="2" x2="12" y2="10" />
              </svg>
            </div>

            <div className="relative space-y-6">
              {/* Address */}
              <Reveal delay={0}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-brand-300" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
                      Operation Office
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-200">
                      {ADDRESS}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <CopyButton text={ADDRESS} />
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-500/50 bg-brand-600/20 px-3 py-1.5 text-xs font-medium text-brand-300 transition-all hover:bg-brand-600/40"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        Open in Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Business Hours */}
              <Reveal delay={80}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock className="h-5 w-5 text-brand-300" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
                      Business Hours
                    </h4>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink-200">
                      {'Monday – Friday: 8am – 10pm\nSaturday & Sunday: Closed'}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Phone - SVG rendered */}
              <Reveal delay={160}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg className="h-5 w-5 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
                      Phone
                    </h4>
                    <div className="mt-1">
                      <SvgText text="+6010 544 8902" fontSize={14} color="#e2e8f0" />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Email - SVG rendered */}
              <Reveal delay={240}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-brand-300" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider">
                      Email
                    </h4>
                    <div className="mt-1">
                      <SvgText text="sale@scanvx.com.my" fontSize={14} color="#e2e8f0" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* RIGHT — light panel */}
          <Reveal delay={150} className="flex flex-col justify-center bg-white p-8 sm:p-10 lg:p-12">
            {/* WA icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/30">
              <MessageCircle className="h-8 w-8 text-white" strokeWidth={1.75} />
            </div>

            <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
              Direct Enquiry
            </span>
            <h3 className="mt-2 text-2xl font-bold text-ink-900 sm:text-3xl">
              Speak with our team
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              Tell us what you need and our team will assist with service
              enquiries, project requirements, and quotation requests.
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {waBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366]" strokeWidth={2} />
                  {b}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20bc5a] hover:shadow-[#25D366]/50 active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-center text-xs text-ink-400">
              WhatsApp will open in a new tab. Replies subject to business-hour availability.
            </p>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-ink-100" />
              <span className="text-xs text-ink-400">or send a message</span>
              <div className="h-px flex-1 bg-ink-100" />
            </div>

            {/* Quick email */}
            <a
              href="mailto:sale@scanvx.com.my?subject=IT Services Enquiry"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-500/30 bg-brand-50 px-6 py-3.5 text-sm font-semibold text-brand-700 transition-all hover:border-brand-500 hover:bg-brand-100"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
