import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Project } from '../data/projects';

type Props = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(projects.length - 1, 0);

  const visibleProjects = useMemo(() => {
    return [0, 1, 2].map((offset) => projects[(index + offset) % projects.length]);
  }, [index, projects]);

  const move = (direction: number) => {
    setIndex((current) => {
      if (direction > 0) return current === maxIndex ? 0 : current + 1;
      return current === 0 ? maxIndex : current - 1;
    });
  };

  return (
    <div className="project-shell">
      <div className="project-controls" aria-label="Project carousel controls">
        <button type="button" aria-label="Previous project" onClick={() => move(-1)}>
          <ChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Next project" onClick={() => move(1)}>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card card" key={project.title}>
            <div className={`project-visual ${project.imageTone}`}>
              <span>{project.title}</span>
            </div>
            <div className="project-content">
              <span className="project-kicker">Selected Project</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                Explore Project <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
