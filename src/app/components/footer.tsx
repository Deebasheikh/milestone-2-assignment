import Link from "next/link";
import "../globals.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cross Stitch. All rights reserved.</p>
      <ul className="footer-list">
        <li>
          <Link href="mailto:info@CrossStitch.com" className="footer-link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com" className="footer-link">
            Instagram
          </Link>
        </li>
      </ul>
    </footer>
  );
}
