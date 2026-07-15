import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const strengths = [
  {
    title: '10+ years hands-on experience',
    desc: 'From racking servers to configuring VLANs — we do the work ourselves, not outsource it.',
  },
  {
    title: 'Based in Kedah',
    desc: 'We understand local business needs and can be on-site when remote support isn\'t enough.',
  },
  {
    title: 'Self-hosted solutions you own',
    desc: 'Your data stays on your infrastructure. No vendor lock-in, no surprise subscription hikes.',
  },
  {
    title: 'Government & education experience',
    desc: 'We\'ve delivered for JBPM, schools, and public sector — we know the compliance requirements.',
  },
  {
    title: 'Same-day response',
    desc: 'Most issues are diagnosed and resolved within business hours. Critical systems don\'t wait.',
  },
];

export function WhyUs() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-ink-950">
      {/* Grid bg */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[120px]" />

      <div className="container-mx container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Why ScanVX"
              title="We've been in the trenches"
              subtitle="Not a faceless vendor. We're a hands-on team that builds, deploys, and maintains the systems we recommend — because we run the same stack ourselves."
              center={false}
              light
            />
          </div>

          {/* Right */}
          <div className="space-y-5">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/30 hover:bg-white/10">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-400"
                    strokeWidth={2}
                  />
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
