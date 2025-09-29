import 'bootstrap/dist/css/bootstrap.min.css';
import AboutCard from '../components/AboutCard';
import profiles from '../data/abpoutData';

export default function About() {
    return (
        <div className="container my-5">
            {/* Loving Paragraph */}
            <div className="text-center mb-5">
                <h2 className="fw-bold text-danger">About Our Dating App ❤️</h2>
                <p className="lead text-muted">
                    Love is not about finding the perfect person, but about creating a perfect bond together.
                    Our app is designed to bring hearts closer, spark smiles, and build unforgettable memories
                    between lovely souls who believe in passion and togetherness.
                </p>
            </div>

            {/* Cards Section */}
            <div className="row g-4">
                {profiles?.map((profile, index) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                        <AboutCard
                            name={profile?.name}
                            description={profile?.description}
                            image={profile?.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
