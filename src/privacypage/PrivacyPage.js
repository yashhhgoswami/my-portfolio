// Filename: src/privacypage/PrivacyPage.js
import React from 'react';
import './PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: August 3, 2025</strong></p>

        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit this website.</p>
        
        <h2>1. Personal Information I Collect</h2>
        <p>When you use the contact or subscription form, I collect the personal information you give me such as your name and email address. This is solely for the purpose of responding to your inquiries or sending you the information you requested.</p>

        <h2>2. How I Use Your Personal Information</h2>
        <p>I use the information I collect from you to communicate with you. I will not share your personal information with third parties unless required by law.</p>

        <h2>3. Data Retention</h2>
        <p>When you submit information through a form, I will maintain your information for my records unless and until you ask me to delete this information.</p>

        <h2>4. Your Rights</h2>
        <p>You have the right to access personal information I hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact me through the contact information provided on this website.</p>
        
        <h2>5. Changes</h2>
        <p>I may update this privacy policy from time to time in order to reflect, for example, changes to my practices or for other operational, legal, or regulatory reasons.</p>
      </div>
    </div>
  );
};

export default PrivacyPage;