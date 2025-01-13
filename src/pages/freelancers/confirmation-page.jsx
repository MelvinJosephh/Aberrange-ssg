import React from 'react';
import { useRouter } from 'next/router';  // Use Next.js useRouter for navigation
import '../../Styles/Freelancers/ConfirmationPage.module.scss';

const ConfirmationPage = () => {
  const router = useRouter();  // Use useRouter to handle navigation

  const handleGoBack = () => {
    router.push('/jobs');  // Navigate back to the Job Listings page
  };

  return (
    <div className="confirmation-page">
      <h1>Thank you for applying!</h1>
      <p>Your application has been successfully submitted. We will get back to you soon.</p>
      <button onClick={handleGoBack} className="cta-button">
        Back to Job Listings
      </button>
    </div>
  );
};

export default ConfirmationPage;
