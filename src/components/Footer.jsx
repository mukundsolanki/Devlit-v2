import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} MUKUND SOLANKI
        </p>
      </div>
    </footer>
  );
}

export default Footer;
