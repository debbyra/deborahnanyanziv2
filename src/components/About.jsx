import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiHeart, HiDownload } from 'react-icons/hi';
import './About.css';

const highlights = [
  {
    icon: <HiCode size={24} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, well-structured code that scales with your business.',
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Performance',
    desc: 'Optimizing every layer — from database queries to front-end rendering.',
  },
  {
    icon: <HiHeart size={24} />,
    title: 'User-First',
    desc: 'Designing intuitive experiences that users love to interact with.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About Building<br />Digital Experiences</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a Full Stack Developer with a deep love for creating web applications that 
              are not only functional but truly delightful to use. My journey in tech started 
              with curiosity and has grown into an unwavering commitment to the craft.
            </p>
            <p>
              With expertise spanning from React and modern JavaScript on the front end to 
              Python/Django and robust API design on the back end, I bring a holistic approach 
              to every project. I believe great software is built at the intersection of 
              thoughtful design, clean architecture, and genuine empathy for end users.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or mentoring aspiring developers. I'm always eager to 
              take on new challenges and collaborate on meaningful projects.
            </p>

            <a href="/Deborah_Nanyanzi_CV.pdf" download className="about__cv-btn">
              <HiDownload size={20} />
              Download CV
            </a>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">20+</span>
                <span className="about__stat-label">Projects Built</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Happy Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, i) => (
              <div className="about__highlight-card" key={i}>
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h3 className="about__highlight-title">{item.title}</h3>
                  <p className="about__highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
