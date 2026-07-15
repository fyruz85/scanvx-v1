import { ArrowRight, ChevronRight, ShieldCheck, Zap, Headset } from 'lucide-react';

function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center" style={{ height: 460 }}>
      <div className="absolute h-[340px] w-[340px] rounded-full border border-cyan-300/25"
        style={{ boxShadow: 'inset 0 0 30px rgba(24,136,255,0.15), 0 0 22px rgba(24,136,255,0.1)' }} />
      <div className="absolute h-[430px] w-[430px] animate-spin-slow rounded-full border border-dashed border-cyan-300/20" />

      <div className="relative flex h-[250px] w-[250px] animate-float items-center justify-center rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(31,156,255,0.28), rgba(9,48,100,0.18) 48%, transparent 70%)',
          boxShadow: '0 0 60px rgba(0,157,255,0.28)',
        }}>
        <svg viewBox="0 0 160 180" className="w-[170px]" style={{ filter: 'drop-shadow(0 0 18px rgba(41,174,255,0.5))' }}>
          <path d="M80 8 144 32v44c0 48-25 79-64 96C41 155 16 124 16 76V32L80 8Z"
            fill="rgba(10,111,213,0.18)" stroke="#40c8ff" strokeWidth="4"/>
          <rect x="48" y="78" width="64" height="50" rx="8"
            fill="rgba(6,26,56,0.8)" stroke="#dff6ff" strokeWidth="4"/>
          <path d="M60 78V60c0-26 40-26 40 0v18" fill="none" stroke="#dff6ff" strokeWidth="4"/>
          <circle cx="80" cy="101" r="6" fill="#dff6ff"/>
          <path d="M80 107v8" stroke="#dff6ff" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {[
        { pos: 'top-[34px] left-[13%]', icon: 'network' },
        { pos: 'top-[55px] right-[9%]', icon: 'wifi' },
        { pos: 'bottom-[30px] left-[9%]', icon: 'cloud' },
        { pos: 'bottom-[40px] right-[8%]', icon: 'server' },
      ].map((node) => (
        <div key={node.icon} className={`absolute ${node.pos} flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#268cef] text-[#eaf8ff]`}
          style={{ background: 'rgba(7,34,74,0.92)', boxShadow: '0 0 22px rgba(23,125,239,0.26)' }}>
          {node.icon === 'network' && <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6.8 7.1 10.8 16M17.2 7.1 13.2 16M7 6h10"/></svg>}
          {node.icon === 'wifi' && <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 9a11 11 0 0 1 14 0M8.5 12.5a6 6 0 0 1 7 0M11 16a2 2 0 0 1 2 0"/><circle cx="12" cy="19" r=".6" fill="currentColor"/></svg>}
          {node.icon === 'cloud' && <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7.5 18H18a4 4 0 0 0 .8-7.9A6 6 0 0 0 7.3 8.7 4.7 4.7 0 0 0 7.5 18Z"/></svg>}
          {node.icon === 'server' && <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/></svg>}
        </div>
      ))}

      <span className="absolute left-[30%] top-[24%] h-[7px] w-[7px] rounded-full bg-[#ef3340] shadow-[0_0_12px_#ef3340]" />
      <span className="absolute bottom-[22%] right-[28%] h-[7px] w-[7px] rounded-full bg-[#ef3340] shadow-[0_0_12px_#ef3340]" />
    </div>
  );
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Secure by Design' },
  { icon: Zap, label: 'High Performance' },
  { icon: Headset, label: 'Expert Support' },
];

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-bg relative flex min-h-[680px] items-center overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse-glow rounded-full bg-[#1379ef]/20 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[100px]" />

      <div className="container-mx container-px relative z-10 py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#58c8ff]">
              ICT • Networking • Security
            </div>

            <h1 className="font-display text-[clamp(42px,5.4vw,70px)] font-bold leading-[1.04] tracking-[-0.05em] text-white">
              Reliable IT Infrastructure,
              <br />Smart Networking,
              <br /><span className="text-[#2d92ff]">Stronger Security.</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-lg leading-[1.75] text-[#c9d5e8]">
              ScanVX Solutions delivers end-to-end ICT services that keep your business connected,
              protected, and ready for the future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => scrollTo('services')} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1379ef] px-6 py-3.5 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(0,119,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#2388f7]">
                Explore Our Services
                <ArrowRight className="h-[19px] w-[19px] transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('contact')} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/50 bg-white/[0.03] px-6 py-3.5 text-base font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.07]">
                Talk to an Expert
                <ChevronRight className="h-[19px] w-[19px] text-brand-400" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-[13px] text-[#dce6f4]">
                  <badge.icon className="h-[18px] w-[18px] text-[#58c8ff]" strokeWidth={2} />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block"><HeroIllustration /></div>
        </div>
      </div>
    </section>
  );
}
