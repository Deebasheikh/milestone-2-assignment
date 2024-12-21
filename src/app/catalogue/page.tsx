import "../globals.css";

export default function Gallery() {
    return (
        <div className="gallery-container">
            <h1 className="gallery-heading">Our Gallery</h1>
            <p className="gallery-description">
                Explore our latest collections and timeless designs. Each piece is crafted 
                with care, combining traditional artistry with contemporary style.
            </p>
            <div className="gallery-grid">
                {[
                    "/bg6.jpg",
                    "/cs18.jpg",
                    "/cs2.jpg",
                    "/cs3.webp",
                    "/cs4.webp",
                    "/cs24.webp",
                    "/cs25.webp",
                    "/cs12.jpg",
                ].map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Collection ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}
