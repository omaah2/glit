import React from 'react';
import './style.css'; // You can create this CSS file for styling

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Feel free to get in touch with us.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button className="submit-button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
