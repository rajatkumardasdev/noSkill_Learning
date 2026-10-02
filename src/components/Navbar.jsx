import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="ns-navbar">

      <div className="ns-nav-container">

        {/* LOGO */}
        <Link to="/" className="ns-logo" onClick={closeMenu}>
          <span className="ns-logo-box">N</span>

          <span className="ns-logo-text">
            no<span>Skill</span>
            <small>LEARNING</small>
          </span>
        </Link>


        {/* RIGHT SIDE */}
        <div className="ns-nav-right">

          <Link to="/login" className="ns-login">
            Login
          </Link>

          <Link to="/signup" className="ns-start">
            Get Started
            <span>↗</span>
          </Link>

          {/* MENU BUTTON */}
          <button
            className={`ns-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>

        </div>

      </div>


      {/* DARK OVERLAY */}
      <div
        className={`ns-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>


      {/* FLOATING MENU */}
      <div className={`ns-menu-panel ${menuOpen ? "show" : ""}`}>

        <div className="ns-menu-header">
          <div>
            <span>EXPLORE</span>
            <h3>noSkill Learning</h3>
          </div>

          <button
            className="ns-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>


        <nav className="ns-menu-links">

          <Link to="/courses" onClick={closeMenu}>
            <div className="ns-menu-icon">◆</div>

            <div>
              <strong>Courses</strong>
              <small>Learn practical skills</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>


          <Link to="/roadmaps" onClick={closeMenu}>
            <div className="ns-menu-icon">◇</div>

            <div>
              <strong>Roadmaps</strong>
              <small>Follow your career path</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>


          <Link to="/practice" onClick={closeMenu}>
            <div className="ns-menu-icon">◆</div>

            <div>
              <strong>Practice</strong>
              <small>Improve your skills</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>


          <Link to="/projects" onClick={closeMenu}>
            <div className="ns-menu-icon">◇</div>

            <div>
              <strong>Projects</strong>
              <small>Build real-world projects</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>


          <Link to="/interview" onClick={closeMenu}>
            <div className="ns-menu-icon">◆</div>

            <div>
              <strong>Interview Prep</strong>
              <small>Prepare for your next job</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>


          <Link to="/about" onClick={closeMenu}>
            <div className="ns-menu-icon">◇</div>

            <div>
              <strong>About</strong>
              <small>Our learning community</small>
            </div>

            <span className="ns-menu-arrow">↗</span>
          </Link>

        </nav>


        <div className="ns-menu-footer">

          <span>START LEARNING</span>

          <Link to="/courses" onClick={closeMenu}>
            Explore all courses
            <b>→</b>
          </Link>

        </div>

      </div>

    </header>

    
  );
};

export default Navbar;