// import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ns-footer">

      {/* Background glow */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="container">

        {/* =========================================
            TOP CTA
        ========================================= */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span className="footer-eyebrow">
              START YOUR JOURNEY
            </span>

            <h2>
              Stop watching.
              <br />
              <span>Start building.</span>
            </h2>

            <p>
              Learn practical skills, build real projects,
              practice consistently and move closer to your
              career goals.
            </p>

          </div>


          <Link to="/courses" className="footer-cta-btn">
            Start Learning
            <span>↗</span>
          </Link>

        </div>


        {/* =========================================
            FOOTER MAIN
        ========================================= */}

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <span className="footer-logo-box">
                N
              </span>

              <span className="footer-logo-text">
                no<span>Skill</span>

                <small>
                  LEARNING
                </small>
              </span>

            </Link>


            <p>
              A practical learning platform for people
              who want to learn skills, build projects
              and grow their careers.
            </p>


            <div className="footer-socials">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                Git
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

            </div>

          </div>


          {/* LEARN */}
          <div className="footer-column">

            <h3>
              Learn
            </h3>

            <Link to="/courses">
              Courses
            </Link>

            <Link to="/roadmaps">
              Roadmaps
            </Link>

            <Link to="/practice">
              Practice
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/interview">
              Interview Prep
            </Link>

          </div>


          {/* EXPLORE */}
          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <Link to="/javascript">
              JavaScript
            </Link>

            <Link to="/react">
              React
            </Link>

            <Link to="/node">
              Node.js
            </Link>

            <Link to="/mongodb">
              MongoDB
            </Link>

            <Link to="/fullstack">
              Full Stack
            </Link>

          </div>


          {/* COMPANY */}
          <div className="footer-column">

            <h3>
              Company
            </h3>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/community">
              Community
            </Link>

            <Link to="/faq">
              FAQ
            </Link>

          </div>


          {/* RESOURCES */}
          <div className="footer-column">

            <h3>
              Resources
            </h3>

            <Link to="/notes">
              Notes
            </Link>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/guides">
              Guides
            </Link>

            <Link to="/help">
              Help Center
            </Link>

            <Link to="/support">
              Support
            </Link>

          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} noSkill Learning.
            All rights reserved.
          </p>


          <div className="footer-legal">

            <Link to="/privacy">
              Privacy
            </Link>

            <Link to="/terms">
              Terms
            </Link>

            <Link to="/cookies">
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;