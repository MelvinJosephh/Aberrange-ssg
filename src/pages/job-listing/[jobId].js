import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';  // Use Next.js's useRouter hook for navigation
import '../Styles/ModalPages/JobDetails.scss';

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

const JobDetails = () => {
  const router = useRouter();
  const { jobId } = router.query;  // Access jobId from the dynamic URL
  
  const [job, setJob] = useState(null);
  
  useEffect(() => {
    if (jobId) {
      const selectedJob = mockJobs.find((job) => job.id === parseInt(jobId));
      setJob(selectedJob);
    }
  }, [jobId]);
  
  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="job-details-page">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      <button onClick={() => alert('Applying for the job...')} className="cta-button">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
