// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// function name(){
//   return(
//     <>
//     <h1>My Name is Shivam Sharma</h1>
//     </>
//   )
// }
// function App() {
// return(
//   <div>
//   <Name />
//   </div>
// )
// }

// export default App
import './App.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'C', 'C++', 'Java', 'MS Excel']
const certifications = [
  { title: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild', date: '20 Jul 2026', image: '/certificate-ai.svg', download: '/certificate-ai.svg', verify: 'https://www.credly.com/badges/562c5e0e-82bd-4fb7-8b63-f0f83ee114aa' },
  { title: 'Troubleshoot Your Code Using IBM Bob', issuer: 'IBM SkillsBuild', date: '21 Jul 2026 · 30 mins', image: '/certificate-code.svg', download: '/certificate-code.svg' },
  { title: 'Advanced Program in Hardware and Networking', issuer: 'Anudip Foundation', date: 'Certification', image: '/certificate-generic.svg', download: '/advanced-program-in-hardware-and-networking.pdf' },
  { title: 'Honewell Cybersecurity Traning', issuer: 'ICT Academy', date: 'Certification', image: '/certificate-generic.svg', download: '/honeywell-cybersecurity-training.pdf' },
]

function ArrowUpRight() { return <span aria-hidden="true" className="arrow">↗</span> }

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Shivam Sharma home"><span className="brand-mark">SS</span><span>Shivam Sharma</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#journey">Journey</a><a className="resume-link" href="/resume.html" download>Resume <span aria-hidden="true">↓</span></a><a className="nav-contact" href="mailto:shivamsharmabca2021@gmail.com">Let&apos;s talk <ArrowUpRight /></a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Available for opportunities</p><h1>Building useful digital experiences with <em>curiosity</em> and care.</h1><p className="hero-intro">I&apos;m Shivam, an aspiring software developer pursuing an MCA in Delhi. I enjoy turning ideas into clear, responsive interfaces and learning what makes software work better.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight /></a><a className="button button-outline" href="/resume.html" download>Download resume <span aria-hidden="true">↓</span></a></div></div>
        <div className="hero-aside reveal reveal-delay"><div className="orbit-card"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">SS</div><span className="orbit-label label-top">Frontend</span><span className="orbit-label label-right">Problem solver</span><span className="orbit-label label-bottom">Always learning</span></div><p className="hero-note">Currently exploring the intersection of thoughtful design and dependable code.</p></div>
      </section>

      <div className="marquee" aria-label="Areas of interest"><span>Software development</span><b>✳</b><span>Frontend craft</span><b>✳</b><span>Networking</span><b>✳</b><span>Problem solving</span><b>✳</b></div>

      <section className="section about-section" id="about"><div className="section-heading"><p className="eyebrow">01 / About me</p><h2>A practical mind with a creative streak.</h2></div><div className="about-content"><p className="lead">My foundation spans software development, networking, and troubleshooting. I bring analytical thinking, communication, and teamwork to every problem, with a genuine appetite for learning new technologies.</p><div className="about-facts"><div><span>Based in</span><strong>Delhi, India</strong></div><div><span>Education</span><strong>MCA · GL Bajaj Institute</strong></div><div><span>Focus</span><strong>Web development</strong></div></div></div></section>

      <section className="section work-section" id="work"><div className="section-heading split-heading"><div><p className="eyebrow">02 / Selected work</p><h2>One project, built end to end.</h2></div><p className="heading-note">A small collection of work is better when every detail has a reason.</p></div><article className="project-card"><div className="project-visual"><div className="weather-window"><div className="weather-top"><span className="window-dots">● ● ●</span><span>WEATHER / 01</span></div><div className="weather-main"><span className="sun">☼</span><div><strong>28°</strong><span>New Delhi, IN</span></div></div><div className="weather-stats"><span>Humidity <b>64%</b></span><span>Wind <b>12 km/h</b></span></div></div><span className="visual-caption">Live weather interface</span></div><div className="project-details"><div className="project-title-row"><span className="project-index">01</span><h3>Weather Web Application</h3></div><p className="project-description">A responsive weather experience that turns real-time API data into a simple, friendly view of the conditions that matter.</p><ul className="project-list"><li>Location-based search for any city</li><li>Dynamic rendering of temperature, humidity, wind speed, and status</li><li>Responsive interface designed for desktop and mobile</li></ul><div className="tag-list"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Open API</span></div></div></article></section>

      <section className="section journey-section" id="journey"><div className="section-heading"><p className="eyebrow">03 / The journey</p><h2>Learning by doing.</h2></div><div className="journey-grid"><div className="timeline"><div className="timeline-item"><span className="timeline-date">2025 — present</span><div><h3>Master of Computer Applications</h3><p>GL Bajaj Institute of Technology and Management · AKTU</p></div></div><div className="timeline-item"><span className="timeline-date">Jan — Feb 2025</span><div><h3>Web Development Intern</h3><p>CodSoft · Delhi, India</p><small>Built website content and designs using HTML and CSS, including a portfolio, calculator, and landing page.</small></div></div><div className="timeline-item"><span className="timeline-date">2021 — 2024</span><div><h3>Bachelor of Computer Application</h3><p>Chaudhary Charan Singh University · Meerut</p></div></div></div><div className="skills-panel"><p className="eyebrow">Toolkit</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><p className="skills-note">From fundamentals to frameworks, I&apos;m building the range to make good ideas real.</p></div></div></section>

      <section className="section credentials-section"><div className="credentials-intro"><p className="eyebrow">04 / Credentials</p><h2>Proof of progress, collected along the way.</h2><p className="credentials-note">A few recent milestones in my learning journey. Open a certificate to view its details or download a copy.</p></div><div className="certificate-grid">{certifications.map((cert, index) => <article className="certificate-card" key={cert.title}><a className="certificate-preview" href={cert.image} target="_blank" rel="noreferrer"><img src={cert.image} alt={`${cert.title} certificate preview`} /></a><div className="certificate-info"><span className="certificate-number">0{index + 1}</span><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p><div className="certificate-actions"><a href={cert.download} download>Download certificate <span aria-hidden="true">↓</span></a>{cert.verify && <a href={cert.verify} target="_blank" rel="noreferrer">Verify <ArrowUpRight /></a>}</div></div></article>)}</div></section>

      <section className="contact-section" id="contact"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something <em>worth using.</em></h2><a className="button button-light" href="mailto:shivamsharmabca2021@gmail.com">Start a conversation <ArrowUpRight /></a><div className="contact-meta"><span>Shivam Sharma · 2026</span><div><a href="tel:+917217708118">+91 72177 08118</a><a href="https://linkedin.com/in/shivam-sharma-115439269" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div></div></section>
    </main>
  )
}

export default App
