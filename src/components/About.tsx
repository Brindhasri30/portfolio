import React from 'react';
import { portfolioData } from '../data/portfolioData'; // eslint-disable-line @typescript-eslint/no-unused-vars

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    label: 'Education',
    value: 'B.Tech IT — Dr. N.G.P Institute of Technology, Coimbatore',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: 'Expertise',
    value: 'MERN Stack · Spring Boot · Kotlin · React Native',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Problem Solving',
    value: '300+ LeetCode problems solved using Java & DSA',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    label: 'Focus',
    value: 'Building production-ready full-stack & mobile applications',
  },
];

const interests = [
  'Full Stack Web Development',
  'Android & Mobile Development',
  'DSA & Competitive Programming',
  'REST API Design',
  'Cloud & Backend Services',
  'UI / UX Engineering',
];

const stats = [
  { val: '8.23', label: 'CGPA', sub: 'B.Tech IT' },
  { val: '300+', label: 'LeetCode', sub: 'Problems solved' },
  { val: '5+',   label: 'Projects', sub: 'Deployed apps' },
];

const RESUME_URL = 'https://drive.google.com/file/d/1ShJBuJXOtreoLtR2NDARlZmfDcpDMS5G/view?usp=sharing';

const About: React.FC = () => (
  <section id="about" className="sec sec-alt">
    <div className="wrap">
      <div className="sec-eyebrow">About Me</div>
      <div className="about-grid">

        {/* ── LEFT — personal story + highlights + interests ── */}
        <div className="about-left">
          <h2 className="sec-heading">Turning ideas into<br />working software</h2>

          <p className="about-body" style={{ marginTop: '1.1rem' }}>
            I'm a final-year Information Technology student who loves the full journey —
            from sketching a solution on paper to shipping a polished, real-world application.
            I thrive at the intersection of clean architecture and great user experience.
          </p>
          <p className="about-body">
            Whether it's a REST API, a React interface, Kotlin for Android,
            or a tricky DSA problem — I bring curiosity and a commitment to quality code.
          </p>

          {/* Key highlights */}
          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="about-highlight-row">
                <span className="hl-icon">{h.icon}</span>
                <div>
                  <div className="hl-label">{h.label}</div>
                  <div className="hl-value">{h.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Areas of interest */}
          <div className="about-interests">
            <div className="interests-heading">Areas of Interest</div>
            <div className="interests-chips">
              {interests.map((t, i) => <span key={i} className="interest-chip">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── RIGHT — profile card ── */}
        <div className="about-profile-card">
          {/* Photo */}
          <div className="about-photo-wrap">
            <img src="/profile.jpg" alt="Brindhasri S" />
          </div>

          {/* Name + location */}
          <div className="about-card-name">Brindhasri S</div>
          <div className="about-card-role">Aspiring Software Engineer</div>
          <div className="about-card-loc">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Erode, Tamil Nadu
          </div>

          {/* Stats row */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="about-stat-val">{s.val}</div>
                <div className="about-stat-label">{s.label}</div>
                <div className="about-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Resume button */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default About;
