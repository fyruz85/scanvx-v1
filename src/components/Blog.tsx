import { Newspaper, Bell } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Blog"
          title="Insights & Updates"
          subtitle="Expert perspectives on IT infrastructure, security, and technology trends."
        />

        <Reveal>
          <div className="mt-16 mx-auto max-w-2xl overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-10 text-center shadow-sm sm:p-16">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30">
              <Newspaper className="h-9 w-9" strokeWidth={1.75} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-ink-900">
              Blog Coming Soon
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              We&apos;re crafting insightful articles on IT best practices,
              security trends, and technology solutions. Stay tuned for
              expert content from our team.
            </p>

            {/* Notify me */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-xs rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-all placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-700 sm:w-auto">
                <Bell className="h-4 w-4" />
                Notify Me
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
