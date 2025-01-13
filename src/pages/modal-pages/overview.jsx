import React from 'react';
import { useRouter } from 'next/router';  // Importing the Next.js router
import '../../Styles/ModalPages/FindandOverview.module.scss';  // Importing styles

const Overview = () => {
  const router = useRouter();  // Using the Next.js router

  const goToRegister = () => {
    router.push('/register');  // Navigating to the register page
  };

  return (
    <div className="overview-page">
      <header className="header-section">
        <h1>Welcome to Freelancing with Aberrange</h1>
        <p>
          Join a thriving community of skilled professionals and get access to rewarding freelance opportunities that help you grow and succeed.
        </p>
        <button className="cta-button" onClick={goToRegister}>
          Join the Team
        </button>
      </header>

      <section className="why-aberrange">
        <h2>Why Aberrange?</h2>
        <h3>We offer more than just jobs. We provide a platform where you can thrive as a freelancer.</h3>
        <ul>
          <li>🌍 Work with global clients and diversify your portfolio.</li>
          <li>📈 Earn competitive pay based on your expertise and experience.</li>
          <li>⏰ Work from anywhere, anytime. Enjoy full flexibility.</li>
          <li>💼 Build your professional portfolio with diverse projects.</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>🔑 Create your profile and showcase your skills.</li>
          <li>🔍 Browse job opportunities that match your expertise.</li>
          <li>💸 Start working on projects and get paid securely.</li>
        </ol>
      </section>

      <section className="testimonials">
        <h2>Success Stories</h2>
        <blockquote>
          "Aberrange helped me achieve my dream of working remotely while growing my skills."
        </blockquote>
        <cite>— Melvin Joseph, Freelancer</cite>
        {/* You can add more testimonials here */}
      </section>

      <footer className="cta-footer">
        <h2>Ready to get started?</h2>
        <button className="cta-button" onClick={goToRegister}>
          Get Started Now & Unlock New Opportunities
        </button>
        {/* Optional: You can add an email signup form for those who aren't ready to join yet */}
      </footer>
    </div>
  );
};

export default Overview;
