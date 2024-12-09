import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us</p>
        <ul className="contact-info">
          <li>Email: group@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Career Helper St, Quizville</li>
        </ul>
        <p>&copy; 2024 Float To Success . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
