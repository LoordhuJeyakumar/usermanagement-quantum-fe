import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800 ">
      {/* Hero Section */}
      <section className="bg-primary text-lime-50 h-screen flex justify-center mt-24">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold md:text-5xl">
            Welcome to <span className="text-accent">Quantam</span>
          </h1>
          <p className="mt-4 text-lg">
            Empowering Your Digital Journey: Where Innovation Meets Innovation.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-accent text-black px-6 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="ml-4 border border-accent text-accent px-6 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-accent hover:text-black transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">
          Features
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Discover the benefits of using Quantam for your goals.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="User-Friendly"
            description="A seamless and intuitive interface for effortless use."
            icon="🌟"
          />
          <FeatureCard
            title="Secure"
            description="Your data is safe with our robust security features."
            icon="🔒"
          />
          <FeatureCard
            title="Scalable"
            description="A platform that grows with you and your needs."
            icon="📈"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to take the next step?</h2>
          <p className="mt-4">
            Join Quantam today and start your journey to success.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-primary text-lime-50 px-8 py-3 rounded-md text-lg font-semibold hover:bg-lime-800 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Home;
