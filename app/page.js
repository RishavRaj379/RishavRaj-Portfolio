'use client';

import { lazy, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OrbScene = lazy(() => import('./components/OrbScene'));

const words = ['AI Developer', 'Building Intelligent Systems', 'Full Stack Engineer'];
const projects = [
  {
    title: 'DeployWatch',
    desc: 'GitHub repository analysis platform with scoring system',
    tech: ['Next.js', 'Node.js', 'GitHub API', 'AI Scoring'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/',
    live: 'https://deploywatch.rishav.tech'
  },
  {
    title: 'Nexa Cloud',
    desc: 'AI-powered web platform with tools and dashboards',
    tech: ['React', 'Firebase', 'Node.js', 'AI Integrations'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/',
    live: 'https://nexa.rishav.tech'
  },
  {
    title: 'Nexa Robot',
    desc: 'AI desk robot with voice, vision, and memory system',
    tech: ['Python', 'OpenCV', 'Arduino', 'Speech AI'],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/',
    live: ''
  }
];

export default function Home() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveWord((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="progress" />
      <section className="hero">
        <Suspense fallback={<div className="orb-placeholder" />}>
          <OrbScene />
        </Suspense>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="hero-content"
        >
          <p className="tag">Kolkata, India • rishav.tech</p>
          <h1>Rishav Raj</h1>
          <h2>{words[activeWord]}</h2>
          <p>
            AI-focused developer crafting intelligent software, robotics systems, and scalable
            full-stack experiences.
          </p>
          <div className="cta">
            <a href="#projects">View Projects</a>
            <a href="#contact" className="ghost">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="glass reveal">
        <h2>About</h2>
        <p>
          Rishav Raj is an AI-focused developer building intelligent systems, robotics, and
          scalable web applications. He works on real-world projects combining software, AI, and
          hardware to create future-ready technology.
        </p>
      </section>

      <section className="skills reveal">
        <h2>Skills</h2>
        <div className="skill-grid">
          {[
            ['Frontend', 'HTML, CSS, JavaScript, React'],
            ['Backend', 'Node.js, Firebase'],
            ['AI', 'Python, Machine Learning, OpenCV'],
            ['Tools', 'GitHub, Postman'],
            ['Hardware', 'Arduino']
          ].map(([k, v]) => (
            <article key={k} className="glass card">
              <h3>{k}</h3>
              <p>{v}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="reveal">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <motion.article whileHover={{ y: -8 }} key={project.title} className="glass project-card">
              <Image src={project.image} alt={`${project.title} project preview`} width={800} height={420} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="links">
                <a href={project.github}>GitHub</a>
                {project.live && <a href={project.live}>Live</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="glass reveal">
        <h2>Experience</h2>
        <h3>Founder & Developer — Nexa Cloud (2024 – Present)</h3>
        <p>Built AI systems, dashboards, and full-stack applications.</p>
      </section>

      <section id="contact" className="glass reveal">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:rishavraj25413@gmail.com">rishavraj25413@gmail.com</a></p>
        <p>
          <a href="https://github.com/">GitHub</a> • <a href="https://instagram.com/">Instagram</a>
        </p>
        <form>
          <input type="text" placeholder="Your Name" aria-label="Your Name" required />
          <input type="email" placeholder="Your Email" aria-label="Your Email" required />
          <textarea placeholder="Your Message" aria-label="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
