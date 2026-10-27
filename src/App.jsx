import { useState } from "react";
import Videos from "./videos";
import "./App.css";
import hero from "./10.jpeg";
import aboutPhoto from "./about.jpeg/54.png";
function App() {
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">ALOK DIGITAL STUDIO</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#price">Price</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}

<section
  id="home"
  className="hero"
  style={{ backgroundImage: `url(${hero})` }}
>
  <div className="hero-content">
    <h1>ALOK DIGITAL STUDIO</h1>

    <p>
      Cinematic Wedding • Photography • Pre Wedding • Drone Shoot
    </p>

    <div className="hero-buttons">
      <button
        className="btn btn1"
        onClick={() => setShowBookingOptions(true)}
      >
        Book Now
      </button>

      <a href="#price" className="btn btn2">
  View Packages
</a>
    </div>

    {showBookingOptions && (
      <div className="booking-overlay">
        <div className="booking-popup">
          <button
            className="booking-close"
            onClick={() => setShowBookingOptions(false)}
            aria-label="Close"
          >
            ×
          </button>

          <h2>Book Your Event</h2>
          <p>Choose a WhatsApp number to contact us</p>

          <a
            className="booking-number"
            href="https://wa.me/919576349382"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: 9576349382
          </a>

          <a
            className="booking-number"
            href="https://wa.me/919507850511"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: 9507850511
          </a>
        </div>
      </div>
    )}
  </div>
</section>



      {/* About Section */}
      <section id="about" className="about">
        <div className="about-image">
          <img src={aboutPhoto} alt="About Alok Digital Studio" />
        </div>

        <div className="about-text">
          <h2>About Alok Digital Studio</h2>

          <p>
            Since <strong>2015</strong>, Alok Digital Studio has successfully
            covered <strong>700+ weddings</strong> with professional photography
            and cinematography.
          </p>

          <p>
            We provide Wedding Photography, Cinematic Video, Pre Wedding,
            Drone Shoot, Baby Shoot, Candid Photography, Event Shoot,
            Video Editing and Album Design.
          </p>

          <a href="#" className="btn btn1">
            Know More
          </a>
        </div>
      </section>
      {/* Services Section */}

<section id="services" className="services">

  <h2>Our Services</h2>

  <div className="service-box">

    <div className="card">
      <h3>📸 Wedding Photography</h3>
      <p>Beautiful and memorable wedding photography.</p>
    </div>

    <div className="card">
      <h3>🎥 Cinematic Video</h3>
      <p>Professional cinematic wedding films.</p>
    </div>

    <div className="card">
      <h3>💑 Pre Wedding</h3>
      <p>Creative pre wedding photo & video shoot.</p>
    </div>

    <div className="card">
      <h3>🚁 Drone Shoot</h3>
      <p>4K Drone coverage for weddings & events.</p>
    </div>

    <div className="card">
      <h3>📷 Candid Photography</h3>
      <p>Natural and emotional candid moments.</p>
    </div>

    <div className="card">
      <h3>🎬 Video Editing</h3>
      <p>Professional editing with cinematic effects.</p>
    </div>

  </div>

</section>
{/* Gallery Section */}

<section id="gallery" className="gallery">

  <h2>Our Gallery</h2>

  <p className="gallery-subtitle">
    Explore our latest wedding and cinematic moments
  </p>

  <div className="gallery-grid">

    <a href="/photos/Gallery/01 (1).jpg" target="_blank">
  <img src="/photos/Gallery/01 (1).jpg" alt="Wedding Photography" />
</a>
    <a href="/photos/Gallery/01 (2).jpg" target="_blank">
  <img src="/photos/Gallery/01 (2).jpg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/01 (3).jpg" target="_blank">
  <img src="/photos/Gallery/01 (3).jpg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/01 (4).jpg" target="_blank">
  <img src="/photos/Gallery/01 (4).jpg" alt="Wedding Photography" />
</a>
<a href="/photos/Gallery/01 (5).jpg" target="_blank">
  <img src="/photos/Gallery/01 (5).jpg" alt="Wedding Photography" />
</a>
   <a href="/photos/Gallery/02 (1).jpg" target="_blank">
  <img src="/photos/Gallery/02 (1).jpg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/02 (2).jpg" target="_blank">
  <img src="/photos/Gallery/02 (2).jpg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/04.jpeg" target="_blank">
  <img src="/photos/Gallery/04.jpeg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/09.jpeg" target="_blank">
  <img src="/photos/Gallery/09.jpeg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/10.jpeg" target="_blank">
  <img src="/photos/Gallery/10.jpeg" alt="Wedding Photography" />
</a>

<a href="/photos/Gallery/11.jpeg" target="_blank">
  <img src="/photos/Gallery/11.jpeg" alt="Wedding Photography" />
</a>
  </div>
{/* Videos inside Gallery */}
<Videos />
</section>
{/* Price Section */}

<section id="price" className="price">

  <h2>Our Wedding Packages</h2>

  <p className="price-subtitle">
    Choose the perfect package for your special day
  </p>

  <div className="price-grid">

    {/* ₹10,000 */}
    <div className="price-card">
      <h3>Only Video</h3>
      <h4>₹10,000</h4>
      <ul>
        <li>Traditional Video</li>
      </ul>
    </div>

    {/* ₹25,000 */}
    <div className="price-card">
      <h3>Traditional Package</h3>
      <h4>₹25,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>25 Page Album</li>
      </ul>
    </div>

    {/* ₹30,000 */}
    <div className="price-card">
      <h3>Traditional + Drone</h3>
      <h4>₹30,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>25 Page Album</li>
        <li>1 Day Drone</li>
      </ul>
    </div>

    {/* ₹35,000 */}
    <div className="price-card">
      <h3>Traditional + 4 LED TV</h3>
      <h4>₹35,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>25 Page Album</li>
        <li>4 LED TV</li>
      </ul>
    </div>

    {/* ₹40,000 */}
    <div className="price-card">
      <h3>Cinematic Package</h3>
      <h4>₹40,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>1 Day Cinematic</li>
        <li>30 Page Album</li>
        <li>1 Day Drone</li>
      </ul>
    </div>

    {/* ₹45,000 */}
    <div className="price-card">
      <h3>Cinematic + Candid</h3>
      <h4>₹45,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>1 Day Cinematic</li>
        <li>1 Day Candid</li>
        <li>30 Page Album</li>
        <li>1 Day Drone</li>
        <li>3 Day Work — Tilak, Haldi & Barat</li>
      </ul>
    </div>

    {/* ₹50,000 */}
    <div className="price-card featured">
      <h3>Royal Wedding Package</h3>
      <h4>₹50,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>1 Day Cinematic</li>
        <li>1 Day Candid</li>
        <li>30 Page Album</li>
        <li>1 Day Drone</li>
        <li>4 LED TV</li>
        <li>3 Day Work — Tilak, Haldi & Barat</li>
      </ul>
    </div>

    {/* ₹70,000 */}
    <div className="price-card">
      <h3>3 Day Wedding Package</h3>
      <h4>₹70,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>2 Day Cinematic</li>
        <li>1 Day Candid</li>
        <li>2 Day Drone</li>
        <li>1 Day Crane Camera</li>
        <li>1 Day Wall TV (8×12)</li>
        <li>3 Day Work — Tilak, Haldi & Barat</li>
      </ul>
    </div>

    {/* ₹1,10,000 */}
    <div className="price-card">
      <h3>Premium 3 Day Package</h3>
      <h4>₹1,10,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>3 Day Cinematic</li>
        <li>1 Day Candid</li>
        <li>2 Day Drone</li>
        <li>1 Day Crane Camera</li>
        <li>1 Day Wall TV (8×12)</li>
        <li>Pre-Wedding — 1 Song</li>
        <li>10 Reels</li>
        <li>45 Page Album</li>
        <li>1 Mini Album</li>
        <li>3 Day Work — Tilak, Haldi & Barat</li>
      </ul>
    </div>

    {/* ₹1,40,000 */}
    <div className="price-card">
      <h3>Royal 4 Day Package</h3>
      <h4>₹1,40,000</h4>
      <ul>
        <li>Traditional Video</li>
        <li>Traditional Photo</li>
        <li>3 Day Cinematic</li>
        <li>1 Day Candid</li>
        <li>2 Day Drone</li>
        <li>1 Day Crane Camera</li>
        <li>1 Day Wall TV (8×12)</li>
        <li>Pre-Wedding — 2 Songs</li>
        <li>20 Reels</li>
        <li>45 Page Album</li>
        <li>1 Mini Album</li>
        <li>4 Day Work — Tilak, Haldi, Mehndi & Barat</li>
      </ul>
    </div>

  </div>

</section>
{/* Additional Services Section */}

<section className="extra-services">

  <h2>Additional Services</h2>

  <p className="extra-services-subtitle">
    Customize your wedding package with additional services
  </p>

  <div className="extra-services-grid">

    <div className="extra-service-card">
      <h3>🎥 Cinematic</h3>
      <p>₹15,000 / Day</p>
    </div>

    <div className="extra-service-card">
      <h3>📸 Candid Photo</h3>
      <p>₹10,000 / Day</p>
    </div>

    <div className="extra-service-card">
      <h3>📺 Wall TV (8*12)</h3>
      <p>₹15,000 / Day</p>
    </div>

    <div className="extra-service-card">
      <h3>💑 Pre-Wedding — 1 Song Shoot</h3>
      <p>₹35,000</p>
    </div>

    <div className="extra-service-card">
      <h3>💑 Pre-Wedding — 2 Song Shoot</h3>
      <p>₹50,000</p>
    </div>

    <div className="extra-service-card">
      <h3>🎬 Crane Camera</h3>
      <p>₹12,000 / Day</p>
    </div>

  </div>

</section>
{/* Contact Section */}

<section id="contact" className="contact">

  <h2>Contact Us</h2>

  <p className="contact-subtitle">
    Get in touch with Alok Digital Studio for your special day
  </p>

  <div className="contact-grid">

    <div className="contact-card">
      <div className="contact-icon">📞</div>

      <h3>Call Us</h3>

      <a href="tel:9576349382">
        9576349382
      </a>

      <a href="tel:9507850511">
        9507850511
      </a>
    </div>


    <div className="contact-card">
      <div className="contact-icon">💬</div>

      <h3>WhatsApp</h3>

      <a
        href="https://wa.me/919576349382"
        target="_blank"
        rel="noreferrer"
      >
        Chat on WhatsApp
      </a>
      <a
        href="https://wa.me/919507850511"
        target="_blank"
        rel="noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>


    <div className="contact-card">
      <div className="contact-icon">📍</div>

      <h3>Our Location</h3>

      <p>
        Hardiyamor ,Nabiganj Road , Near by SBI Bank 
        <br />
        Block- Baikunthpur
        <br />
        District- Gopalganj, Bihar - 841416
      </p>
      <a
    href="https://maps.app.goo.gl/tfAzk4cHhE6LRK466"
    target="_blank"
    rel="noreferrer"
    className="map-link"
  >
    📍 View on Google Maps
  </a>
    </div>

  </div>

</section>
    </>
  );
}

export default App;