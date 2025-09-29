import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <small>Built with ❤️ Love</small>
      </div>
    </footer>
  );
}
