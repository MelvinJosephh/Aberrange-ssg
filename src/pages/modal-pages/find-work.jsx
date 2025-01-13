import React from 'react';
import { useRouter } from 'next/router'; // Using Next.js's router
import '../../styles/ModalPages/FindandOverview.module.scss';
import categories from '../../../public/data/skills/developersData';
import Link from 'next/link'; // Using Next.js Link component for navigation

const FindWork = () => {
  const router = useRouter();

  const handleProfileCreation = () => {
    router.push('/register'); // Navigate to Freelancer Registration Form
  };

  const handleBrowseJobs = () => {
    router.push('/jobs'); // Navigate to Job Listings Page
  };

  return (
    <div className="find-work-page">
      <header className="header-section">
        <h1>Find Freelance Jobs You Love</h1>
        <p>
          Get access to exclusive freelance opportunities from top-tier companies. Create your free profile and get started today!
        </p>
        <button className="cta-button" onClick={handleProfileCreation}>Create Your Profile & Start Today</button>
      </header>

      <section className="job-categories">
        <h2>Explore Jobs by Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`#${category.title.replace(/ /g, '-').toLowerCase()}`}>
  {category.title}
</Link>

            </li>
          ))}
        </ul>
      </section>

      <section className="remote-jobs">
        <h2>Explore Remote Jobs</h2>
        <p>
          Work from anywhere with Aberrange. Explore top-tier remote job opportunities tailored to your expertise.
        </p>
        <button className="cta-button" onClick={handleBrowseJobs}>Browse Remote Jobs</button>
      </section>
    </div>
  );
};

export default FindWork;
