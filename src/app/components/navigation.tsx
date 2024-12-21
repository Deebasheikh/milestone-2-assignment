'use client';
import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.webp" alt="Logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" className="navbar-link">
          Home
        </Link>
        <Link href="/about" className="navbar-link">
          About
        </Link>
        <Link href="/catalogue" className="navbar-link">
          Catalogue
        </Link>
        <Link href="/contact" className="navbar-link">
          Contact Us
        </Link>
        <Link href="/login" className="navbar-link">
          Login
        </Link>
        <Link href="/stores" className="navbar-link">
          Stores
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
