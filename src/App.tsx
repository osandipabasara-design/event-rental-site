import './App.css'

const whatsappPhone = '947xxxxxxxxx'
const whatsappMessage = encodeURIComponent(
  'Hello, I need an event rental quote for my wedding / party / corporate event.'
)
const whatsappLink = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`

function App() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="header-top">
          <div className="brand-row">
            <div className="logo-mark">S</div>
            <div>
              <p className="brand-name">Spark Events</p>
              <p className="brand-tag">Event Organising • Event Rental</p>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#hero">Home</a>
            <a href="#categories">Categories</a>
            <a href="#pricing">Pricing</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div id="hero" className="hero-section">
          <div>
            <p className="eyebrow">Event Rental Services in Sri Lanka</p>
            <h1>Everything you need for weddings, parties & corporate events</h1>
            <p className="hero-copy">
              Chairs • Tables • Canopies • Catering Equipment
            </p>
            <a className="button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Get Quote on WhatsApp
            </a>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <span>Professional rental support</span>
              <p>Quick WhatsApp conversion and reliable event setup delivery.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="categories" className="section-block">
          <div className="section-intro">
            <p className="section-label">Service categories</p>
            <h2>We rent the essentials for every event</h2>
          </div>
          <div className="grid cards-grid">
            <article className="card">
              <h3>Seating</h3>
              <p>Plastic Chairs, Tiffany Chairs, Banquet Chairs</p>
            </article>
            <article className="card">
              <h3>Tables</h3>
              <p>Round tables, plastic tables, dining setups</p>
            </article>
            <article className="card">
              <h3>Canopies & Structures</h3>
              <p>Tents, metal roofs, VIP huts</p>
            </article>
            <article className="card">
              <h3>Catering Equipment</h3>
              <p>Buffet sets, gas equipment, utensils</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="section-block highlight-block">
          <div className="section-intro">
            <p className="section-label">Simple pricing highlight</p>
            <h2>Starting prices for quick trust</h2>
          </div>
          <div className="pricing-list">
            <div className="pricing-item">
              <span>Starting from</span>
              <strong>Rs 25 per chair</strong>
            </div>
            <div className="pricing-item">
              <span>Canopy packages</span>
              <strong>from Rs 2250</strong>
            </div>
            <div className="pricing-item">
              <span>Full event setups</span>
              <strong>available</strong>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-block gallery-block">
          <div className="section-intro">
            <p className="section-label">Gallery</p>
            <h2>Real event photos from Sri Lanka</h2>
          </div>
          <div className="grid gallery-grid">
            <div className="gallery-card">Photo 1 — replace with your event image</div>
            <div className="gallery-card">Photo 2 — replace with your event image</div>
            <div className="gallery-card">Photo 3 — replace with your event image</div>
            <div className="gallery-card">Photo 4 — replace with your event image</div>
          </div>
          <p className="gallery-note">
            Use real phone photos of setups, tents, chairs, tables and buffet setups to build trust.
          </p>
        </section>

        <section id="contact" className="section-block contact-block">
          <div className="section-intro">
            <p className="section-label">Contact</p>
            <h2>Send your event details on WhatsApp</h2>
          </div>
          <div className="contact-panel">
            <div>
              <a className="button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <p className="contact-copy">
                Send us your event date and we will prepare a custom package within minutes.
              </p>
            </div>
            <div className="contact-details">
              <p><strong>Phone:</strong> +94 7XXXXXXXX</p>
              <p><strong>Location:</strong> Colombo, Sri Lanka</p>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <p className="footer-title">Spark Events</p>
            <p className="footer-copy">
              Trusted Sri Lanka event rentals for weddings, parties and corporate gatherings.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <p className="footer-heading">Contact</p>
              <p>Phone: +94 7XXXXXXXX</p>
              <p>Email: hello@sparkevents.lk</p>
              <p>WhatsApp: +94 7XXXXXXXX</p>
            </div>
            <div>
              <p className="footer-heading">Follow</p>
              <p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></p>
              <p><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
