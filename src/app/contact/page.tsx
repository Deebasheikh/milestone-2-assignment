export default function Contact() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2D3748', marginBottom: '0.5rem' }}>Contact Us</h1>
            <p style={{ fontSize: '1.125rem', color: '#718096', marginBottom: '1.5rem' }}>We're here to help you</p>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4A5568', marginTop: '1rem', marginBottom: '0.5rem' }}>Contact Information</h1>
            <p style={{ textAlign: 'center', color: '#718096', marginBottom: '1rem' }}>
                Cross Stitch LuckyOne Mall<br />
                Lucky One Mall, 2nd Floor, LA-2/B, Block 21, Main Rashid Minhas Rd,<br />
                Block 21 Gulberg Town, Karachi
            </p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#4A5568', marginTop: '1rem' }}>Email:</h3>
            <p style={{ color: '#718096', marginBottom: '1.5rem' }}>sales@mail.us.crossstitch.pk</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4A5568', marginTop: '2rem', marginBottom: '0.5rem' }}>Opening Hours</h2>
            <p style={{ textAlign: 'center', color: '#718096' }}>
                Our customer care representative will be available for support from <br />
                (10AM to 5.30PM) Mon to Sat
            </p>
        </div>
    );
}

