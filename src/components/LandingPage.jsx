import React, { useState, useEffect, useRef } from 'react';
import "./styles.css"

// Main App Component
function App() {
  // State to control the light mode for sections
  const [isLightModeActive, setIsLightModeActive] = useState(false);

  // Define images for the animated product showcase section (formerly productImages)
  const productImages = [
    "https://www.ue-germany.com/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
    "https://shaynakit.com/storage/assets/cover_project/RieLrSZWwO2tv0ggV5ioq4DoyejdKC0fxhMhZjAo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40GVeo1rP4rTFz0Z5uCanInulfoa0qYV2QSCkHQSig7Iz7DgJH0cH3hDW5pOw45_5Y3k&usqp=CAU",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/326588785/original/f64189622e62639beac78e6e189c2315981e25e8/do-mobile-app-ui-ux-design-in-figma.jpg",
    "https://cdn.dribbble.com/userupload/43358248/file/original-8431914111dc9de01771e44cf3ee6a54.png?resize=752x&vertical=center",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAJJR29Ob1gO45HS1hREE6I2nZMToRPDetA&s",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336930214/original/edaa674c176e4a0af22958a4917797e85bc2dcec/do-website-ui-design-and-mobile-app-ui-ux-design-ui-ux-design-in-figma.png",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/225733566/original/bd971696f26cbe92b6e2d149bac420dd199b3a10/create-website-ui-ux-design-or-web-ui-template-in-figma-xd-or-photoshop-453a.jpg",
  ];

  // Define portfolio items for the NEW staggered portfolio section
  const portfolioItems = [
    {
      image: "https://www.ue-germany.com/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
      title: "UI/UX Design Project",
      description: "Crafting intuitive and beautiful user interfaces for modern applications."
    },
    {
      image: "https://shaynakit.com/storage/assets/cover_project/RieLrSZWwO2tv0ggV5ioq4DoyejdKC0fxhMhZjAo.png",
      title: "Web Development Solution",
      description: "Building robust and high-performing web applications with cutting-edge technologies."
    },
    {
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/c87609212421217.Y3JvcCwzMDY4LDI0MDAsMCww.jpg",
      title: "Mobile App Design",
      description: "Designing engaging and user-friendly mobile experiences for iOS and Android."
    },
    {
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/326588785/original/f64189622e62639beac78e6e189c2315981e25e8/do-mobile-app-ui-ux-design-in-figma.jpg",
      title: "Figma UI/UX Project",
      description: "Interactive prototypes and user-centered designs using Figma for seamless collaboration."
    },
    {
      image: "https://cdn.dribbble.com/userupload/43358248/file/original-8431914111dc9de01771e44cf3ee6a54.png?resize=752x&vertical=center",
      title: "Digital Product Showcase",
      description: "Visually highlighting key features and benefits of digital products to captivate audiences."
    },
    {
      image: "https://www.bypeople.com/wp-content/uploads/2021/10/figma-ui-cover.png",
      title: "Brand Identity Creation",
      description: "Developing strong and memorable brand visuals that resonate with your target audience."
    },
    {
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336930214/original/edaa674c176e4a0af22958a4917797e85bc2dcec/do-website-ui-design-and-mobile-app-ui-ux-design-ui-ux-design-in-figma.png",
      title: "Website UI/UX Redesign",
      description: "Modernizing interfaces for improved usability and a fresh, contemporary look."
    },
    {
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/225733566/original/bd971696f26cbe92b6e2d149bac420dd199b3a10/create-website-ui-ux-design-or-web-ui-template-in-figma-xd-or-photoshop-453a.jpg",
      title: "Web Template Development",
      description: "Creating customizable and scalable web templates for diverse business needs."
    },
  ];


  return (
    <div className="app-container">
      {/* Global Styles */}
      <style>
        {`
        /* Define CSS Variables for colors */
        :root {
          --color-black: #000;
          --color-white: #fff;
          --color-pink-500: #EF4444; /* Red */
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

        /* Base Styles - These remain the default dark theme */
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden; /* Prevent horizontal scrolling on the body */
        }

        .app-container {
          min-height: 100vh;
          background-color: var(--color-black); /* Always dark background for the app */
          color: var(--color-white); /* Always white text for the app */
          font-family: 'Inter', sans-serif;
          /* No global theme transition here, as only specific section changes */
        }

        .container {
          max-width: 2200px; /* dont change it gemini*/
          margin-left: auto;
          margin-right: auto;
          padding-left: 0px; /* dont change it gemini*/
          padding-right: 0px; /* dont change it gemini*/
          /* Ensure container itself doesn't cause overflow on small screens */
          box-sizing: border-box;
          width: 100%; /* Ensure it takes full available width */
        }
        /* Specific adjustment for smaller screens to reduce padding and ensure content fits */
        @media (max-width: 767px) {
          .container {
            padding-left: 0.5rem; /* Reduced padding for very small screens */
            padding-right: 0.5rem;
          }
        }


        /* Navbar Styles */
        .navbar {
          background-color: var(--color-black);
          padding: 1rem 0; /* Remove horizontal padding for edge alignment */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          margin: 0;
          padding: 0 1.5rem; /* Small side padding for breathing room */
        }
        /* Adjust navbar content padding for smaller screens */
        @media (max-width: 767px) {
          .navbar-content {
            padding: 0 0.5rem; /* Even smaller padding for mobile navbar */
          }
        }
        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-white);
          margin-left: 0.5rem; /* Small left margin */
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
          color: var(--color-black);
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .navbar-button-talk:hover {
          background-color: #EF4444;
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
          overflow: hidden; /* Ensure content within hero section doesn't cause overflow */
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
          font-size: 3rem; /* Default for smallest screens, approx 48px */
          letter-spacing: 0.01em;
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 800;
          line-height: 0.8;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .hero-title-text {
          background-color: #2e2e2e;
          color: white;
          font-style: italic;
          padding: 0em 0.3em;
          border-radius: 1rem;
          display: inline-block;
        }
        @media (min-width: 640px) { /* sm breakpoint */
          .hero-title {
            font-size: 4rem; /* Example: Scale up for sm breakpoint */
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
          line-height: 1.7rem;
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
          object-fit: cover; /* Ensure images cover their area */
          animation: float 3s ease-in-out infinite; /* Keep float animation */
        }

        /* Mobile specific adjustments for hero images */
        @media (max-width: 767px) { /* Apply to screens smaller than md breakpoint */
          .hero-image {
            display: block; /* Ensure images are visible on mobile */
            width: 25vw; /* Responsive width for mobile */
            height: auto; /* Maintain aspect ratio */
            max-width: 120px; /* Max width to prevent too large images on slightly bigger mobiles */
            max-height: 80px; /* Max height */
            z-index: 0; /* Ensure images are behind text */
          }
          .hero-image-1 { top: 10%; left: 5%; animation-duration: 3s; }
          .hero-image-2 { top: 30%; right: 5%; animation-duration: 3.5s; } /* Adjusted to right */
          .hero-image-3 { top: 60%; left: 5%; animation-duration: 2.8s; }
          .hero-image-4 { top: 80%; right: 5%; animation-duration: 3.2s; } /* Adjusted to right */
          /* .hero-image-5 is removed */

          /* Adjust padding for hero section on mobile to prevent text overlap */
          .hero-section {
            padding-top: 8rem; /* More space at the top for images */
            padding-bottom: 8rem; /* More space at the bottom for images */
          }
          .hero-title, .hero-description {
            position: relative; /* Ensure text stays on top */
            z-index: 1; /* Ensure text is above images */
          }

        }

        @media (min-width: 768px) { /* md breakpoint and up */
          .hero-image {
            display: block; /* Ensure images are visible on desktop */
            width: 150px; /* Fixed width for desktop */
            height: 100px; /* Fixed height for desktop */
          }
          .hero-image-1 { top: 20%; left: 2.5rem; animation-duration: 3s; }
          .hero-image-2 { top: 50%; left: 25%; transform: translateX(-50%); animation-duration: 3.5s; }
          .hero-image-3 { top: 25%; right: 2.5rem; animation-duration: 2.8s; }
          .hero-image-4 { top: 50%; right: 25%; transform: translateX(50%); animation-duration: 3.2s; }
          .hero-image-5 { bottom: 25%; left: 25%; transform: translateX(-50%); animation-duration: 3.7s; }
        }
        @media (min-width: 1024px) { /* lg breakpoint and up */
          .hero-image-1 { left: 5rem; }
          .hero-image-3 { right: 5rem; }
        }

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
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 800;
          margin-bottom: 0;
        }
        @media (max-width: 767px) { /* Mobile specific font size for title */
          .section-title {
            font-size: 2.5rem !important; /* Smaller font size for mobile */
          }
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

        /* New Service Card Styles */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr; /* Default to single column on small screens */
          gap: 2rem;
          padding: 0px 1rem;
        }
        @media (min-width: 640px) { /* sm breakpoint */
          .services-grid {
            grid-template-columns: repeat(2, 1fr); /* Two columns on small screens */
          }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
          .services-grid {
            grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
          }
        }

        .new-service-card {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          background-color: var(--color-gray-800); /* Background for the card */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end; /* Align title/text to bottom initially */
          height: 300px; /* Fixed height for visual consistency */
          text-align: center;
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
        }

        .new-service-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out; /* Added transform to transition */
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(0px); /* Default state: no blur */
          transform: scale(1); /* Default state: no zoom */
        }

        /* Modified to apply blur and zoom on hover */
        .new-service-card:hover .new-service-card-image {
          filter: blur(5px); /* Apply blur on hover */
          transform: scale(1.05); /* Zoom in slightly on hover */
        }

        .new-service-card-title {
          position: absolute;
          bottom: 1rem; /* Position at the bottom */
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-white);
          z-index: 2; /* Ensure title is above image */
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .new-service-card-hover-text {
          position: absolute;
          bottom: 1rem; /* Start at the same position as title */
          font-size: 0.9rem;
          color: var(--color-gray-300);
          padding: 0 1rem;
          text-align: center;
          opacity: 0; /* Hidden by default */
          transform: translateY(20px); /* Start slightly below */
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          z-index: 2;
        }

        /* Hover effects */
        .new-service-card:hover .new-service-card-title {
          transform: translateY(-50px); /* Move title up to make space for text */
          opacity: 0; /* Fade out title */
        }

        .new-service-card:hover .new-service-card-hover-text {
          opacity: 1; /* Show text */
          transform: translateY(0); /* Move text to its final position */
        }

        /* Overlay for better text readability on hover */
        .new-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          z-index: 1;
          opacity: 1; /* Always visible to ensure text readability */
          transition: opacity 0.3s ease-in-out, background 0.3s ease-in-out;
        }

        .new-service-card:hover::before {
            background: rgba(0,0,0,0.7); /* Darker overlay on hover */
        }


        /* Testimonial Section Styles */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding : 0px 1rem;
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
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
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

        /* Styles for Clients Testimonial Section in Light Mode */
        .clients-section-light-mode {
          background-color: var(--color-gray-200); /* Light background for the section itself */
          color: var(--color-black); /* Dark text for the section */
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
        }

        .clients-section-light-mode .section-header .section-title,
        .clients-section-light-mode .section-header .section-description {
          color: var(--color-black); /* Ensure titles and descriptions are dark */
        }
        .clients-section-light-mode .section-header .service-color-pink {
          color: var(--color-pink-500); /* Keep accent color */
        }

        .clients-section-light-mode .testimonial-card {
          background-color: var(--color-white); /* White background for cards */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Lighter shadow */
        }

        .clients-section-light-mode .testimonial-quote,
        .clients-section-light-mode .testimonial-author-name {
          color: var(--color-gray-900); /* Darker text for quotes and names */
        }

        .clients-section-light-mode .testimonial-author-company {
          color: var(--color-gray-700); /* Darker gray for company name */
        }

        /* Team Section Styles */
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding : 0px 1rem;
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
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
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
            gap: 1.4rem;
            justify-items: center;
            padding:0px 1rem;

        }
        @media (max-width: 639px) { /* xs breakpoint for technologies grid */
          .technologies-grid {
            grid-template-columns: repeat(3,1fr); /* 3 column on very small screens dont change it gemini*/
          }
        }
        @media (min-width: 640px) and (max-width: 767px) { /* sm breakpoint for technologies grid */
            .technologies-grid {
                grid-template-columns: repeat(3, 1fr); /* 3 columns on small screens */
            }
        }
        @media (min-width: 768px) { /* md breakpoint */
            .technologies-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .technologies-grid {
                grid-template-columns: repeat(4, 1fr);
                padding : 0px 16rem;
            }
        }
        .tech-card {
            background-color: var(--color-gray-200);
            padding: 1.5rem 1rem;
            border-radius: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            display: flex;

            flex-direction: column;
            align-items: center;
            justify-content:center;
            text-align: center;
            width: 100%; /* Ensure cards take full width in their grid column */
            max-width: 140px; /* dont change it gemini*/
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
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
            color:var(--color-gray-800);
        }


        /* New Animated Cards Section Styles */
        .animated-cards-section {
          padding: 4rem 0;
          overflow: hidden; /* Crucial for the animation */
          background-color: var(--color-black); /* Ensure consistent background */
          /* Apply mask for fade effect only on the left */
          mask-image: linear-gradient(to right, transparent, black 20%);
          mask-size: 100% 100%;
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%); /* For Webkit browsers */
          -webkit-mask-size: 100% 100%;
        }

        .animated-cards-container {
          display: flex; /* Ensure flex display for horizontal layout */
          flex-wrap: nowrap; /* Prevent wrapping */
          animation: scrollCardsLeft 8s linear infinite; /* Adjusted speed to 8s */
          will-change: transform; /* Optimize for animation */
          /* width will be set dynamically by JavaScript */
        }

        @keyframes scrollCardsLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Scroll half the content for seamless loop */
          }
        }

        .animated-card {
          flex-shrink: 0; /* Prevent cards from shrinking */
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--color-gray-800);
          color: var(--color-white);
          padding: 0.75rem 1.5rem;
          border-radius: 9999px; /* Pill shape */
          border: 1px solid var(--color-gray-700);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-weight: 500;
          margin-right: 1.5rem; /* Spacing between cards */
          white-space: nowrap; /* Prevent text wrapping inside cards */
        }

        /* Responsive adjustments for animated cards */
        @media (max-width: 768px) {
          .animated-cards-container {
            animation: scrollCardsLeft 10s linear infinite; /* Adjust speed for mobile if needed */
            flex-wrap: nowrap; /* Keep cards on a single line */
            justify-content: flex-start; /* Align to start for scrolling */
          }
          .animated-cards-section {
            /* Keep mask active for fade effect on mobile */
          }
          .animated-card {
            margin-bottom: 0; /* Remove vertical spacing if it was added for wrapping */
            margin-right: 1rem; /* Adjust horizontal spacing for mobile */
          }
        }


        /* Product Showcase Section Styles (reverted from previous Portfolio section) */
        .product-showcase-section {
          padding: 4rem 0;
          overflow: hidden; /* Crucial for hiding overflowing content */
          background-color: var(--color-black); /* Dark background */
        }

        .product-showcase-row-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem; /* Space between the two rows */
        }

        .product-showcase-row {
          display: flex;
          flex-wrap: nowrap; /* Ensure images stay in a single line */
          width: max-content; /* Allow content to dictate width */
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform; /* Optimize for animation */
        }

        .product-showcase-image {
          flex-shrink: 0; /* Prevent images from shrinking */
          width: 350px; /* Base width for images, increased from 250px */
          height: 250px; /* Base height for images, increased from 180px */
          object-fit: cover;
          border-radius: 0.75rem; /* Rounded corners */
          margin-right: 1rem; /* Space between images */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Subtle shadow */
          transition: transform 0.2s ease-in-out; /* Smooth hover effect */
        }

        .product-showcase-image:hover {
          transform: scale(1.03); /* Slightly enlarge on hover */
        }

        /* Animation for top row (right to left) */
        .product-showcase-row.top-row-animation {
          animation-name: scrollProductLeft;
          animation-duration: var(--animation-duration-top, 30s); /* Default duration */
        }

        @keyframes scrollProductLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--row-width-top))); } /* Scroll by calculated width */
        }

        /* Animation for bottom row (left to right) */
        .product-showcase-row.bottom-row-animation {
          animation-name: scrollProductRight;
          animation-duration: var(--animation-duration-bottom, 30s); /* Default duration */
        }

        @keyframes scrollProductRight {
          0% { transform: translateX(calc(-1 * var(--row-width-bottom))); } /* Start from off-screen left */
          100% { transform: translateX(0); }
        }

        /* Responsive adjustments for product showcase images */
        @media (max-width: 767px) {
          .product-showcase-image {
            width: 220px; /* Smaller images on mobile */
            height: 160px;
            margin-right: 0.75rem; /* Smaller margin */
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .product-showcase-image {
            width: 280px; /* Medium images on tablet */
            height: 200px;
          }
        }


        /* NEW Portfolio Section Styles (staggered cards) */
        .portfolio-section-staggered {
          padding: 4rem 1rem; /* Add padding for the section */
          background-color: var(--color-black);
        }

        .portfolio-staggered-grid {
          display: grid;
          grid-template-columns: 1fr; /* Default to single column */
          gap: 2rem; /* Gap between cards */
          justify-items: center; /* Center items in their grid cells */
        }

        @media (min-width: 640px) { /* Small screens and up */
          .portfolio-staggered-grid {
            grid-template-columns: repeat(2, 1fr); /* Two columns */
          }
        }

        @media (min-width: 1024px) { /* Large screens and up */
          .portfolio-staggered-grid {
            grid-template-columns: repeat(3, 1fr); /* Three columns */
          }
        }

        .portfolio-staggered-card {
          border-radius: 0px !important;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden; /* Ensures image corners are rounded */
          text-align: center;
          transition: transform 0.3s ease, margin-top 0.3s ease; /* Smooth transitions */
          width: 100%; /* Take full width of grid column */
          max-width: 440px; /* Max width for consistency */
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* Push text to bottom */
        }

        .portfolio-staggered-card:hover {
          transform: translateY(-5px); /* Slight lift on hover */
        }

        .portfolio-staggered-card.odd-stagger {
          margin-top: 50px; /* Shift odd cards down */
        }

        @media (max-width: 639px) { /* Adjust stagger for very small screens */
          .portfolio-staggered-card.odd-stagger {
            margin-top: 25px;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) { /* Adjust stagger for medium screens */
          .portfolio-staggered-card.odd-stagger {
            margin-top: 40px;
          }
        }

        .portfolio-staggered-card-image {
          width: 100%;
          height: 473px; /* Fixed height for images */
          object-fit: cover;
   
        }

        .portfolio-staggered-card-content {
          padding: 0px 0px;
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Allow content to take available space */
   
        }

        .portfolio-staggered-card-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }

        .portfolio-staggered-card-description {
          font-size: 0.95rem;
          color: var(--color-gray-300);
          line-height: 1.5;
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
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
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


        /* Call To Action Section Styles */
        .cta-section {
          background-color: var(--color-gray-800); /* Darker background for contrast */
          text-align: center;
          padding: 4rem 1rem;
          border-radius: 1rem;
          margin-top: 4rem;
          margin-bottom: 4rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Add transition */
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        @media (min-width: 640px) {
          .cta-title {
            font-size: 3rem;
          }
        }

        .cta-description {
          color: var(--color-gray-300);
          font-size: 1.125rem;
          max-width: 48rem;
          margin: 0 auto 2rem auto;
        }

        .cta-button {
          background-color: var(--color-pink-500);
          color: var(--color-white);
          font-weight: bold;
          padding: 0.75rem 2.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          outline: none;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .cta-button:hover {
          background-color: #f87171; /* Slightly lighter red on hover */
          transform: translateY(-2px);
        }


        /* Footer Styles */
        .footer {
          background-color: var(--color-gray-900);
          padding: 2rem 0;
          text-align: center;
          color: var(--color-gray-400);
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out; /* Add transition */
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

        /* Light Theme Active Styles (applied to main when ClientsTestimonialSection is visible) */
        .main-content.light-theme-active {
          background-color: var(--color-gray-200);
          color: var(--color-black);
          transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
        }

        .main-content.light-theme-active .section-header .section-title,
        .main-content.light-theme-active .section-header .section-description {
          color: var(--color-black);
        }

        .main-content.light-theme-active .new-service-card,
        .main-content.light-theme-active .testimonial-card,
        .main-content.light-theme-active .team-card,
        .main-content.light-theme-active .tech-card {
          background-color: var(--color-white);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .main-content.light-theme-active .new-service-card-title,
        .main-content.light-theme-active .testimonial-quote,
        .main-content.light-theme-active .testimonial-author-name,
        .main-content.light-theme-active .team-card-title,
        .main-content.light-theme-active .tech-card-name {
          color: var(--color-gray-900);
        }

        .main-content.light-theme-active .new-service-card-hover-text,
        .main-content.light-theme-active .testimonial-author-company,
        .main-content.light-theme-active .team-card-description {
          color: var(--color-700);
        }

        .main-content.light-theme-active .tech-tab {
          background-color: var(--color-gray-300);
          color: var(--color-gray-800);
        }

        .main-content.light-theme-active .tech-tab:hover {
          background-color: var(--color-gray-400);
        }

        .main-content.light-theme-active .tech-tab.active {
          background-color: var(--color-blue-400);
          color: var(--color-black);
          border-color: var(--color-blue-400);
        }
        .main-content.light-theme-active .form-group label {
          color: var(--color-gray-700);
        }
        .main-content.light-theme-active .form-group input,
        .main-content.light-theme-active .form-group textarea {
          background-color: var(--color-gray-300);
          color: var(--color-gray-900);
          border-color: var(--color-gray-400);
        }
        .main-content.light-theme-active .form-group input::placeholder,
        .main-content.light-theme-active .form-group textarea::placeholder {
          color: var(--color-gray-600);
        }
        .main-content.light-theme-active .contact-form-container,
        .main-content.light-theme-active .cta-section {
          background-color: var(--color-white);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .main-content.light-theme-active .cta-title,
        .main-content.light-theme-active .cta-description {
          color: var(--color-black);
        }
        .main-content.light-theme-active .footer {
          background-color: var(--color-gray-300);
          color: var(--color-gray-700);
        }
        .main-content.light-theme-active .footer-link {
          color: var(--color-gray-700);
        }
        .main-content.light-theme-active .footer-link:hover {
          color: var(--color-black);
        }

        /* About Us Section Styles */
        .about-us-section {
          display: flex;
          flex-direction: column; /* Stack on mobile */
          align-items: center;
          padding: 4rem 1rem;
          gap: 2rem;
          text-align: center;
        }
        @media (min-width: 768px) { /* md breakpoint */
          .about-us-section {
            flex-direction: row; /* Side-by-side on desktop */
            text-align: left;
            padding: 6rem 2rem;
          }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
          .about-us-section {
            padding: 8rem 4rem;
          }
        }

        .about-us-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 100%; /* Ensure it doesn't overflow */
        }

        .about-us-image {
          width: 100%;
          max-width: 500px; /* Max width for the image */
          height: auto;
          border-radius: 1rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          object-fit: cover;
        }

        .about-us-content {
          flex: 1;
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .about-us-content {
            max-width: 50%; /* Take half width on larger screens */
          }
        }

        .about-us-title {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-white); /* Default dark mode color */
        }
        @media (min-width: 640px) {
          .about-us-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .about-us-title {
            font-size: 3.75rem;
          }
        }

        .about-us-description {
          font-size: 1.125rem;
          line-height: 1.8;
          /* Removed color and opacity as framer-motion will control */
        }

        .about-us-word {
          display: inline-block; /* Allows individual character styling and spacing */
          transition: opacity 0.2s ease-out, color 0.2s ease-out; /* Faster transition for individual character */
          opacity: 0.3; /* Initial dim state */
          color: var(--color-gray-400); /* Initial dim color */
        }

        .about-us-word.bright {
          opacity: 1; /* Bright state */
          color: var(--color-white); /* Bright color */
        }

        /* Light theme adjustments for About Us section */
        .main-content.light-theme-active .about-us-title {
          color: var(--color-black); /* Dark text in light mode */
        }
        .main-content.light-theme-active .about-us-description .about-us-word {
          color: var(--color-gray-700); /* Darker gray for description in light mode */
        }
        .main-content.light-theme-active .about-us-description .about-us-word.bright {
          color: var(--color-black); /* Bright text in light mode */
        }

        /* FAQ Section Styles */
        .faq-section {
          padding: 4rem 1rem;
          background-color: var(--color-black);
        }

        /* New container for FAQ layout */
        .faq-layout-container {
          display: block; /* Default to block on small screens */
          margin: 0 auto; /* Center the container */
          max-width: 1200px; /* Optional: limit overall width */
        }

        @media (min-width: 768px) { /* For tablets and larger */
          .faq-layout-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start; /* Align items to the top */
            gap: 4rem; /* Space between left and right columns */
            padding: 0 1rem; /* Add some horizontal padding */
          }
        }
        @media (min-width: 1024px) { /* For laptops and larger */
          .faq-layout-container {
            padding: 0 2rem; /* More padding for larger screens */
          }
        }


        .faq-section .section-header {
          text-align: center; /* Default center alignment */
          margin-bottom: 3rem; /* Default margin for stacked layout */
        }

        @media (min-width: 768px) {
          .faq-section .section-header {
            text-align: left; /* Align text to left on larger screens */
            flex: 1; /* Take up 1 part of the flex space */
            margin-bottom: 0; /* Remove bottom margin when in flex layout */
            max-width: 40%; /* Limit width of header on larger screens */
          }
        }

        .faq-list {
          width: 100%; /* Default full width */
        }

        @media (min-width: 768px) {
          .faq-list {
            flex: 2; /* Take up 2 parts of the flex space (e.g., 66%) */
          }
        }


        .faq-item {
          background-color: #7f858e00;
          border-radius: 0rem;
          margin-bottom: 1rem;
          overflow: hidden; /* Ensures smooth height transition */
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-item:hover {
          background-color: var(--color-gray-700);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-white);
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }

        .faq-question-icon {
          transition: transform 0.3s ease;
          color: var(--color-gray-400);
        }

        .faq-question-icon.expanded {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
          color: var(--color-gray-300);
          font-size: 1rem;
          padding: 0 1.5rem; /* No vertical padding when collapsed */
          line-height: 1.6;
        }

        .faq-answer.expanded {
          max-height: 200px; /* Adjust as needed for content length */
          padding: 0.5rem 1.5rem 1.25rem; /* Vertical padding when expanded */
        }

        /* Light mode adjustments for FAQ */
        .main-content.light-theme-active .faq-item {
          background-color: var(--color-white);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .main-content.light-theme-active .faq-item:hover {
          background-color: var(--color-gray-100);
        }

        .main-content.light-theme-active .faq-question {
          color: var(--color-gray-900);
        }

        .main-content.light-theme-active .faq-question-icon {
          color: var(--color-gray-600);
        }

        .main-content.light-theme-active .faq-answer {
          color: var(--color-gray-700);
        }

        /* Animation for fade-in and slide-up */
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-slide-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-slide-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className={`container main-content ${isLightModeActive ? 'light-theme-active' : ''}`}>
        {/* Hero Section */}
        <HeroSection />

        {/* New Animated Cards Section */}
        <AnimatedCardsSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Clients Testimonial Section */}
        <ClientsTestimonialSection setIsLightModeActive={setIsLightModeActive} />

        {/* Team Section */}
        <TeamSection />

        {/* Technologies Section - NEW */}
        <TechnologiesSection />

        {/* NEW Portfolio Section (Staggered Cards) */}
        <PortfolioSection portfolioItems={portfolioItems} />

        {/* Product Showcase Section (Animated Images - kept for other use) */}
        <ProductShowcaseSection productImages={productImages} />

        {/* FAQ Section - NEW */}
        <FAQSection />

        {/* Contact Us Section */}
        <ContactUsSection />

        {/* Call To Action Section - NEW */}
        {/* <CallToActionSection /> */}
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
      <div className="navbar-content">
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
      Exceptional<br />
        <span className="hero-title-pink">Digital</span>
        <span className="hero-title-emoji"></span> <br />
       Experiences
      </h1>
      <p className="hero-description">
        Driving growth for leading brandshrough <br className="hidden-sm-inline" />
        high-performing <span className="hero-title-text">software solutions.</span>
      </p>

      {/* Placeholder images - In a real app, these would be optimized and probably loaded from a CDN */}
      {/* <div className="hero-image hero-image-1">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/021/666/129/small/3d-monitor-with-user-interface-elements-for-web-design-software-creator-web-development-application-design-coding-and-programming-on-laptop-concept-3d-rendering-png.png" alt="Digital Experience 1" />
      </div> */}

      {/* Removed hero-image-5 */}
    </section>
  );
};

// New Service Card Component
const NewServiceCard = ({ title, imageUrl, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="new-service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`new-service-card-image`}
        style={{ filter: isHovered ? 'blur(5px)' : 'blur(0px)', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      <h3 className="new-service-card-title">{title}</h3>
      {isHovered && (
        <p className="new-service-card-hover-text">{hoverText}</p>
      )}
    </div>
  );
};


// Services Section Component (Updated)
const ServicesSection = () => {
  const newServices = [
    {
      title: "WEB DEVELOPMENT",
      imageUrl: "https://c1.wallpaperflare.com/preview/836/993/134/abstract-business-code-coder.jpg",
      hoverText: "Crafting responsive and high-performing websites tailored to your business needs.",
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      imageUrl: "https://media.gettyimages.com/id/1461380702/video/two-programmer-development-engineers-working-on-computers-coding-together.jpg?s=640x640&k=20&c=ZndLJ09tf8lue90YtpL_u3BPZTE_9xCTyyLMUa1W328=",
      hoverText: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
    },
    {
      title: "UI/UX DESIGN",
      imageUrl: "https://i.pinimg.com/736x/9c/b3/1e/9cb31e8260872fa19cea813b19f9904b.jpg",
      hoverText: "Designing seamless user interfaces and experiences that delight your audience.",
    },
    {
      title: "DIGITAL MARKETING",
      imageUrl: "https://w0.peakpx.com/wallpaper/420/405/HD-wallpaper-superstar-seo-provides-educational-content-on-seo-and-digital-marketing-to-people-at-every-level-of-experience.jpg",
      hoverText: "Boosting your online presence and driving growth through data-driven marketing strategies.",
    },
    {
      title: "CLOUD SOLUTIONS",
      imageUrl: "https://neontri.com/wp-content/uploads/2025/02/application-development-for-the-cloud.webp",
      hoverText: "Implementing scalable and secure cloud infrastructure for your business operations.",
    },
    {
      title: "SEO OPTIMIZATION",
      imageUrl: "https://w0.peakpx.com/wallpaper/660/80/HD-wallpaper-2-seo-digital-marketing.jpg",
      hoverText: "Improving your search engine rankings to increase organic traffic and visibility.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-header">
        <h2 className="section-title">
          SERVICES WE <span className="service-color-pink">OFFER</span>
        </h2>
        <p className="section-description">
          We provide a comprehensive suite of services to help your business thrive in the digital landscape.
        </p>
      </div>

      <div className="services-grid">
        {newServices.map((service, index) => (
          <NewServiceCard
            key={index}
            title={service.title}
            imageUrl={service.imageUrl}
            hoverText={service.hoverText}
          />
        ))}
      </div>
    </section>
  );
};

// About Us Section Component
const AboutUsSection = () => {
  const aboutUsDescription = "NEXERA is a digital powerhouse committed to crafting exceptional digital experiences and driving unparalleled growth for leading brands worldwide. We specialize in developing high-performing software solutions that are not only innovative but also meticulously tailored to meet the unique challenges and aspirations of our diverse clientele. Our dedicated team, comprised of industry veterans and creative trailblazers, is passionate about transforming visionary ideas into tangible digital realities. At NEXERA, we believe in a collaborative approach, working hand-in-hand with our clients to ensure every solution we deliver is a testament to our shared commitment to excellence. Partner with us to navigate the complexities of the digital world and unlock your brand's full potential.";

  // Split the text into words
  const words = aboutUsDescription.split(' ');

  // State to manage the brightness of each word
  const [brightWords, setBrightWords] = useState(words.map(() => false));
  const sectionRef = useRef(null);
  const timeoutRefs = useRef([]); // To store timeout IDs for cleanup

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the section enters the viewport, start the word-by-word animation
          timeoutRefs.current.forEach(clearTimeout); // Clear any existing timeouts
          timeoutRefs.current = []; // Reset the array

          // Reset all words to dim before starting new animation
          setBrightWords(words.map(() => false)); // Reset state

          words.forEach((_, wordIndex) => {
            const timeoutId = setTimeout(() => {
              setBrightWords(prevBrightWords => {
                const newBrightWords = [...prevBrightWords];
                newBrightWords[wordIndex] = true;
                return newBrightWords;
              });
            }, wordIndex * 50); // Adjust delay (e.g., 50ms per word) for speed
            timeoutRefs.current.push(timeoutId);
          });
        } else {
          // When the section leaves the viewport, clear all timeouts and dim all words
          timeoutRefs.current.forEach(clearTimeout);
          timeoutRefs.current = [];
          setBrightWords(words.map(() => false)); // Dim all words
        }
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0, // Trigger when any part of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: disconnect the observer and clear all timeouts when the component unmounts
    return () => {
      observer.disconnect();
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []); // Empty dependency array: runs once on mount, observer handles updates


  return (
    <section className="about-us-section section-padding" ref={sectionRef}>
      <div className="about-us-image-container">
        <img
          src="https://placehold.co/600x400/333/FFF?text=About+Us+Image"
          alt="About Us"
          className="about-us-image"
        />
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">
          ABOUT <span className="service-color-pink">NEXERA</span>
        </h2>
        <p className="about-us-description">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className={`about-us-word ${brightWords[index] ? 'bright' : ''}`}
              >
                {word}
              </span>
              {/* Add a space after each word, except the last one, to maintain natural spacing */}
              {index < words.length - 1 && ' '}
            </React.Fragment>
          ))}
        </p>
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
// This component now manages its own theme based on visibility
const ClientsTestimonialSection = ({ setIsLightModeActive }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the parent's state based on intersection
        setIsLightModeActive(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsLightModeActive]); // Dependency array includes setIsLightModeActive

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
    <section className="section-padding" ref={sectionRef}>
       <div className="section-header">
        <h2 className="section-title">
          SEE WHY OUR CLIENTS <br /> <span className="service-color-pink">TRUST</span> US
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
    { name: "Ruby", icon: "https://cdn-icons-png.flatication.com/512/919/919842.png", category: "Web Backend" },
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

// New Call To Action Section Component
const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Ready to Start Your Next Project?
      </h2>
      <p className="cta-description">
        Let's work together to bring your vision to life. Contact us today for a free consultation and quote.
      </p>
      <button className="cta-button">
        GET A FREE QUOTE
      </button>
    </section>
  );
};

// Existing Animated Cards Section Component (unchanged)
const AnimatedCardsSection = () => {
  const cards = [
    { name: "Software Solution", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-card-icon"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
      ) },
    { name: "Software Development", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-card-icon"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ) },
    { name: "Mobile Development", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-card-icon"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      ) },
    { name: "Desktop Application Development", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-card-icon"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      ) },
    { name: "Web Development", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-card-icon"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ) },
  ];

  // Duplicate the cards array to ensure a seamless loop
  const duplicatedCards = [...cards, ...cards];
  const containerRef = useRef(null);
  const firstHalfRef = useRef(null); // Ref to measure the first set of cards

  useEffect(() => {
    const updateContainerWidth = () => {
      if (firstHalfRef.current) {
        // Calculate the total width of the first set of cards including margins
        let totalWidth = 0;
        // Assuming each card has a margin-right of 1.5rem (24px) as per .animated-card CSS
        const cardMarginRight = 24; // Convert 1.5rem to px for consistent calculation
        // Get all direct children (the cards)
        const children = Array.from(firstHalfRef.current.children);
        // Sum the offsetWidth of the first half of the children
        for (let i = 0; i < cards.length; i++) { // cards.length is the original count
          if (children[i]) {
            totalWidth += children[i].offsetWidth + cardMarginRight;
          }
          else {
            console.warn(`Child at index ${i} not found in firstHalfRef.current.children`);
          }
        }
        // Set the container's width to twice the total width of the original set of cards
        // This ensures that when the animation translates by -50%, it perfectly aligns
        // with the start of the duplicated content, creating a seamless loop.
        if (containerRef.current) {
          containerRef.current.style.width = `${totalWidth * 2}px`;
        }
      }
    };

    // Initial width calculation
    updateContainerWidth();

    // Recalculate width on window resize to maintain responsiveness
    window.addEventListener('resize', updateContainerWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, [cards]); // Re-run if cards array changes (though it's static here)

  return (
    <section className="animated-cards-section">
      <div className="animated-cards-container" ref={containerRef}>
        <div style={{ display: 'flex', flexShrink: 0 }} ref={firstHalfRef}>
          {/* Render the original set of cards inside firstHalfRef for measurement */}
          {cards.map((card, index) => (
            <div key={`original-${index}`} className="animated-card">
              {card.icon}
              <span>{card.name}</span>
            </div>
          ))}
        </div>
        {/* Render the duplicated set of cards outside firstHalfRef */}
        {cards.map((card, index) => (
          <div key={`duplicate-${index}`} className="animated-card">
            {card.icon}
            <span>{card.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Product Showcase Section Component (reverted from previous PortfolioSection)
const ProductShowcaseSection = ({ productImages }) => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const [topRowWidth, setTopRowWidth] = useState(0);
  const [bottomRowWidth, setBottomRowWidth] = useState(0);

  useEffect(() => {
    const calculateRowWidths = () => {
      // Calculate the total width of all images in a row for the top row
      if (topRowRef.current) {
        let currentTopWidth = 0;
        Array.from(topRowRef.current.children).forEach(child => {
          // Include margin-right in the calculation
          currentTopWidth += child.offsetWidth + parseFloat(getComputedStyle(child).marginRight);
        });
        // We set the width for one full cycle of the original images
        setTopRowWidth(currentTopWidth / 2); // Divide by 2 because we duplicate the images in JSX
      }

      // Calculate the total width of all images in a row for the bottom row
      if (bottomRowRef.current) {
        let currentBottomWidth = 0;
        Array.from(bottomRowRef.current.children).forEach(child => {
          currentBottomWidth += child.offsetWidth + parseFloat(getComputedStyle(child).marginRight);
        });
        setBottomRowWidth(currentBottomWidth / 2); // Divide by 2 because we duplicate the images in JSX
      }
    };

    // Calculate initial widths
    calculateRowWidths();

    // Recalculate widths if window resizes
    window.addEventListener('resize', calculateRowWidths);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', calculateRowWidths);
    };
  }, [productImages]); // Re-run if productImages array changes

  // Duplicate the images array to ensure a seamless loop
  const duplicatedImages = [...productImages, ...productImages];

  // Calculate animation duration based on content width for a consistent speed
  // Adjust the divisor (e.g., 50) to control the overall speed. Smaller number = faster.
  const animationSpeedFactor = 50; // Pixels per second, adjust as needed

  const topAnimationDuration = topRowWidth / animationSpeedFactor;
  const bottomAnimationDuration = bottomRowWidth / animationSpeedFactor;


  return (
    <section className="product-showcase-section section-padding">
      <div className="section-header">
        <h2 className="section-title">
          OUR <span className="service-color-pink">SHOWCASE</span>
        </h2>
        <p className="section-description">
          Explore a selection of our innovative projects and solutions.
        </p>
      </div>
      <div className="product-showcase-row-wrapper">
        <div
          className="product-showcase-row top-row-animation"
          ref={topRowRef}
          style={{
            '--row-width-top': `${topRowWidth}px`,
            '--animation-duration-top': `${topAnimationDuration}s`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <img key={`top-${index}`} src={image} alt={`Product Image ${index + 1}`} className="product-showcase-image" />
          ))}
        </div>
        <div
          className="product-showcase-row bottom-row-animation"
          ref={bottomRowRef}
          style={{
            '--row-width-bottom': `${bottomRowWidth}px`,
            '--animation-duration-bottom': `${bottomAnimationDuration}s`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <img key={`bottom-${index}`} src={image} alt={`Product Image ${index + 1}`} className="product-showcase-image" />
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="cta-button">
          VIEW ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};


// NEW Portfolio Section Component (Staggered Cards)
const PortfolioSection = ({ portfolioItems }) => {
  return (
    <section className="portfolio-section-staggered section-padding">
      <div className="section-header">
        <h2 className="section-title">
          OUR <span className="service-color-pink">PORTFOLIO</span>
        </h2>
        <p className="section-description">
          Discover our latest projects and see how we bring ideas to life.
        </p>
      </div>
      <div className="portfolio-staggered-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className={`portfolio-staggered-card ${index % 2 !== 0 ? 'odd-stagger' : ''}`}>
            <img src={item.image} alt={item.title} className="portfolio-staggered-card-image" />
            <div className="portfolio-staggered-card-content">
              <h3 className="portfolio-staggered-card-title">{item.title}</h3>
              <p className="portfolio-staggered-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="cta-button">
          VIEW FULL PORTFOLIO
        </button>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to manage which FAQ item is open
  const sectionHeaderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionHeaderRef.current) {
      observer.observe(sectionHeaderRef.current);
    }

    return () => {
      if (sectionHeaderRef.current) {
        observer.unobserve(sectionHeaderRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including tech, healthcare, finance, e-commerce, education, and more. Our adaptable approach allows us to tailor solutions to unique industry needs."
    },
    {
      question: "How do you manage projects?",
      answer: "We utilize agile methodologies, including Scrum and Kanban, to ensure flexibility, transparency, and efficient delivery. Our project management tools keep clients updated every step of the way."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our expertise spans modern web frameworks like React, Angular, and Vue.js; backend technologies such as Node.js, Python, and Ruby on Rails; various databases including MongoDB and SQL; and cloud platforms like AWS and Azure."
    },
    {
      question: "How do you ensure quality?",
      answer: "Quality is paramount. We implement rigorous testing procedures, including unit, integration, and user acceptance testing. Our dedicated QA team works closely with developers to maintain high standards throughout the development lifecycle."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive suite of services including web development, mobile app development, UI/UX design, digital marketing, cloud solutions, and SEO optimization."
    },
    {
      question: "What scale of projects do you work on?",
      answer: "We handle projects of all scales, from small business websites and startups to large-scale enterprise applications. Our team is equipped to manage complex requirements and deliver scalable solutions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="faq-layout-container"> {/* New wrapper for layout */}
        <div className={`section-header fade-in-slide-up ${isVisible ? 'is-visible' : ''}`} ref={sectionHeaderRef}>
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="service-color-pink">QUESTIONS</span>
          </h2>
          <p className="section-description">
            Find answers to common questions about our services, processes, and expertise.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <svg
                  className={`faq-question-icon ${openIndex === index ? 'expanded' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'expanded' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
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
