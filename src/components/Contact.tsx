import React from 'react';
import { portfolioData } from '../data/portfolioData';

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const LeetCodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const cards = [
  {
    Icon: EmailIcon,
    label: 'Email',
    handle: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    desc: 'Drop me a message anytime',
    color: 'hsl(22, 48%, 28%)',
    bg: 'hsl(28, 52%, 93%)',
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    handle: '@Brindhasri30',
    href: portfolioData.github,
    desc: 'Check out my repositories',
    color: 'hsl(220, 20%, 28%)',
    bg: 'hsl(220, 24%, 94%)',
  },
  {
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    handle: 'brindhasris',
    href: portfolioData.linkedin,
    desc: 'Let\'s connect professionally',
    color: 'hsl(210, 70%, 36%)',
    bg: 'hsl(210, 62%, 94%)',
  },
  {
    Icon: LeetCodeIcon,
    label: 'LeetCode',
    handle: '@brindhasri',
    href: portfolioData.leetcode,
    desc: '300+ problems solved in Java',
    color: 'hsl(38, 65%, 34%)',
    bg: 'hsl(38, 60%, 93%)',
  },
];

const Contact: React.FC = () => (
  <section id="contact" className="sec sec-alt contact-section">
    <div className="wrap">
      <div className="contact-layout">

        {/* ── LEFT: heading + info ── */}
        <div className="contact-left">
          <div className="sec-eyebrow">Get in Touch</div>
          <h2 className="sec-heading contact-heading">Let's<br />Connect</h2>
          <p className="contact-desc">
            Open to internships, collaborations and full-time opportunities.
            Let's build something great together!
          </p>

          <a href={`mailto:${portfolioData.email}`} className="btn btn-fill contact-send-btn">
            <SendIcon /> Send Me an Email
          </a>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <PinIcon />
              <span>{portfolioData.location}</span>
            </div>
            <div className="contact-meta-item">
              <PhoneIcon />
              <span>{portfolioData.phone}</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: contact cards 2×2 ── */}
        <div className="contact-cards-grid">
          {cards.map(({ Icon, label, handle, href, desc, color, bg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-card-v2">
              <div className="contact-card-icon" style={{ background: bg, color }}>
                <Icon />
              </div>
              <div className="contact-card-body">
                <div className="contact-card-label">{label}</div>
                <div className="contact-card-handle" style={{ color }}>{handle}</div>
                <div className="contact-card-desc">{desc}</div>
              </div>
              <span className="contact-card-arrow" style={{ color }}>
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
