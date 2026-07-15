import {
  Network,
  Monitor,
  Wifi,
  ServerCog,
  ShieldCheck,
  Globe,
  Container,
  Cloud,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Network,
    title: 'MultiWAN & Custom Firewall',
    description:
      'Combine multiple ISP lines with pfSense/OPNsense firewall rules for redundant, high-speed internet bonding.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & IDS/IPS',
    description:
      'Web application firewalls, intrusion detection and prevention, SSL enforcement, and vulnerability assessments.',
  },
  {
    icon: Globe,
    title: 'Network Infrastructure',
    description:
      'VLAN segmentation, bandwidth shaping, QoS policies, and IPv6 solutions to future-proof your network.',
  },
  {
    icon: Wifi,
    title: 'Wireless Infrastructure',
    description:
      'Enterprise-grade wireless coverage with seamless roaming. Replace messy cable runs across your entire premises.',
  },
  {
    icon: ServerCog,
    title: 'Server & IP Migration',
    description:
      'Zero-downtime migration of servers, IPs, and services. DNS, firewall rules, and data integrity — handled.',
  },
  {
    icon: Container,
    title: 'Virtualization & Disaster Recovery',
    description:
      'Proxmox, VMware, and containerized infrastructure with tested DR plans. Your systems come back fast.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Hosting',
    description:
      'AWS, Proxmox cloud, and self-hosted infrastructure. Web hosting, cloud networking, and managed deployments.',
  },
  {
    icon: Monitor,
    title: 'Digital Signage & Web Design',
    description:
      'Xibo-powered digital signage for lobbies, schools, and retail — plus custom web design and development.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-ink-50">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Services"
          title="Infrastructure that doesn't keep you up at night"
          subtitle="From multi-WAN failover to disaster recovery, we handle the systems layer so you can focus on running your organization."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30">
                    <service.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-2 text-base font-bold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
