import React from 'react';
import { portfolioData } from '../data/portfolioData';

/* ── SVG Icons (no emojis) ── */
const GradCapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);
const CertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const PaperIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const intern = portfolioData.internship[0];

const Education: React.FC = () => (
  <section id="education" className="sec">
    <div className="wrap">
      <div className="sec-eyebrow">Background</div>
      <h2 className="sec-heading">Education & Experience</h2>
      <p className="sec-sub">My academic journey, hands-on internship, and research contributions.</p>

      <div className="edu-grid">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Education */}
          <div className="edu-block">
            <div className="edu-block-header">
              <span className="edu-block-icon"><GradCapIcon /></span>
              <span className="edu-block-title">Education</span>
            </div>
            <div className="edu-timeline">
              {portfolioData.education.map((e, i) => (
                <div key={i} className="edu-card">
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-institution">{e.institution}</div>
                  <div className="edu-meta">
                    <span><CalendarIcon /> {e.year}</span>
                    <span><PinIcon /> {e.location}</span>
                  </div>
                  {e.grade && (
                    <div className="edu-badge">
                      <CheckIcon /> {e.grade}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="edu-block" style={{ marginTop: '2rem' }}>
            <div className="edu-block-header">
              <span className="edu-block-icon"><CertIcon /></span>
              <span className="edu-block-title">Certifications</span>
            </div>
            <div className="cert-list">
              {portfolioData.certifications.map((c, i) => (
                <div key={i} className="cert-item">
                  <span className="cert-dot" />
                  <div>
                    <div className="cert-name">{c.title}</div>
                    <div className="cert-org">{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div>
          {/* Internship */}
          <div className="edu-block">
            <div className="edu-block-header">
              <span className="edu-block-icon"><BriefcaseIcon /></span>
              <span className="edu-block-title">Internship Experience</span>
            </div>
            <div className="edu-card">
              <div className="edu-degree">{intern.position}</div>
              <div className="edu-institution">{intern.company}</div>
              <div className="edu-meta">
                <span><CalendarIcon /> {intern.duration}</span>
                <span><PinIcon /> {intern.location}</span>
              </div>
              <ul className="intern-bullets">
                {intern.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="bullet-arrow"><ArrowIcon /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Paper */}
          <div className="edu-block" style={{ marginTop: '2rem' }}>
            <div className="edu-block-header">
              <span className="edu-block-icon"><PaperIcon /></span>
              <span className="edu-block-title">Technical Paper</span>
            </div>
            <div className="edu-card paper-card">
              <div className="edu-degree">
                Optimizing Canteen Operations: A Digital Approach to Queue Management
              </div>
              <p className="paper-desc">
                Presented a technical paper proposing a digital queue management system for
                campus canteens using React and Firebase to reduce wait times and improve
                ordering efficiency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Education;
