import "../globals.css";

export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    return (
        <div className="container">
            <h1 className="heading">About Cross Stitch</h1>
            <p className="paragraph">
                Cross Stitch is a leading fashion brand that combines contemporary style with the 
                rich cultural heritage of Pakistan. Known for our intricate designs and quality 
                craftsmanship, we bring traditional art forms to life through modern, elegant 
                clothing that resonates with fashion-forward individuals.
            </p>
            <h2 className="subheading">Our Vision</h2>
            <p className="centered-paragraph">
                At Cross Stitch, we aim to inspire and empower by blending timeless traditions 
                with cutting-edge designs. Our commitment to quality and creativity ensures that 
                each piece not only enhances your wardrobe but also tells a story of elegance 
                and authenticity.
            </p>
            <h2 className="subheading">Why Choose Us</h2>
            <p className="centered-paragraph">
                We offer a wide range of collections that cater to diverse tastes and occasions, 
                with a focus on comfort, durability, and style. Whether you're looking for classic 
                or contemporary designs, Cross Stitch has something unique to offer for everyone.
            </p>
        </div>
    );
}

