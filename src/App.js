import './App.css';
import heroImage from './devops_hero_illustration_1768718401683.png'; // Using the newly generated asset

function App() {
  return (
    <div className="App">
      <div className="glow-bg"></div>

      <main className="hero-container">
        <div className="badge">Production Ready • CI/CD Enabled</div>

        <h1 className="title-main">
          DevOps <br />
          Ship with Confidence
        </h1>

        <p className="subtitle">
          Experience the pinnacle of containerized deployment. This application is powered by Docker,
          orchestrated by GitHub Actions, and scales seamlessly on AWS Elastic Beanstalk.
        </p>

        <a
          className="link-btn"
          href="https://github.com/vikas9dev/docker-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pipeline Source
        </a>

        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Future of DevOps" />
        </div>

        <section className="stats-grid">
          <div className="stat-card glass">
            <div className="stat-icon">🐳</div>
            <h3>Docker</h3>
            <p>Optimized multi-stage builds ensuring minimal footprint and maximum security.</p>
          </div>

          <div className="stat-card glass">
            <div className="stat-icon">🚀</div>
            <h3>GitHub Actions</h3>
            <p>Fully automated CI/CD pipeline triggering tests and cloud delivery on every push.</p>
          </div>

          <div className="stat-card glass">
            <div className="stat-icon">☁️</div>
            <h3>AWS Cloud</h3>
            <p>High-availability hosting on Elastic Beanstalk with automated health monitoring.</p>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: '80px', padding: '20px', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
        © 2026 Developed by <a href="https://github.com/vikas9dev" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Vikas</a> • End-to-End DevOps Automation
      </footer>
    </div>
  );
}

export default App;
