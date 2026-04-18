import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  { icon: <HiMail size={22} />, label: 'Email', value: 'deborahrahj20@gmail.com' },
  { icon: <HiLocationMarker size={22} />, label: 'Location', value: 'Kampala, Uganda' },
  { icon: <HiPhone size={22} />, label: 'Phone', value: '+256 754739637' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Something went wrong. Please try again or contact me directly via email.');
        console.error('Form submission error:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-cards">
              {contactInfo.map((item) => (
                <div className="contact__info-card" key={item.label}>
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <span className="contact__socials-label">Follow me</span>
              <div className="contact__socials-links">
                <a href="https://github.com/debbyra" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/deborah-nanyanzi-3a38a8288" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="LinkedIn">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://x.com/DeborahN27" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact__input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact__submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
