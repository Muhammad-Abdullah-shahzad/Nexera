import React, { useState } from 'react';
import "./styles.css"
// Main App Component
function App() {
  return (
    <div className="app-container">
      {/* Global Styles */}
      <style>
        {`
        /* Define CSS Variables for colors */
        :root {
          --color-black: #000;
          --color-white: #fff;
          --color-pink-500: #EC4899;
          --color-green-500: #10B981;
          --color-green-400: #34D399;
          --color-blue-400: #60A5FA;
          --color-gray-900: #1A202C;
          --color-gray-800: #2D3748;
          --color-gray-700: #4A5568;
          --color-gray-600: #718096;
          --color-gray-400: #9CA3AF;
          --color-gray-300: #D1D5DB;
          --color-gray-200: #E5E7EB;
          --color-yellow-400: #FBBF24;
        }

        /* Base Styles */
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-container {
          min-height: 100vh;
          background-color: var(--color-black);
          color: var(--color-white);
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        /* Navbar Styles */
        .navbar {
          background-color: var(--color-black);
          padding: 1rem 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-white);
        }
        .navbar-logo-pink { /* Specific class for the pink part of the logo */
          color: var(--color-pink-500);
        }
        .navbar-logo-white { /* Specific class for the pink part of the logo */
        color: #fff;
      }
        .navbar-links {
          display: none; /* Hidden on small screens */
          gap: 2rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .navbar-links {
            display: flex;
          }
        }
        .navbar-link {
          color: var(--color-white);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .navbar-link:hover {
          color: var(--color-pink-500);
        }
        .navbar-link-careers {
          display: flex;
          align-items: center;
        }
        .navbar-link-careers span {
          margin-left: 0.25rem;
          background-color: var(--color-pink-500);
          color: var(--color-white);
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
        }
        .navbar-buttons {
          display: none; /* Hidden on small screens */
          align-items: center;
          gap: 1rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .navbar-buttons {
            display: flex;
          }
        }
        .navbar-button-icon {
          background-color: var(--color-gray-700);
          color: var(--color-white);
          padding: 0.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .navbar-button-icon:hover {
          background-color: var(--color-gray-600);
        }
        .navbar-button-talk {
          background-color: var(--color-green-500);
          color: var(--color-black);
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .navbar-button-talk:hover {
          background-color: var(--color-green-400);
        }
        .mobile-menu-button-wrapper { /* Wrapper to help with centering on smaller screens */
          display: flex;
          align-items: center;
          justify-content: center; /* Center the button */
        }
        @media (min-width: 768px) { /* md breakpoint */
          .mobile-menu-button-wrapper {
            display: none;
          }
        }
        .mobile-menu-button {
          color: var(--color-white);
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          width: 2rem; /* Ensure button has a good touch target */
          height: 2rem;
          display: flex; /* Ensure SVG is centered within button */
          align-items: center;
          justify-content: center;
        }


        /* Hero Section Styles */
        .hero-section {
          position: relative;
          text-align: center;
          padding: 4rem 0;
          overflow: hidden;
        }
        @media (min-width: 640px) { /* sm breakpoint */
          .hero-section {
            padding: 6rem 0;
          }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
          .hero-section {
            padding: 8rem 0;
          }
        }
        .hero-title {
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) { /* sm breakpoint */
          .hero-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
          .hero-title {
            font-size: 4.5rem;
          }
        }
        .hero-title-pink {
          color: var(--color-pink-500);
        }
        .hero-title-emoji {
          margin-left: 0.5rem;
          color: var(--color-green-400);
        }
        .hero-description {
          font-size: 1.125rem;
          color: var(--color-gray-400);
          max-width: 48rem;
          margin: 0 auto 2.5rem auto;
        }
        @media (min-width: 640px) { /* sm breakpoint */
          .hero-description {
            font-size: 1.25rem;
          }
          .hero-description br.hidden-sm-inline { /* Specific targeting for the break tag */
            display: inline;
          }
        }
        .hero-image {
          position: absolute;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          display: none; /* Hidden on small screens */
          width: 150px; /* Fixed width for images */
          height: 100px; /* Fixed height for images */
        }
        @media (min-width: 768px) { /* md breakpoint */
          .hero-image {
            display: block;
          }
        }
        .hero-image-1 { top: 25%; left: 1rem; animation: float 3s ease-in-out infinite; }
        @media (min-width: 640px) { .hero-image-1 { left: 2.5rem; } }
        @media (min-width: 1024px) { .hero-image-1 { left: 5rem; } }

        .hero-image-2 { top: 50%; left: 25%; transform: translateX(-50%); animation: float 3.5s ease-in-out infinite; }
        .hero-image-3 { top: 25%; right: 1rem; animation: float 2.8s ease-in-out infinite; }
        @media (min-width: 640px) { .hero-image-3 { right: 2.5rem; } }
        @media (min-width: 1024px) { .hero-image-3 { right: 5rem; } }

        .hero-image-4 { top: 50%; right: 25%; transform: translateX(50%); animation: float 3.2s ease-in-out infinite; }
        .hero-image-5 { bottom: 25%; left: 25%; transform: translateX(-50%); animation: float 3.7s ease-in-out infinite; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* Section Common Styles */
        .section-padding {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        @media (min-width: 640px) {
          .section-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 3.75rem;
          }
        }
        .section-description {
          color: var(--color-gray-400);
          font-size: 1.125rem;
          max-width: 42rem;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .section-description {
            font-size: 1.25rem;
          }
        }

        /* Services Section Styles */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
           
          }
        }
        .service-card {
          background-color: var(--color-gray-800);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          height: 433px;
        }
        .service-card-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .service-card-description {
          color: var(--color-gray-300);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .service-card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .service-card-list-item {
          color: var(--color-gray-200);
          font-size: 1.125rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .service-card-list-item:hover {
          color: var(--color-white);
        }
        .service-color-pink { color: var(--color-pink-500); }
        .service-color-green { color: var(--color-green-500); }
        .service-color-blue { color: var(--color-blue-400); }

        /* Testimonial Section Styles */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .testimonial-card {
          background-color: var(--color-gray-800);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }
        .testimonial-rating {
          display: flex;
          margin-bottom: 1rem;
        }
        .testimonial-star {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--color-yellow-400);
          fill: currentColor;
        }
        .testimonial-quote {
          color: var(--color-gray-300);
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .testimonial-author-info {
          display: flex;
          align-items: center;
        }
        .testimonial-logo {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          margin-right: 1rem;
          object-fit: cover;
        }
        .testimonial-author-name {
          font-weight: 600;
          color: var(--color-white);
        }
        .testimonial-author-company {
          color: var(--color-gray-400);
          font-size: 0.875rem;
        }

        /* Team Section Styles */
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
          .team-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .team-card {
          background-color: var(--color-gray-800);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .team-card-icon {
          margin-bottom: 1rem;
        }
        .team-card-icon svg {
          width: 2rem;
          height: 2rem;
          color: var(--color-pink-500);
        }
        .team-card-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }
        .team-card-description {
          color: var(--color-gray-300);
          flex-grow: 1;
        }

        /* Technologies Section Styles */
        .technologies-section-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .technologies-section-subtitle {
            color: var(--color-blue-400); /* Example color, adjust as needed */
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .technologies-section-subtitle::after {
            content: '';
            display: block;
            width: 3rem;
            height: 2px;
            background-color: var(--color-blue-400);
            margin: 0.5rem auto 0;
        }
        .technologies-section-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 2rem;
            color: var(--color-white);
        }
        .technologies-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 3rem;
        }
        .tech-tab {
            background-color: var(--color-gray-700);
            color: var(--color-white);
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
            border: 1px solid transparent;
        }
        .tech-tab:hover {
            background-color: var(--color-gray-600);
        }
        .tech-tab.active {
            background-color: var(--color-blue-400);
            color: var(--color-black);
            border-color: var(--color-blue-400);
        }
        .technologies-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            justify-items: center;
        }
        @media (min-width: 640px) { /* sm breakpoint */
            .technologies-grid {
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap
            }
        }
        @media (min-width: 768px) { /* md breakpoint */
            .technologies-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .technologies-grid {
                grid-template-columns: repeat(6, 1fr);
            }
        }
        .tech-card {
            background-color: var(--color-gray-800);
            padding: 1.5rem 1rem;
            border-radius: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%; /* Ensure cards take full width in their grid column */
            max-width: 150px; /* Max width for individual cards */
        }
        .tech-card-icon {
            width: 90px; /* Adjusted icon size */
            height: 90px; /* Adjusted icon size */
            margin-bottom: 0.75rem;
            object-fit: contain;
        }
        .tech-card-name {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-white);
        }


        /* Contact Us Section Styles */
        .contact-form-container {
          max-width: 46rem; /* Adjusted max-width slightly to match image */
          margin-left: auto;
          margin-right: auto;
          background-color: var(--color-gray-800);
          padding: 3.3rem; /* Consistent padding */
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group label {
          display: block;
          color: var(--color-gray-300);
          font-size: 0.875rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          text-align: left;
        }
        .form-group input,
        .form-group textarea {
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border: 1px solid var(--color-gray-600);
          border-radius: 0.5rem;
          width: 100%;
          padding: 0.75rem 1rem; /* Consistent padding */
          color: var(--color-white);
          line-height: 1.25;
          background-color: var(--color-gray-700);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          text-align: left;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: var(--color-gray-400);
            opacity: 0.7;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-pink-500);
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.5);
        }
        .form-submit-button-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .form-submit-button {
          background-color: var(--color-green-500);
          color: var(--color-black);
          font-weight: bold;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          outline: none;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .form-submit-button:hover {
          background-color: var(--color-green-400);
        }

        /* Footer Styles */
        .footer {
          background-color: var(--color-gray-900);
          padding: 2rem 0;
          text-align: center;
          color: var(--color-gray-400);
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .footer-link {
          color: var(--color-gray-400);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--color-white);
        }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Clients Testimonial Section */}
        <ClientsTestimonialSection />

        {/* Team Section */}
        <TeamSection />

        {/* Technologies Section - NEW */}
        <TechnologiesSection />

        {/* Contact Us Section */}
        <ContactUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Logo - Updated to NEXERA */}
        <div className="navbar-logo">
          <span className="navbar-logo-white">NEXERA</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#" className="navbar-link">WORK</a>
          <a href="#" className="navbar-link">SERVICES</a>
          <a href="#" className="navbar-link">ABOUT</a>
          <a href="#" className="navbar-link">BLOG</a>
          <a href="#" className="navbar-link navbar-link-careers">
            CAREERS
            <span>1</span>
          </a>
        </div>

        {/* Action Buttons (for larger screens) */}
        <div className="navbar-buttons">
        
          <button className="navbar-button-talk">
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Button (for smaller screens) */}
        <div className="mobile-menu-button-wrapper">
          <button className="mobile-menu-button">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
      YOU  IMAGINE <br />
        <span className="hero-title-pink"> WE BUILD </span>
        <span className="hero-title-emoji"></span> <br />
       FOR YOU
      </h1>
      <p className="hero-description">
        Driving growth for leading brands and organizations through <br className="hidden-sm-inline" />
        high-performing software solutions and results-driven digital marketing.
      </p>

      {/* Placeholder images - In a real app, these would be optimized and probably loaded from a CDN */}
      <div className="hero-image hero-image-1">
        <img src="https://placehold.co/150x100/333/FFF?text=Image+1" alt="Digital Experience 1" />
      </div>
      <div className="hero-image hero-image-2">
        <img src="https://placehold.co/150x100/333/FFF?text=Image+2" alt="Digital Experience 2" />
      </div>
      <div className="hero-image hero-image-3">
        <img src="https://placehold.co/150x100/333/FFF?text=Image+3" alt="Digital Experience 3" />
      </div>
      <div className="hero-image hero-image-4">
        <img src="https://placehold.co/150x100/333/FFF?text=Image+4" alt="Digital Experience 4" />
      </div>
       <div className="hero-image hero-image-5">
        <img src="https://placehold.co/150x100/333/FFF?text=Image+5" alt="Digital Experience 5" />
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, items, colorClass }) => {
  return (
    <div className="service-card">
      <h3 className={`service-card-title ${colorClass}`}>{title}</h3>
      <p className="service-card-description">{description}</p>
      <ul className="service-card-list">
        {items.map((item, index) => (
          <li key={index} className="service-card-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "DESIGN",
      description: "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
      items: ["DISCOVERY", "WEB DESIGN", "USER EXPERIENCE DESIGN", "ACCESSIBLE DESIGN"],
      color: "service-color-pink",
    },
    {
      title: "BUILD",
      description: "We develop high-performing, scalable solutions that work seamlessly for your goals and your customers.",
      items: ["WEBSITE DEVELOPMENT", "CRAFT CMS", "SPEKTRIX INTEGRATION", "SHOPIFY DEVELOPMENT", "TECHNICAL SEO"],
      color: "service-color-green",
    },
    {
      title: "GROW",
      description: "We help you attract, engage, and convert customers with data-driven marketing that delivers results.",
      items: ["PAID ADVERTISING (PPC)", "SEARCH ENGINE OPTIMISATION", "DIGITAL MARKETING", "CONTENT STRATEGY", "SOCIAL MEDIA"],
      color: "service-color-blue",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-header">
        <h2 className="section-title">
          SERVICES WE <span className="service-color-pink">OFFER</span>
        </h2>
        <p className="section-description">
          We believe in getting the details right, keeping our promises, and always going the extra mile. It's how we work and why our clients trust us.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            items={service.items}
            colorClass={service.color}
          />
        ))}
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ rating, quote, author, company, logoUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="testimonial-star" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
          </svg>
        ))}
      </div>
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author-info">
        {logoUrl && (
          <img src={logoUrl} alt={`${company} logo`} className="testimonial-logo" />
        )}
        <div>
          <p className="testimonial-author-name">{author}</p>
          <p className="testimonial-author-company">{company}</p>
        </div>
      </div>
    </div>
  );
};

// Clients Testimonial Section Component
const ClientsTestimonialSection = () => {
  const testimonials = [
    {
      rating: 5,
      quote: "The Nexera  team were fantastic to work with. Their passion and skill shines through in each interaction and their dedication to our project ensured that the final product went beyond expectation. We are delighted with our new website and the feedback from our customers has been brilliant!",
      author: "Jen Rae",
      company: "Grand Opera House",
      logoUrl: "https://placehold.co/48x48/666/FFF?text=GO", // Placeholder logo
    },
    {
      rating: 5,
      quote: "Nexera deliver visionary design, technical competence, SEO expertise and excellent project management to create best of breed websites. A dedicated team of professionals that we would wholeheartedly recommend.",
      author: "Liane Goldring",
      company: "Mahlantini",
      logoUrl: "https://placehold.co/48x48/666/FFF?text=M", // Placeholder logo
    },
    {
      rating: 5,
      quote: "The team's creativity and attention to detail transformed our brand identity. We've seen a significant increase in engagement since the new website launched.",
      author: "Sarah Chen",
      company: "Tech Innovators",
      logoUrl: "https://placehold.co/48x48/666/FFF?text=TI", // Placeholder logo
    },
    {
      rating: 5,
      quote: "Outstanding work on our mobile application! It's intuitive, fast, and has received rave reviews from our users. Highly recommend their software development services.",
      author: "David Lee",
      company: "Global Solutions",
      logoUrl: "https://placehold.co/48x48/666/FFF?text=GS", // Placeholder logo
    },
  ];

  return (
    <section className="section-padding">
       <div className="section-header">
        <h2 className="section-title">
          SEE WHY OUR CLIENTS <span className="service-color-pink">TRUST</span> US
        </h2>
        <p className="section-description">
          We believe in getting the details right, keeping our promises, and always going the extra mile. It's how we work and why our clients trust us.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            quote={testimonial.quote}
            author={testimonial.author}
            company={testimonial.company}
            logoUrl={testimonial.logoUrl}
          />
        ))}
      </div>
    </section>
  );
};

// Team Feature Card Component
const TeamFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="team-card">
      <div className="team-card-icon">
        {/* Checkmark Icon - SVG for consistency and scalability */}
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      </div>
      <h3 className="team-card-title">{title}</h3>
      <p className="team-card-description">{description}</p>
    </div>
  );
};

// Team Section Component
const TeamSection = () => {
  const teamFeatures = [
    {
      title: "WE'RE ABOUT RESULTS",
      description: "We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.",
    },
    {
      title: "EXPERIENCED TEAM",
      description: "In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)",
    },
    {
      title: "QUALITY ASSURANCE",
      description: "We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.",
    },
    {
      title: "SUPPORT & AFTERCARE",
      description: "We pride ourselves on delivering highly responsive support long after your website has been launched.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-header">
        <h2 className="section-title">
          TEAM OF <br /> PROFESSIONALS
        </h2>
        <p className="section-description">
          Passionate, driven, and always prepared to go the extra mile, we bring <br className="hidden-sm-inline" />
          expertise and creativity to every project, guaranteeing your success.
        </p>
      </div>

      <div className="team-grid">
        {teamFeatures.map((feature, index) => (
          <TeamFeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

// Technologies Section Component
const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web Frontend");

  const allTechnologies = [
    // Web Frontend
    { name: "JavaScript", icon: "https://placehold.co/60x60/F7DF1E/000?text=JS", category: "Web Frontend" },
    { name: "React Js", icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png", category: "Web Frontend" },
    { name: "Typescript", icon: "https://cdn-icons-png.flaticon.com/256/5968/5968381.png", category: "Web Frontend" },
    { name: "Vue", icon: "https://cdn.iconscout.com/icon/free/png-256/free-vue-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-5-pack-icons-282497.png", category: "Web Frontend" },
    { name: "Angular", icon: "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226070.png", category: "Web Frontend" },
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png", category: "Web Frontend" },
    { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png", category: "Web Frontend" },
    // Web Backend
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", category: "Web Backend" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/256/5968/5968350.png", category: "Web Backend" },
    { name: "express", icon: "https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png", category: "Web Backend" },
    { name: "Ruby", icon: "https://cdn-icons-png.flaticon.com/512/919/919842.png", category: "Web Backend" },
    // Databases
    { name: "MongoDB", icon: "https://images.icon-icons.com/2699/PNG/512/mongodb_logo_icon_170943.png", category: "Databases" },
    { name: "SQL Server", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4deYjMvHoD5zMEuAF_kgds8uoslVJ3pFP0w&s", category: "Databases" },
    { name: "mySQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", category: "Databases" },
    // Cloud & DevOps
    { name: "AWS", icon: "https://img.icons8.com/color/512/amazon-web-services.png", category: "Cloud & DevOps" },
    { name: "Docker", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png", category: "Cloud & DevOps" },
    { name: "Git", icon: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png", category: "Cloud & DevOps" },
    // Mobile Apps
    { name: "React Native", icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png", category: "Mobile Apps" },
    { name: "Swift", icon: "https://cdn-icons-png.flaticon.com/512/732/732250.png", category: "Mobile Apps" },
    { name: "Kotlin", icon: "https://img.icons8.com/?size=512&id=GpAXtdqPQIJW&format=png", category: "Mobile Apps" },
    // UI/UX
    { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", category: "UI/UX" },
    { name: "Sketch", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_FNTPp9t9kntVyflzVPx_Wqyhm0aDQF1lQ&s", category: "UI/UX" },
    { name: "Adobe Illustrator", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png", category: "UI/UX" },
  ];

  const categories = ["Web Frontend", "Web Backend", "Databases", "Cloud & DevOps", "Mobile Apps", "UI/UX"];

  const filteredTechnologies = allTechnologies.filter(tech => tech.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="section-header">
        <h2 className="section-title">
          TECHNOLOGIES WE  <br /> USE
        </h2>
        <p className="section-description">
         We use all latest tools and frameworks that helps your bussiness scale
        </p>
      </div>

      <div className="technologies-tabs">
        {categories.map((category) => (
          <span
            key={category}
            className={`tech-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="technologies-grid">
        {filteredTechnologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.icon} alt={`${tech.name} icon`} className="tech-card-icon" />
            <span className="tech-card-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Us Section Component
const ContactUsSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., send data to a backend API or an email service.
    console.log("Form submitted!");
    // You can replace this with a custom modal or notification
    e.target.reset(); // Reset form fields
  };

  return (
    <section className="section-padding">
      <div className="section-header">
        <h2 className="section-title">
          LETS TALK BUSSINESS
        </h2>
        <p className="section-description">
          Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project or inquiry..."
              required
            ></textarea>
          </div>
          <div className="form-submit-button-wrapper">
            <button
              type="submit"
              className="form-submit-button"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} NEXERA. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default App;
