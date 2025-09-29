import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function NavbarHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_header fw-bold w-100 px-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" className='logo_img' style={{ height: '60px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-light px-3" to="/" onClick={closeNavbar}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-light px-3" to="/about" onClick={closeNavbar}>About</Link></li>
            <li className="nav-item"><Link className="nav-link text-light px-3" to="/policy" onClick={closeNavbar}>Privacy Policy</Link></li>
            <li className="nav-item"><Link className="nav-link text-light px-3" to="/faqs" onClick={closeNavbar}>FAQs</Link></li>
            <li className="nav-item"><Link className="nav-link text-light px-3" to="/contact" onClick={closeNavbar}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
