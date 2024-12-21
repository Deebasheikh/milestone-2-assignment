import "../globals.css";
import Link from "next/link";

export default function StoreLocations() {
    return (
        <div className="store-locations-container">
            <h1 className="store-heading">Our Store Locations</h1>
            <p className="store-description">
                Find a Cross Stitch store near you. Visit us to explore our latest collections and experience our quality craftsmanship in person.
            </p>
            <div className="store-grid">
                {/* Store Location Cards */}
                {[
                    {
                        title: "Lucky One Mall",
                        address: "2nd Floor, LA-2/B, Block 21,\nMain Rashid Minhas Rd,\nBlock 21 Gulberg Town, Karachi",
                        hours: "10AM - 10PM",
                        link: "/locations/lucky-one-mall"
                    },
                    {
                        title: "Emporium Mall",
                        address: "1st Floor, Abdul Haque Rd,\nJohar Town, Lahore",
                        hours: "10AM - 10PM",
                        link: "/locations/emporium-mall"
                    },
                    {
                        title: "Dolmen Mall Clifton",
                        address: "Ground Floor, Marine Dr,\nClifton, Karachi",
                        hours: "10AM - 10PM",
                        link: "/locations/dolmen-mall-clifton"
                    }
                ].map((location, index) => (
                    <div key={index} className="store-card">
                        <h2 className="store-card-title">{location.title}</h2>
                        <p className="store-card-address">{location.address}</p>
                        <p className="store-card-hours">Opening Hours: {location.hours}</p>
                        <Link href={location.link} className="store-card-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
