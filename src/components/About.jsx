import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title animate__animated animate__fadeIn">
        About Me
      </h2>

      <div className="about-content animate__animated animate__fadeInUp">
        <p className="intro">
          Hi! I'm <strong>Pravallika Karanam</strong>, a passionate{" "}
          <span className="highlight">Web3 enthusiast</span> and aspiring
          developer. I love <span className="highlight">building projects</span>
          , solving <span className="highlight">complex problems</span> with
          Data Structures & Algorithms, and contributing to{" "}
          <span className="highlight">open-source</span>. My passion for
          technology is driven by the desire to create innovative solutions that
          make a real impact.
        </p>

        <div className="about-highlights">
          <p className="animate__animated animate__fadeInLeft animate__delay-1s">
            <i className="fas fa-rocket highlight-icon"></i> 🚀 Web Development
            & Cloud Computing (React, Node.js, AWS)
          </p>
          <p className="animate__animated animate__fadeInLeft animate__delay-2s">
            <i className="fas fa-code highlight-icon"></i> 💡 DSA & Competitive
            Programming
          </p>
          <p className="animate__animated animate__fadeInLeft animate__delay-3s">
            <i className="fas fa-project-diagram highlight-icon"></i> 🔨
            Real-World Projects & Innovation
          </p>
        </div>

        <p className="current-projects">
          Currently, I’m working on a <strong>Skill Exchange Platform</strong>,
          built with React and Node.js, designed to foster mentorship networking
          and skill sharing.
        </p>

        {/* Call to Action */}
        <div className="about-cta">
          <a
            href="https://github.com/23wh1a0507"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View My GitHub"
          >
            <button className="cta-button animate__animated animate__pulse">
              <i className="fab fa-github"></i> View My GitHub
            </button>
          </a>
          <a
            href="https://linkedin.com/in/pravallika-karanam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <button className="cta-button animate__animated animate__pulse">
              <i className="fab fa-linkedin"></i> Connect on LinkedIn
            </button>
          </a>
          <a href="mailto:pravallika4620@example.com" aria-label="Contact Me">
            <button className="cta-button animate__animated animate__pulse">
              <i className="fas fa-envelope"></i> Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
