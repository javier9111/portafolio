import React from "react";
import "./Contact.css";
export const ContactScreen = () => {
  return (
    <section id="contact" className="contact-main container">
      <div className="contact-container">
        <div className="input-container">
          <label className="label">Name</label>
          <input type="text" placeholder="Chuchito perez" />
          <span className="info">information</span>
        </div>
        <div className="input-container">
          <label className="label">Email</label>
          <input type="text" placeholder="quiensabelabola@gmail.com" />
          <span className="info">information</span>
        </div>
        <div className="message-container">
          <label className="label">Mensaje</label>
          <textarea id="message" name="message" rows="8" cols="50" />
          <span className="info">information</span>
        </div>
        {/* <div className="submit">
          <button>send</button>
        </div> */}
      </div>
    </section>
  );
};
