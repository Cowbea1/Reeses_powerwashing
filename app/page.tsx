
"use client";

import { useState } from "react";

const services = [
  {
    name: "House Washing",
    description: "Remove dirt, mold and grime from your home's exterior.",
    image: "/house.jpg",
  },
  {
    name: "Driveway Cleaning",
    description: "Restore the look of your concrete and remove buildup.",
    image: "/driveway.jpg",
  },
  {
    name: "Sidewalk Cleaning",
    description: "Keep your walkways looking clean and welcoming.",
    image: "/driveway.jpg",
  },
  {
    name: "Patio & Deck Cleaning",
    description: "Refresh your outdoor living spaces.",
    image: "/patio.jpg",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#" className="logo">
          <span>Reese's</span>
          <small>POWER WASHING SERVICES</small>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="button">
          Get a Free Quote
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">RESIDENTIAL & COMMERCIAL</p>
          <h1>
            WE WASH IT ALL.
            <br />
            <span>YOU ENJOY IT ALL.</span>
          </h1>
          <p className="hero-text">
            Professional pressure washing for your
            home, driveway and more.
          </p>
          <a href="#contact" className="button">
            GET A FREE QUOTE →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <p className="eyebrow blue">OUR SERVICES</p>
        <h2>RESIDENTIAL PRESSURE WASHING</h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <img src={service.image} alt="" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="results section">
        <p className="eyebrow blue">REAL RESULTS</p>
        <h2>BEFORE & AFTER</h2>
        <p>
          See the difference a professional cleaning
          can make.
        </p>
        <div className="results-grid">
          <img src="/driveway.jpg" alt="Driveway cleaning example" />
          <img src="/house.jpg" alt="House washing example" />
        </div>
        <small>
          Replace these placeholders with actual project photos.
        </small>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div>
          <p className="eyebrow blue">WHY CHOOSE REESE'S?</p>
          <h2>A CLEANER PROPERTY STARTS HERE.</h2>
          <p>
            Looking for a fresh, clean exterior?
            Get in touch to discuss your pressure
            washing project.
          </p>
        </div>
        <div className="benefits">
          <p>✓ Residential & commercial service</p>
          <p>✓ Convenient quote requests</p>
          <p>✓ Exterior cleaning solutions</p>
          <p>✓ Friendly, professional service</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow blue">LET'S GET STARTED</p>
          <h2>REQUEST YOUR FREE QUOTE</h2>
          <p>
            Tell us what you need cleaned and
            we'll get back to you.
          </p>
        </div>

        <form
          className="quote-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            required
          />
          <select defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Tell us about your project"
            rows={4}
          />
          <button className="button" type="submit">
            REQUEST A QUOTE →
          </button>
          {submitted && (
            <p>
              Demo form only — connect a form service
              before accepting real requests.
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>REESE'S POWER WASHING SERVICES</h2>
        <p>Residential & Commercial</p>
        <a href="tel:912-687-9583">Phone: 912-687-9583</a>
        <br/>
        <a href="https://www.facebook.com/thomas.reese.3597/photos">Facebook</a>
      </footer>
    </main>
  );
}