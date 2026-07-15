import { ArrowRight, Lock, Wrench, LifeBuoy, Link2, Activity } from 'lucide-react';
import { Reveal } from './Reveal';

const spheres = [
  { icon: Lock, label: 'Secure' },
  { icon: Wrench, label: 'Repair' },
  { icon: LifeBuoy, label: 'Support' },
  { icon: Link2, label: 'Connect' },
  { icon: Activity, label: 'Monitor' },
];

export function Approach() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-pad bg-white">
      <div className="container-mx container-px">
        {/* Top split: Consulting intro */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-600">
              Approach
            </span>
            <h2 className="text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              Professional IT Services &amp; Technology Consulting
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Our IT consulting services and programs are designed on top of an
              extensive research library of IT best practices, tools, and
              templates developed by analysts and consultants with decades of
              practical and advisory experience.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="group mt-7 inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>

          {/* Visual side */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 p-8 shadow-2xl shadow-ink-900/20">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-600/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent-500/15 blur-3xl" />

                <div className="relative space-y-4">
                  {[
                    'Strategic IT Planning',
                    'Infrastructure Optimization',
                    'Security & Compliance',
                    '24/7 Monitoring & Support',
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-brand-400/30 hover:bg-white/10"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                        <span className="font-display text-sm font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Connected systems banner */}
        <Reveal>
          <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-ink-950 p-8 shadow-xl sm:p-12 lg:p-16">
            <div className="absolute inset-0 hero-grid opacity-30" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  We Create Fully Connected Systems So You Can Focus On Your
                  Business
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-100">
                  We&apos;ve introduced cultures of innovation to even the most
                  conservative of organizations, helping IT professionals move
                  away from the monotony of operational oversight so they can
                  maintain control while focusing their passions on driving
                  strategic value.
                </p>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="shrink-0 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:bg-brand-50 hover:shadow-xl active:scale-[0.98]"
              >
                Get Started
              </button>
            </div>
          </div>
        </Reveal>

        {/* Five Spheres */}
        <div className="mt-20 text-center">
          <Reveal>
            <h3 className="text-2xl font-bold text-ink-900 sm:text-3xl">
              Five Spheres. One Mission.
            </h3>
            <p className="mt-3 text-lg text-ink-500">
              We offer a unique approach to the delivery of IT professional
              services for companies of all sizes.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-6 lg:gap-12">
            {spheres.map((sphere, i) => (
              <Reveal key={sphere.label} delay={i * 100}>
                <div className="group flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-xl group-hover:shadow-brand-600/30">
                    <sphere.icon className="h-8 w-8" strokeWidth={1.75} />
                  </div>
                  <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-ink-700">
                    {sphere.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
