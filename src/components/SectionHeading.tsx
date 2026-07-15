import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-brand-300' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-ink-300' : 'text-ink-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
