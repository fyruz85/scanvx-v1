import { ArrowRight, ChevronRight, ShieldCheck, Zap, Headset } from 'lucide-react';

function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center" style={{ height: 460 }}>
      {/* Orbit rings */}
      <div className="absolute h-[340px] w-[340px] rounded-full border border-[rgba(56,189,248,0.25)]"
        style={{ boxShadow: 'inset 0 0 30px rgba(24,136,255,0.15), 0 0 22px rgba(24,136,255,0.1)' }} />
      <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-[rgba(56,189,248,0.2)] animate-spin-slow" />

      {/* Core shield */}
      <div className="relative flex items-center justify-center animate-float"
        style={{
          width: 250, height: 250, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31,156,255,0.28), rgba(9,48,100,0.18) 48%, transparent 70%)',
          boxShadow: '0 0 60px rgba(0,157,255,0.28)',
        }}>
        <svg viewBox="0 0 160 180" className="w-[170px]" style={{ filter: 'drop-shadow(0 0 18px rgba(41,174,255,0.5))' }}>
          <path d="M80 8 144 32v44c0 48-25 79-64 96C41 155 16 124 16 76V32L80 8Z"
            fill="rgba(10,111,213,0.18)" stroke="#40c8ff" strokeWidth="4"/>
          <rect x="48" y="78" width="64" height="50" rx="8"
            fill="rgba(6,26,56,0.8)" stroke="#dff6ff" strokeWidth="4"/>
          <path d="M60 78V60c0-26 40-26 40 0v18"
            fill="none" stroke="#dff6ff" strokeWidth="4"/>
          <circle cx="80" cy="101" r="6" fill="#dff6ff"/>
          <path d="M80 107v8" stroke="#dff6ff" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Satellite nodes */}
      <div className="absolute top-[34px] left-[13%] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#268cef] text-[#eaf8ff]"
        style={{ background: 'rgba(7,34,74,0.92)', boxShadow: '0 0 22px rgba(23,125,239,0.26)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/>
          <path d="M6.8 7.1 10.8 16M17.2 7.1 13.2 16M7 6h10"/>
        </svg>
      </div>

      <div className="absolute top-[55px] right-[9%] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#268cef] text-[#eaf8ff]"
        style={{ background: 'rgba(7,34,74,0.92)', boxShadow: '0 0 22px rgba(23,125,239,0.26)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9a11 11 0 0 1 14 0M8.5 12.5a6 6 0 0 1 7 0M11 16a2 2 0 0 1 2 0"/>
          <circle cx="12" cy="19" r=".6" fill="currentColor" stroke="none"/>
        </svg>
      </div>

      <div className="absolute bottom-[30px] left-[9%] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#268cef] text-[#eaf8ff]"
        style={{ background: 'rgba(7,34,74,0.92)', boxShadow: '0 0 22px rgba(23,125,239,0.26)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.5 18H18a4 4 0 0 0 .8-7.9A6 6 0 0 0 7.3 8.7 4.7 4.7 0 0 0 7.5 18Z"/>
        </svg>
      </div>

      <div className="absolute bottom-[40px] right-[8%] flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#268cef] text-[#eaf8ff]"
        style={{ background: 'rgba(7,34,74,0.92)', boxShadow: '0 0 22px rgba(23,125,239,0.26)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/>
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>
        </svg>
      </div>

      {/* Pulse dots */}
      <span className="absolute top-[24%] left-[30%] h-[7px] w-[7px] rounded-full bg-[#ef3340]"
        style={{ boxShadow: '0 0 12px #ef3340' }} />
      <span className="absolute bottom-[22%] right-[28%] h-[7px] w-[7px] rounded-full bg-[#ef3340]"
        style={{ boxShadow: '0 0 12px #ef3340' }} />
      <span className="absolute top-[42%] right-[8%] h-[7px] w-[7px] rounded-full bg-[#38bdf8]"
        style={{ boxShadow: '0 0 12px #38bdf8' }} />
    </div>
  );
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Secure by Design' },
  { icon: Zap, label: 'High Availability' },
  { icon: Headset, label: 'Expert Support' },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-[590px] items-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Glow effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1379ef]/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[100px]" />

      <div className="container-mx container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          {/* Left — Copy */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#58c8ff]">
              ICT • Networking • Security
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(38px,5vw,64px)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
              Deploy. Secure.{' '}
              <span className="text-[#2d92ff]">Recover.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-[650px] text-lg leading-[1.7] text-[#c9d5e8]">
              Your infrastructure. Our responsibility. End-to-end IT systems
              for businesses that can&apos;t afford downtime.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1379ef] px-6 py-3.5 text-base font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: '0 14px 30px rgba(0,119,255,0.28)' }}
              >
                Talk to Us
                <ArrowRight className="h-[19px] w-[19px] transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/60 bg-white/[0.03] px-6 py-3.5 text-base font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                See What We Do
                <ChevronRight className="h-[19px] w-[19px] text-brand-400" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-[13px] text-[#dce6f4]">
                  <badge.icon className="h-[18px] w-[18px] text-[#58c8ff]" strokeWidth={2} />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8 sm:gap-12">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '14+', label: 'Major Projects' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[#8a9bba]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="hidden lg:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
