export default function Home() {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',  // Full viewport height
            width: '100vw',   // Full viewport width
            overflow: 'hidden', // Hide overflow for any blurred parts
        }}>
            {/* Blurred background image */}
            <div style={{
                backgroundImage: 'url(/cs1.jpg)',  // Path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                filter: 'blur(8px)', // Adjust blur amount as needed
                zIndex: 1,
            }}></div>

            {/* Overlay content */}
            <div style={{
                position: 'relative',
                zIndex: 2, // Higher than the background to ensure visibility
                color: '#ffffff', // Text color for contrast
                textAlign: 'center', // Centering text
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}>
                <h1 style={{ fontSize: '3rem', margin: '0' }}>Stylish Clothing for You</h1>
                <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Discover the latest trends in fashion</p>
                <a href="/shop" style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#ff5722', // A vibrant button color
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '1.2rem',
                    transition: 'background-color 0.3s ease',
                }}>Shop Now</a>
            </div>
        </div>
    );
}

