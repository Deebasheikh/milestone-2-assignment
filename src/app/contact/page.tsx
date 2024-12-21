import "../globals.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-subheading">We're here to help you</p>
            <h2 className="contact-info-heading">Contact Information</h2>
            <p className="contact-info">
                Cross Stitch LuckyOne Mall<br />
                Lucky One Mall, 2nd Floor, LA-2/B, Block 21, Main Rashid Minhas Rd,<br />
                Block 21 Gulberg Town, Karachi
            </p>
            <h3 className="contact-email-heading">Email:</h3>
            <p className="contact-email">sales@mail.us.crossstitch.pk</p>
            <h2 className="contact-hours-heading">Opening Hours</h2>
            <p className="contact-hours">
                Our customer care representative will be available for support from <br />
                (10AM to 5.30PM) Mon to Sat
            </p>
        </div>
    );
}

