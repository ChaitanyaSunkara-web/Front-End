import './App.css'

const features = [
  {
    number: '01',
    title: 'Find your flow',
    description:
      'Bring your notes, plans, and big-picture thinking together in one calm, focused space.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 9.5h13.5M5 16h22M5 22.5h13.5" />
        <circle cx="23" cy="9.5" r="3" />
        <circle cx="23" cy="22.5" r="3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Make it together',
    description:
      'Share early, build better. Invite your people in and turn good ideas into great work.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="12" cy="11" r="5" />
        <path d="M3.5 26v-2a8.5 8.5 0 0 1 17 0v2h-17Z" />
        <path d="M21 7a5 5 0 0 1 0 9.5M25 19a8.5 8.5 0 0 1 3.5 7" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Keep the momentum',
    description:
      'A little progress adds up. See what is moving, what is next, and where to focus.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 25V7M5 25h23" />
        <path d="m9 20 6-6 4 3 8-9" />
        <path d="M21 8h6v6" />
      </svg>
    ),
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hardstone home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Hardstone</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">What you can do</a>
          <a href="#about">Our approach</a>
          <a href="#footer">Say hello</a>
        </nav>

        <a className="header-cta" href="#features">
          Get started <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              A little more room to think
            </p>
            <h1>
              Createing
              <br />
              afrunt End is an <span>Art</span>
            </h1>
            <p className="hero-description">
              Make space for your ideas, your plans, and all the things you
              can&apos;t wait to make happen.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                Find your starting point <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#about">
                A fresh way to work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-spark" aria-hidden="true">✳</span>
              Made for the work that matters to you
            </div>
          </div>

          <div
            className="hero-art"
            role="img"
            aria-label="A colorful illustration of a creative workspace"
          >
            <div className="art-sun" />
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-spark art-spark-one">✳</div>
            <div className="art-spark art-spark-two">✳</div>
            <div className="art-card">
              <div className="art-card-top">
                <span>YOUR SPACE, YOUR PACE</span>
                <span className="art-menu">•••</span>
              </div>
              <div className="art-card-title">A brighter<br />kind of busy.</div>
              <div className="art-card-rule" />
              <div className="art-task">
                <span className="task-check">✓</span>
                <span>Make room for ideas</span>
              </div>
              <div className="art-task">
                <span className="task-check task-check-empty" />
                <span>Bring the good ones to life</span>
              </div>
              <div className="art-card-footer">
                <span className="avatar avatar-one">J</span>
                <span className="avatar avatar-two">M</span>
                <span className="avatar avatar-three">A</span>
                <span className="art-card-caption">A little progress, every day</span>
              </div>
            </div>
            <div className="art-sticker">MAKE<br />IT YOURS</div>
            <div className="art-caption">YOUR NEXT CHAPTER <span>→</span></div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading" id="about">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              The Hardstone difference
            </p>
            <h2>Less keeping up.<br /><span>More moving forward.</span></h2>
            <p className="section-description">
              A softer place to land your thoughts, and a clearer path to what
              comes next.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#footer" aria-label={`Learn more: ${feature.title}`}>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Hardstone</span>
        </a>
        <p>A brighter kind of busy.</p>
        <a className="footer-link" href="mailto:hello@hardstone.studio">
          Made for your next big thing <span aria-hidden="true">↗</span>
        </a>
        <span className="copyright">© 2026 Hardstone</span>
      </footer>
    </div>
  )
}

export default App
