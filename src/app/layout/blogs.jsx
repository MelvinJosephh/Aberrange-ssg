"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link"; // Next.js Link component for routing
import '../../styles/components/Blogs.module.scss';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/blogs");
      const blogsData = response.data.map((blog) => ({
        _id: blog._id,
        title: blog.title,
        excerpt: blog.excerpt,
        publishDate: blog.publishDate,
        author: blog.author,
        permalink: blog.permalink,
        featuredImage: blog.featuredImage,
      }));

      localStorage.setItem("blogs", JSON.stringify(blogsData));
      localStorage.setItem("blogsTimestamp", new Date().getTime());

      setBlogs(blogsData);
    } catch (err) {
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const blogsCache = localStorage.getItem("blogs");
    const blogsTimestamp = localStorage.getItem("blogsTimestamp");

    if (blogsCache && blogsTimestamp) {
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000;

      if (currentTime - blogsTimestamp < oneHour) {
        try {
          setBlogs(JSON.parse(blogsCache));
          setLoading(false);
          return;
        } catch {
          localStorage.removeItem("blogs");
          localStorage.removeItem("blogsTimestamp");
        }
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="blog services">
      <div className="container topMargin">
        <div className="heading">
          <h3>LATEST BLOG</h3>
          <h1>Read Inspirational Stories Every Week</h1>
        </div>
        <div className="contain grid topMargin">
          {blogs.map((blog) => (
            <div className="box" key={blog._id}>
              <div className="img">
                {blog.featuredImage ? (
                  <img
                    src={`data:image/jpeg;base64,${blog.featuredImage}`}
                    alt={blog.title}
                    loading="lazy"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className="text">
                <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <p>By: {blog.author.name}</p>
                <Link href={`/blogs/${blog.permalink}`}>
                  <a>Read More <KeyboardDoubleArrowRightIcon className="icon" /></a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
