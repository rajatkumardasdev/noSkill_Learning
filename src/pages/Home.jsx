// import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="ns-hero">

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>


        <div className="container hero-container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-7">

              <div className="hero-badge">
                <span></span>
                Learn. Practice. Build. Grow.
              </div>

              <h1 className="hero-title">

                Learn Skills.
                <br />

                <span>Build Your Future.</span>

              </h1>


              <p className="hero-description">

                Learn practical technology skills through
                structured courses, real-world projects,
                practice and career-focused learning.

              </p>


              <div className="hero-buttons">

                <a
                  href="/courses"
                  className="hero-primary-btn"
                >
                  Start Learning
                  <span>↗</span>
                </a>


                <a
                  href="/roadmaps"
                  className="hero-secondary-btn"
                >
                  Explore Roadmaps
                  <span>→</span>
                </a>

              </div>


              <div className="hero-trust">

                <div className="trust-avatars">

                  <span>R</span>
                  <span>A</span>
                  <span>S</span>
                  <span>+</span>

                </div>

                <div>

                  <strong>
                    Start your learning journey
                  </strong>

                  <small>
                    Build skills that matter.
                  </small>

                </div>

              </div>

            </div>


            {/* RIGHT */}
            <div className="col-lg-5">

              <div className="hero-visual">

                <div className="learning-card">

                  <div className="card-top">
                    <img src="./src/assets/Images/54.png" alt="" />

                  </div>



                </div>


                <div className="floating-card floating-one">

                  <span>✦</span>

                  <div>
                    <strong>Practice</strong>
                    <small>Daily challenges</small>
                  </div>

                </div>


                <div className="floating-card floating-two">

                  <span>◆</span>

                  <div>
                    <strong>Projects</strong>
                    <small>Build real apps</small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Home