// Filename: src/contactpage/ContactPage.js
import React from 'react';
import './ContactPage.css';

// --- Icon Components ---
import logoImage from '../assets/logoport.png';
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);
const MapPinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

// --- Contact Info Item Component ---
const InfoItem = ({ icon, title, value, href }) => (
  <div className="info-item">
    <div className="info-icon">{icon}</div>
    <div className="info-text">
      <h4>{title}</h4>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  </div>
);


const ContactPage = ({ onNavClick }) => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const userEmail = e.target.elements.email.value;
    const subject = "Portfolio Subscription Request";
    const body = `Please add the following email to the mailing list: ${userEmail}`;
    window.location.href = `mailto:yashhhgoswami@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    e.target.reset();
  };
  
  const address = "Bundi, Rajasthan - 323601";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="contact-page-container">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <h2>Lets Connect there</h2>
          <a href="https://drive.google.com/file/d/1AnJPyMQOsfs13sds8PfUZ3z_ojquHOp8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hire-me-button">
            Download Resume <DownloadIcon />
          </a>
        </div>

        <hr className="footer-divider" />

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-about">
            <img src={logoImage} alt="Yash Goswami Logo" className="footer-logo" />
            <p>A passionate Full-Stack Developer creating seamless and robust web applications from front to back.</p>
            <div className="footer-socials">
                <a href="https://github.com/yashhhgoswami" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/yashhhgoswami/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
                <a href="https://www.instagram.com/yashhhgoswami/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('Home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('About'); }}>About</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); onNavClick('Experience'); }}>Experience</a></li>
              <li><a href="#project" onClick={(e) => { e.preventDefault(); onNavClick('Project'); }}>Project</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <InfoItem icon={<MapPinIcon />} title="Address" value={address} href={mapsUrl} />
              <InfoItem icon={<MailIcon />} title="Email Me" value="yashhhgoswami@gmail.com" href="mailto:yashhhgoswami@gmail.com" />
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Subscribe Section */}
        <div className="footer-subscribe">
            <h4>Get the latest information</h4>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input type="email" name="email" placeholder="Email Address" required />
              <button type="submit">&gt;</button>
            </form>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright © 2025 Yash Goswami. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#terms" onClick={(e) => { e.preventDefault(); onNavClick('Terms'); }}>User Terms & Conditions</a>
            <span>|</span>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavClick('Privacy'); }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;