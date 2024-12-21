import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Blurred background image */}
      <div className="home-background"></div>

      {/* Overlay content */}
      <div className="home-content">
        <h1 className="home-title">Stylish Clothing for You</h1>
        <p className="home-subtitle">Discover the latest trends in fashion</p>
        <Link href="/shop" className="home-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
