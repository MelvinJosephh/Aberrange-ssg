import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";  // Use useRouter for dynamic route parameters
import '../Styles/components/FullBlog.scss';

const FullBlog = ({ blogData }) => {
  const router = useRouter(); // Use useRouter for dynamic routing
  const { permalink } = router.query;  // Get permalink from the URL dynamically
  const [blog, setBlog] = useState(blogData || null);  // Initialize with fetched blog data
  const [loading, setLoading] = useState(!blogData);  // Start loading if no data passed
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const cachedBlog = localStorage.getItem(`blog-${permalink}`);
  
      if (cachedBlog) {
        setBlog(JSON.parse(cachedBlog));
        setLoading(false);
      } else {
        const response = await axios.get(`http://localhost:5000/api/blogs/${permalink}`);
        setBlog(response.data);
        localStorage.setItem(`blog-${permalink}`, JSON.stringify(response.data)); 
      }
    } catch (err) {
      setError("Failed to fetch the full blog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!blog) {
      fetchBlog();
    }
  }, [permalink, blog]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="full-blog">
      <div className="container topMargin">
        {blog ? (
          <div>
            <h1>{blog.title}</h1>
            <p>{new Date(blog.publishDate).toLocaleDateString()}</p>
            <p>By: {blog.author.name}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Assuming content is HTML */}
          </div>
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
    </section>
  );
};

// Server-side data fetching for blog data before rendering
export async function getServerSideProps({ params }) {
  const { permalink } = params;
  try {
    // Fetch blog data from the backend API
    const res = await axios.get(`http://localhost:5000/api/blogs/${permalink}`);
    const blogData = res.data;

    // If no blog found, return 404
    if (!blogData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blogData,
      },
    };
  } catch (err) {
    return {
      props: {
        error: "Failed to fetch the full blog.",
      },
    };
  }
}

export default FullBlog;
