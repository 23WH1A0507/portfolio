import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://linkedin.com/in/pravallika"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="https://github.com/23wh1a0507"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a href="mailto:pravallika@example.com" aria-label="Email">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
      <p className="footer-text">
        &copy; 2023 Pravallika Karanam. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
