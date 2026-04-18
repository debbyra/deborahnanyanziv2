import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-accent">D</span>eborahN
            <span className="footer__logo-dot">.</span>
          </a>
          <p className="footer__tagline">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/debbyra" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/deborah-nanyanzi-3a38a8288" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
          <a href="https://x.com/DeborahN27" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={18} /></a>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Deborah Nanyanzi. Built with{' '}
            <FaHeart className="footer__heart" size={12} /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
