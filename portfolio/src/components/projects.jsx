import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'TASC LMS',
    description:
      'A robust Learning Management System backend developed for Q-Sourcing Servtec. It features user management, course scheduling, automated workflows with Celery, and livestream integration.',
    tags: ['Python', 'Django', 'Celery', 'PostgreSQL'],
    color: '#ec4899',
    github: '#',
    live: '#',
    image: 'https://placehold.co/600x400/1a1a1a/ec4899?text=TASC+LMS+Preview',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A sleek, responsive personal portfolio showcasing projects and skills with smooth scroll animations, a modern dark theme, and an interactive UI.',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
    color: '#f59e0b',
    github: '#',
    live: '#',
    image: 'https://placehold.co/600x400/1a1a1a/f59e0b?text=Portfolio+Preview',
  },
  {
    title: 'Student Report Portal',
    description:
      'A reporting website built at Code Academy. It helps teachers generate and distribute end-of-term holiday reports for students across multiple partner schools.',
    tags: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    color: '#8b5cf6',
    github: '#',
    live: '#',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Report+Portal+Preview',
  },
  {
    title: 'Restaurant Food Delivery',
    description:
      'A comprehensive food delivery platform built for a restaurant during my university studies. It streamlines order management and connects customers directly with the kitchen.',
    tags: ['Python', 'Flask', 'SQL', 'JavaScript'],
    color: '#06b6d4',
    github: '#',
    live: '#',
    image: 'https://placehold.co/600x400/1a1a1a/06b6d4?text=Food+Delivery+Preview',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A selection of projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              className="projects__card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              <div className="projects__card-img-wrapper">
                <img src={project.image} alt={project.title} className="projects__card-img" />
              </div>
              <div
                className="projects__card-accent"
                style={{ background: project.color }}
              />
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span className="projects__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__card-links">
                  <a href={project.github} className="projects__link" aria-label="View source code">
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="projects__link" aria-label="View live demo">
                    <HiExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
