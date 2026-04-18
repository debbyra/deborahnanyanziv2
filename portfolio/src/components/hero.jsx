import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot"></span>
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="hero__name">Deborah Nanyanzi</span>
            <br />
            <span className="hero__role">Backend Developer</span>
          </motion.h1>

          <motion.p
            className="hero__summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            I am passionate about backend software development, well-versed in Python alongside the Django and Flask frameworks. 
            Additionally, I have a deep passion for teaching technology, guiding everyone from total beginners to those eager to level up their existing tech skills!
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Work
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="https://github.com/debbyra" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/deborah-nanyanzi-3a38a8288" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://x.com/DeborahN27" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring"></div>
            <div className="hero__avatar">
              <img src={profileImage} alt="Profile" className="hero__image" />
            </div>
            <div className="hero__float-badge hero__float-badge--1">⚛️ React</div>
            <div className="hero__float-badge hero__float-badge--2">🐍 Python</div>
            <div className="hero__float-badge hero__float-badge--3">🎨 UI/UX</div>
            <div className="hero__float-badge hero__float-badge--7">🗄️ SQL</div>
            <div className="hero__float-badge hero__float-badge--8">🐘 PostgreSQL</div>
            <div className="hero__float-badge hero__float-badge--9">✒️ Figma</div>
            <div className="hero__float-badge hero__float-badge--10">🔄 REST APIs</div>
            <div className="hero__float-badge hero__float-badge--11">🚀 GitHub Actions</div>
            <div className="hero__float-badge hero__float-badge--13">🪐 Jupyter</div>
            <div className="hero__float-badge hero__float-badge--14">🗃️ Databases</div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>Scroll Down</span>
        <HiArrowDown className="hero__scroll-arrow" />
      </motion.a>
    </section>
  );
}
