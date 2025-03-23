import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown">
          Hi, I'm <span className="highlight">Pravallika Karanam</span>
        </h1>
        <p className="hero-tagline animate__animated animate__fadeInUp">
          A passionate web developer building modern and responsive websites.
        </p>
        <a
          href="#projects"
          className="cta-button animate__animated animate__pulse"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
