import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa6";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", formData);
    alert(`Signed up as ${formData.username}`);
    setShowSignUp(false);
  };

  return (
    <div className="d-flex">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h4 className="sidebar-title">Xpenly Manager</h4>
        <button className="btn btn-primary w-100 my-2">Home</button>
        <button className="btn btn-primary w-100 my-2">About</button>
        <button className="btn btn-primary w-100 my-2">Contact Us</button>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle w-100 my-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <a className="dropdown-item" href="#">Profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-success w-100 my-2" onClick={() => setShowSignUp(true)}>
          Sign Up
        </button>
      </div>
      <div className="content flex-grow-1">
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
        <section className="container hero-section d-flex align-items-center justify-content-center py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-title">Manage Your Expenses in Real-Time</h1>
              <p className="hero-text">
                Our platform helps you track and manage your expenses with real-time updates,
                ensuring seamless collaboration and financial control.
              </p>
              <a href="#" className="btn btn-primary btn-lg">Get Started</a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://i.imgur.com/w6KTbC5.png"
                alt="Expense Management Illustration"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </section>
      </div>
      {showSignUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Sign Up</h3>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">Sign Up</button>
              <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => setShowSignUp(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <style>{`
        /* Sidebar Styling */
        .sidebar {
          width: 250px;
          height: 100vh;
          position: fixed;
          left: ${isOpen ? "0" : "-260px"};
          top: 0;
          background: rgb(248, 248, 250);
          padding: 20px;
          transition: left 0.3s ease-in-out;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
        }

        .sidebar-title {
          color: #007bff;
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 20px;
          font-weight: bold;
        }

        /* Sidebar Buttons */
        .btn {
          font-size: 1.1rem;
        }

        /* Main Content */
        .content {
          margin-left: ${isOpen ? "260px" : "0"};
          transition: margin-left 0.3s ease-in-out;
          width: 100%;
          padding: 20px;
        }

        /* Toggle Button */
        .toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          position: absolute;
          left: ${isOpen ? "250px" : "10px"};
          transition: left 0.3s ease-in-out;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
        }

        .hero-text {
          font-size: 1.2rem;
          color: #666;
        }

        .hero-image {
          max-width: 100%;
          border-radius: 10px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .modal-content h3 {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
