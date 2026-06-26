import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => (
  <section id="projects" className="sec sec-alt">
    <div className="wrap">
      <div className="sec-eyebrow">My Work</div>
      <h2 className="sec-heading">Featured Projects</h2>
      <p className="sec-sub">Real-world applications built from concept to deployment.</p>

      <div className="projects-grid">
        {portfolioData.projects.map((p, i) => (
          <div key={p.id} className="project-card">
            <div className="proj-body">
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tech">
                {p.technologies.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
