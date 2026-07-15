import {
  Activity,
  Server,
  Network,
  ShieldCheck,
  Globe,
  GraduationCap,
  Cable,
  Stethoscope,
  DatabaseBackup,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

interface Project {
  title: string;
  client: string;
  icon: LucideIcon;
}

interface Sector {
  label: string;
  projects: Project[];
}

const sectors: Sector[] = [
  {
    label: 'Government & Public Sector',
    projects: [
      { title: 'Zabbix Installation', client: 'Malaysian Palm Oil Board', icon: Activity },
      { title: 'Server Configuration', client: 'KPKT (Jabatan Bomba dan Penyelamat)', icon: Server },
      { title: 'Linux Training', client: 'SUK Negeri Sembilan', icon: GraduationCap },
      { title: 'Fiber Optic Troubleshoot & Repair', client: 'Jabatan Penjara Pokok Sena', icon: Cable },
    ],
  },
  {
    label: 'Corporate & Enterprise',
    projects: [
      { title: 'Zabbix Configuration', client: 'Datakraf Sdn Bhd', icon: Activity },
      { title: 'Zabbix Redeployment', client: 'Hibiscus Petroleum Bhd', icon: Activity },
      { title: 'Proxmox Server Installation', client: 'Perda Ventures Inc Sdn Bhd', icon: Server },
      { title: 'Network Maintenance', client: 'Perda Ventures Inc Sdn Bhd', icon: Network },
      { title: 'Disaster Recovery', client: 'Aizo Digital Works Sdn Bhd', icon: ShieldCheck },
      { title: 'Disaster Recovery', client: 'Aizo Group Bhd', icon: ShieldCheck },
      { title: 'Web Design', client: 'Stellar Engineering Sdn Bhd', icon: Globe },
      { title: 'Web Design & Booking System', client: 'RidhoTravel', icon: Globe },
    ],
  },
  {
    label: 'Healthcare',
    projects: [
      { title: 'Cymagsys Troubleshoot', client: 'Dr Boo Clinic & Surgery', icon: Stethoscope },
      { title: 'Backup Cymagsys', client: 'Chenang Clinic Medical & Surgery', icon: DatabaseBackup },
    ],
  },
];

interface DigitalProduct {
  title: string;
  desc: string;
}

const digitalProducts: DigitalProduct[] = [
  {
    title: 'Sistem Pengurusan Maklumat ICT Sekolah',
    desc: 'Complete ICT asset and information management system for schools.',
  },
  {
    title: 'Sistem Pengurusan Perpustakaan Sekolah',
    desc: 'School library management with KPM/PSS Dewey Decimal classification.',
  },
  {
    title: 'Sistem Pengurusan Asrama Sekolah',
    desc: 'Hostel management — attendance, wardens, complaints, and reporting.',
  },
  {
    title: 'KikoMate',
    desc: 'Math learning app designed for children with ADHD — adaptive, engaging, and progress-tracked.',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects We've Delivered"
          subtitle="From government agencies to oil & gas — real infrastructure work for real organizations."
        />

        {/* Sectors */}
        <div className="mt-16 space-y-12">
          {sectors.map((sector, si) => (
            <Reveal key={sector.label} delay={si * 100}>
              <div>
                <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
                  <span className="h-px w-8 bg-brand-300" />
                  {sector.label}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {sector.projects.map((project) => (
                    <div
                      key={`${project.title}-${project.client}`}
                      className="group flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-4 transition-all duration-200 hover:border-brand-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                        <project.icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-ink-800 leading-snug">
                          {project.title}
                        </p>
                        <p className="mt-0.5 text-xs text-ink-400">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Digital Products */}
        <div className="mt-20">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
              <span className="h-px w-8 bg-brand-300" />
              Digital Products
            </h3>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {digitalProducts.map((product, i) => (
              <Reveal key={product.title} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-600/8">
                  {/* Dark header */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 px-5 py-5">
                    <div className="absolute inset-0 hero-grid opacity-40" />
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-600/30 blur-2xl" />
                    <h4 className="relative text-sm font-bold text-white leading-snug">
                      {product.title}
                    </h4>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <p className="text-xs leading-relaxed text-ink-500">
                      {product.desc}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
                      In Production
                    </span>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
