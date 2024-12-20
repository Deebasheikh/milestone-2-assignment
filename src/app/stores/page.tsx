export default function StoreLocations() {
    return (
        <div style={{ backgroundColor: '#FAFAFA', padding: '3rem 0' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', color: '#2D3748', marginBottom: '2rem' }}>Our Store Locations</h1>
            <p style={{ textAlign: 'center', color: '#718096', marginBottom: '3rem', maxWidth: '40rem', margin: '0 auto' }}>
                Find a Cross Stitch store near you. Visit us to explore our latest collections and experience our quality craftsmanship in person.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '2rem', maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
                {/* Store Location Cards */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem' }}>Lucky One Mall</h2>
                    <p style={{ color: '#718096' }}>
                        2nd Floor, LA-2/B, Block 21,<br />
                        Main Rashid Minhas Rd,<br />
                        Block 21 Gulberg Town, Karachi
                    </p>
                    <p style={{ marginTop: '1rem', color: '#4299E1', fontWeight: '600' }}>Opening Hours: 10AM - 10PM</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem' }}>Emporium Mall</h2>
                    <p style={{ color: '#718096' }}>
                        1st Floor, Abdul Haque Rd,<br />
                        Johar Town, Lahore
                    </p>
                    <p style={{ marginTop: '1rem', color: '#4299E1', fontWeight: '600' }}>Opening Hours: 10AM - 10PM</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem' }}>Dolmen Mall Clifton</h2>
                    <p style={{ color: '#718096' }}>
                        Ground Floor, Marine Dr,<br />
                        Clifton, Karachi
                    </p>
                    <p style={{ marginTop: '1rem', color: '#4299E1', fontWeight: '600' }}>Opening Hours: 10AM - 10PM</p>
                </div>
            </div>
        </div>
    );
}

