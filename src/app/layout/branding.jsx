"use client";

import React, { useEffect } from 'react';
import '../../styles/layout/Branding.module.scss';
import brandingData from '../../../public/data/BrandingData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router'; 

const Branding = () => {
  const router = useRouter(); // Get the current route (similar to useLocation)

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,
      once: true, // Ensure animation triggers once per element
    });

    // Refresh AOS animations whenever the route changes
    const handleRouteChange = () => {
      AOS.refresh(); // Refresh AOS animations on route change
    };

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // Cleanup the route change listener when the component unmounts
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]); // Dependency on router to trigger refresh on route change

  return (
    <section className="branding">
      <div className="branding-container">
        {brandingData.map((value, index) => (
          <div
            className="box"
            key={value.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Adding delay to animate boxes in sequence
          >
            <div className="text" data-aos="zoom-in">
              <h1>{value.id}</h1>
            </div>
            <div className="para" data-aos="fade-up">
              <h2>{value.heading}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branding;
