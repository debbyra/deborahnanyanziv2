import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaDatabase, FaServer
} from 'react-icons/fa';
import {
  SiDjango, SiJavascript, SiTypescript, SiPostgresql, SiTailwindcss, SiRedis, SiFlask, SiGithubactions, SiJupyter
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend & Design',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 88 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      { name: 'Figma', icon: <FaFigma />, level: 68 },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 92 },
      { name: 'Django', icon: <SiDjango />, level: 88 },
      { name: 'Flask', icon: <SiFlask />, level: 85 },
      { name: 'REST APIs', icon: <FaServer />, level: 88 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 },
      { name: 'SQL', icon: <FaDatabase />, level: 80 },
      { name: 'Databases', icon: <FaDatabase />, level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 90 },
      { name: 'GitHub Actions', icon: <SiGithubactions />, level: 75 },
      { name: 'Docker', icon: <FaDocker />, level: 72 },
      { name: 'Jupyter', icon: <SiJupyter />, level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I'm constantly learning and expanding my toolkit to deliver the best solutions.
          </p>
        </motion.div>

        <div className="skills__categories">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              className="skills__category"
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <div className="skills__item-header">
                      <div className="skills__item-icon">{skill.icon}</div>
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + catIdx * 0.15, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
