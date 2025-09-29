import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ContactUs() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-danger">💌 Contact Us</h1>
        <p className="text-muted fs-5">
          We’re here to listen, care, and keep your romantic journey smooth.
          Whether it’s a whisper of feedback, a question about love, or just
          a sweet hello — reach out and let’s connect. ❤️
        </p>
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-7 col-md-12 mb-4">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h4 className="mb-3 text-danger fw-bold">Send Us a Message 💖</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your lovely name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email of passion"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us your heart’s desire..."
                  ></textarea>
                </div>

                <button className="btn btn-danger w-100 fw-bold">
                  💌 Send with Love
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5 col-md-12">
          <div className="card shadow-lg border-0 bg-warning">
            <div className="card-body p-4 text-dark">
              <h4 className="fw-bold mb-3">Reach Us Directly 🌹</h4>
              <p>
                <strong>Email:</strong> support@loversapp.com  
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567  
              </p>
              <p>
                <strong>Office:</strong> Lovers Avenue, Heart City 💕  
              </p>

              <hr />
              <p className="fst-italic">
                We treasure every message — your joy, passion, and love stories
                inspire us daily. Don’t be shy, let’s make your journey hotter,
                happier, and unforgettable. 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
