import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Xpenly Manager</h5>
            <p>Track and manage your expenses with ease.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p><a href="#" className="text-white text-decoration-none"><FaHome className="me-2" /> Home</a></p>
            <p><a href="#" className="text-white text-decoration-none"><FaInfoCircle className="me-2" /> About</a></p>
            <p><a href="#" className="text-white text-decoration-none"><FaEnvelope className="me-2" /> Contact</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
            <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
            <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
            <a href="#" className="text-white"><FaYoutube size={24} /></a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row d-flex justify-content-center">
          <p className="text-center">&copy; 2025 Xpenly Manager. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
