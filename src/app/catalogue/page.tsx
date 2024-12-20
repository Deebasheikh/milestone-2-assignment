export default function Gallery() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', padding: '3rem 0' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#2D3748',
          marginBottom: '2rem',
        }}
      >
        Our Gallery
      </h1>
      <p
        style={{
          textAlign: 'center',
          color: '#718096',
          marginBottom: '3rem',
          maxWidth: '40rem',
          margin: '0 auto',
        }}
      >
        Explore our latest collections and timeless designs. Each piece is
        crafted with care, combining traditional artistry with contemporary
        style.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
          gap: '1.5rem',
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* Gallery images */}
        {[
          '/bg6.jpg',
          '/cs18.jpg',
          '/cs2.jpg',
          '/cs3.webp',
          '/cs4.webp',
          '/cs24.webp',
          '/cs25.webp',
          '/cs12.jpg',
        ].map((src, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            className="group"
          >
            <img
              src={src}
              alt={`Collection ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s',
              }}
              className="group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
