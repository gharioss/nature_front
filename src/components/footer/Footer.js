import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-text">Nous envoyer un message :</p>
          <div className="input-areas">
            <form>
              <input
                type="text"
                placeholder="Votre message"
                className="footer-input"
              />
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Menu</h2>
            </div>
            <div className="footer-link-items">
              <h2>Informations légales</h2>
            </div>
            <div className="footer-link-items">
              <h2>Service clientèle</h2>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">
              © 2022 La mapoli Corps. Tous droits réservé.
            </small>
            <div className="social-icons"></div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
