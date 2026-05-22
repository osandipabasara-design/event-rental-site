import heroImg from './assets/hero.png'
import './App.css'

const whatsappNumber = '94771234567' // replace with your WhatsApp number in international format without +
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello!%20I%20need%20a%20quote%20for%20an%20event%20rental.`

const categories = [
  {
    title: 'Seating',
    items: ['Plastic Chairs', 'Tiffany Chairs', 'Banquet Chairs'],
  },
  {
    title: 'Tables',
    items: ['Round tables', 'Plastic tables', 'Dining setups'],
  },
  {
    title: 'Canopies & Structures',
    items: ['Tents', 'Metal roofs', 'VIP huts'],
  },
  {
    title: 'Catering Equipment',
    items: ['Buffet sets', 'Gas equipment', 'Utensils'],
  },
]

const pricingHighlights = [
  { label: 'Starting from', value: 'Rs 25 per chair' },
  { label: 'Canopy packages', value: 'from Rs 2,250' },
  { label: 'Full event setups', value: 'available for weddings, parties & corporate events' },
]

const galleryPhotos = [
  { src: heroImg, alt: 'Event setup photo 1' },
  { src: heroImg, alt: 'Event setup photo 2' },
  { src: heroImg, alt: 'Event setup photo 3' },
  { src: heroImg, alt: 'Event setup photo 4' },
]

function App() {
  return (
    <div className="page">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Event Rental Services in Sri Lanka</span>
          <h1>Everything you need for weddings, parties & corporate events</h1>
          <p>
            Chairs, tables, canopies and catering equipment ready to make your event
            look professional and reliable. Send your event date and get a custom quote
            on WhatsApp.
          </p>
          <a className="cta-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Get Quote on WhatsApp
          </a>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src={heroImg} alt="Event rental setup" />
        </div>
      </header>

      <section className="section section-categories">
        <h2>Categories</h2>
        <div className="grid cards-grid">
          {categories.map((category) => (
            <article key={category.title} className="card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-pricing">
        <h2>Simple pricing highlight</h2>
        <div className="grid pricing-grid">
          {pricingHighlights.map((item) => (
            <div key={item.value} className="pricing-card">
              <p className="pricing-label">{item.label}</p>
              <p className="pricing-value">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-gallery">
        <h2>Gallery</h2>
        <p className="section-note">
          Real event photos build trust more than text. Replace these with your own setup images.
        </p>
        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="section section-contact">
        <div className="contact-card">
          <h2>Contact</h2>
          <p>Send us your event date and we will prepare a custom package within minutes.</p>
          <a className="cta-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Send WhatsApp Message
          </a>
          <div className="contact-details">
            <p><strong>Phone:</strong> +94 77 123 4567</p>
            <p><strong>Location:</strong> Colombo, Sri Lanka</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
