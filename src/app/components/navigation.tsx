import Link from "next/link"

export default function Navbar () {
    return (
        <nav style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent:'space-between',
            gap: '1rem', 
            padding: '0.5rem 2rem', 
            backgroundColor: '#333',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                 <img 
                src="/logo.webp" 
                alt="Logo" 
                style={{ 
                    width: '60px', 
                    height: '60px'
             }} 
            />
            </div>
            <div style={{
                display:'flex',
                gap:'5rem'
            }}>


        <Link href="/" style={linkStyle}>Home</Link> 
                <Link href="/about" style={linkStyle}>About</Link> 
                <Link href="/catalogue" style={linkStyle}>Catalogue</Link> 
                <Link href="/contact" style={linkStyle}>Contact Us</Link> 
                <Link href="/login" style={linkStyle}>Login</Link> 
                <Link href="/stores" style={linkStyle}>Stores</Link> 
          
                </div>
        </nav>
    );
}
// Link style with hover effect
const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff', // Link color
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',  // Smooth transition
};

// Additional hover effect (can add to CSS instead if preferred)
// const linkHoverStyle = {
    // ...linkStyle,
    // backgroundColor: '#555', // Darker shade on hover
// };

