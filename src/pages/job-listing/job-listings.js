import React from 'react';
import { useRouter } from 'next/router';  // Use Next.js's useRouter hook for navigation
import '../Styles/ModalPages/JobListings.scss';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Build and maintain user interfaces for web applications.',
  },
  {
    id: 2,
    title: 'Content Writer',
    company: 'WordFlow',
    location: 'Remote',
    description: 'Create engaging blog posts and marketing copy.',
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'DesignStudio',
    location: 'Remote',
    description: 'Design creative visuals for digital campaigns.',
  },
];

const JobListings = () => {
  const router = useRouter();  // Get the router from useRouter for navigation

  const handleApplyNow = (jobId) => {
    router.push(`/job-details/${jobId}`);  // Navigate to the job details page dynamically
  };

  return (
    <div className="job-listings-page">
      <header>
        <h1>Remote Job Opportunities</h1>
      </header>
      <section>
        {mockJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button
              className="apply-button"
              onClick={() => handleApplyNow(job.id)}  // Navigate when the button is clicked
            >
              Apply Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobListings;
