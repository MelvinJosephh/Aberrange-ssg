import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';  // Use useRouter for dynamic routing
import '../Styles/Freelancers/JobDetails.scss';

const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Build and maintain user interfaces for web applications.',
    responsibilities: ['Develop UI components', 'Collaborate with designers', 'Write clean code'],
    qualifications: ['Bachelor\'s in Computer Science', '3+ years of experience in Frontend Development'],
  },
  {
    id: 2,
    title: 'Content Writer',
    company: 'WordFlow',
    location: 'Remote',
    description: 'Create engaging blog posts and marketing copy.',
    responsibilities: ['Write blog posts', 'Create social media content', 'Collaborate with marketing'],
    qualifications: ['Excellent writing skills', 'Experience with SEO'],
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'DesignStudio',
    location: 'Remote',
    description: 'Design creative visuals for digital campaigns.',
    responsibilities: ['Design graphics for campaigns', 'Collaborate with creative teams', 'Prepare assets for digital platforms'],
    qualifications: ['Proficiency in Adobe Creative Suite', 'Portfolio required'],
  },
];

const JobDetails = ({ jobData }) => {
  const router = useRouter(); // Use useRouter for dynamic routing
  const { jobId } = router.query;  // Get jobId from the URL dynamically

  const [job, setJob] = useState(jobData || null);  // Initialize with fetched job data
  const [loading, setLoading] = useState(!jobData);  // Start loading if no data passed

  useEffect(() => {
    if (!job && jobId) {
      const selectedJob = mockJobs.find((job) => job.id === parseInt(jobId));
      setJob(selectedJob);
      setLoading(false);
    }
  }, [jobId, job]);

  const handleProceedToApply = () => {
    router.push(`/apply/${jobId}`);  // Navigate to the application form page
  };

  if (loading) return <p>Loading job details...</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="job-details-page">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        {job.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <h3>Qualifications:</h3>
      <ul>
        {job.qualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>

      <button onClick={handleProceedToApply} className="cta-button">
        Proceed to Apply
      </button>
    </div>
  );
};

// Server-side data fetching for job details before rendering
export async function getServerSideProps({ params }) {
  const { jobId } = params;

  try {
    // Fetch job data from the backend or mock it
    const selectedJob = mockJobs.find((job) => job.id === parseInt(jobId));

    // If no job found, return 404
    if (!selectedJob) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        jobData: selectedJob,  // Pass job data to the component
      },
    };
  } catch (err) {
    return {
      props: {
        error: 'Failed to fetch job details.',
      },
    };
  }
}

export default JobDetails;
