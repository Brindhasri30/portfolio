import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements: React.FC = () => (
  <section className="sec sec-alt">
    <div className="wrap">
      <div className="sec-eyebrow">Recognition</div>
      <h2 className="sec-heading">Achievements</h2>
      <p className="sec-sub">Milestones and accomplishments along my journey.</p>

      <div className="ach-grid">
        {portfolioData.achievements.map((a, i) => (
          <div key={i} className="ach-card">
            <div className="ach-icon">{a.icon}</div>
            <div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
