import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2D3748', color: 'white', padding: '1.5rem 0', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>&copy; 2024 Cross Stitch. All rights reserved.</p>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', listStyle: 'none', padding: 0 }}>
                <li>
                    <Link href="mailto:info@CrossStitch.com">
                        <a style={{ textDecoration: 'none', color: 'white' }}>Contact Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://instagram.com">
                        <a style={{ textDecoration: 'none', color: 'white' }}>Instagram</a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

