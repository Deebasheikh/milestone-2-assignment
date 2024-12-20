import React, { CSSProperties } from 'react';

export default async function About() {
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#ffffff', // white background
        color: '#2d3748', // gray-800 text
        minHeight: '100vh',
    };

    const headingStyle: CSSProperties = {
        fontSize: '2.5rem', // 4xl
        fontWeight: 'bold',
        marginBottom: '1rem', // mb-4
    };

    const paragraphStyle: CSSProperties = {
        fontSize: '1.125rem', // lg
        textAlign: 'center',
        maxWidth: '48rem', // max-w-3xl
        marginBottom: '1.5rem', // mb-6
    };

    const subheadingStyle: CSSProperties = {
        fontSize: '1.5rem', // 2xl
        fontWeight: 600,
        marginTop: '2rem', // mt-8
        marginBottom: '1rem', // mb-4
    };

    const centeredParagraphStyle: CSSProperties = {
        textAlign: 'center',
        maxWidth: '32rem', // max-w-2xl
        marginBottom: '1.5rem', // mb-6
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Cross Stitch</h1>
            <p style={paragraphStyle}>
                Cross Stitch is a leading fashion brand that combines contemporary style with the 
                rich cultural heritage of Pakistan. Known for our intricate designs and quality 
                craftsmanship, we bring traditional art forms to life through modern, elegant 
                clothing that resonates with fashion-forward individuals.
            </p>
            <h2 style={subheadingStyle}>Our Vision</h2>
            <p style={centeredParagraphStyle}>
                At Cross Stitch, we aim to inspire and empower by blending timeless traditions 
                with cutting-edge designs. Our commitment to quality and creativity ensures that 
                each piece not only enhances your wardrobe but also tells a story of elegance 
                and authenticity.
            </p>
            <h2 style={subheadingStyle}>Why Choose Us</h2>
            <p style={centeredParagraphStyle}>
                We offer a wide range of collections that cater to diverse tastes and occasions, 
                with a focus on comfort, durability, and style. Whether you're looking for classic 
                or contemporary designs, Cross Stitch has something unique to offer for everyone.
            </p>
        </div>
    );
}
