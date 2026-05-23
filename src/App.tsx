import './App.css'
import logo from './assets/logo.jpeg'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import image5 from './assets/image5.jpeg'
import image6 from './assets/image6.jpeg'
import { FaFacebook, FaTiktok, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const whatsappPhone = '94777290610'
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
            <img src={logo} alt="Spark Events logo" className="brand-logo" />
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
              Elevate your special occasions with our premium event rentals. We provide top-tier seating, elegant tables, robust canopies, and professional catering equipment to ensure your weddings, parties, and corporate events are truly unforgettable.
            </p>
            {/* CTA moved to Contact section per request */}
          </div>
          <div className="hero-visual">
            <img src={logo} alt="Spark Events Large Logo" className="hero-large-logo" />
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
          <div className="pricing-list pricing-cards">
            <article className="pricing-card">
              <div className="pricing-card-body">
                <h3>Seating</h3>
                <p className="price"><span className="currency">Rs</span> <span className="amount">25</span><span className="per"> / chair</span></p>
                <p className="muted">Plastic, Tiffany & Banquet chairs</p>
              </div>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-body">
                <h3>Tables</h3>
                <p className="price"><span className="currency">Rs</span> <span className="amount">400</span><span className="per"> / table</span></p>
                <p className="muted">Round, dining & plastic tables</p>
              </div>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-body">
                <h3>Canopies & Huts</h3>
                <p className="price"><span className="currency">Rs</span> <span className="amount">2250</span><span className="per"> / package</span></p>
                <p className="muted">Tents, metal roofs, VIP huts</p>
              </div>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-body">
                <h3>Buffet Sets & Equipment</h3>
                <p className="price"><span className="currency">Rs</span> <span className="amount">3000</span><span className="per"> / set</span></p>
                <p className="muted">Buffet sets, gas equipment, utensils</p>
              </div>
            </article>
          </div>
        </section>

        <section id="gallery" className="section-block gallery-block">
          <div className="section-intro">
            <p className="section-label">Gallery</p>
            <h2>Real event photos from Sri Lanka</h2>
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              <img src={image1} className="gallery-img" alt="Event setup 1" />
              <img src={image2} className="gallery-img" alt="Event setup 2" />
              <img src={image3} className="gallery-img" alt="Event setup 3" />
              <img src={image4} className="gallery-img" alt="Event setup 4" />
              <img src={image5} className="gallery-img" alt="Event setup 5" />
              <img src={image6} className="gallery-img" alt="Event setup 6" />
              
              <img src={image1} className="gallery-img" alt="Event setup 1" />
              <img src={image2} className="gallery-img" alt="Event setup 2" />
              <img src={image3} className="gallery-img" alt="Event setup 3" />
              <img src={image4} className="gallery-img" alt="Event setup 4" />
              <img src={image5} className="gallery-img" alt="Event setup 5" />
              <img src={image6} className="gallery-img" alt="Event setup 6" />
            </div>
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
            <div style={{ textAlign: 'center' }}>
              <a className="button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Get Quote on WhatsApp
              </a>
              <p className="contact-copy" style={{ margin: '20px auto 0' }}>
                Send us your event date and we will prepare a custom package within minutes.
              </p>
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
              <div className="footer-links">
                <a href="tel:+94777290610"><FaPhoneAlt /> +94 777 290 610</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
                <a href="https://share.google/QagW8DOWTOVyc7Ako" target="_blank" rel="noreferrer"><FaMapMarkerAlt /> Location</a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Follow Us</p>
              <div className="footer-links">
                <a href="https://www.facebook.com/nivanfestivalgoods/" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
                <a href="https://www.tiktok.com/@nivanfestivalgoods?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7623344093343417872" target="_blank" rel="noreferrer"><FaTiktok /> TikTok</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
