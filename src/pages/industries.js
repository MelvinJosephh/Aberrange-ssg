import React from 'react';
import '../Styles/pages/Industries.scss';
import industriesData from '../Assets/data/IndustriesData';
import Image from 'next/image';  // Importing the Image component from Next.js

const Industries = () => (
  <div className="industries">
    <h2>Industries We Serve</h2>
    <div className="industries-grid">
      {industriesData.map((industry) => (
        <div key={industry.name} className="industry-card">
          <div className="icon">
            <Image
              src={industry.icon} // The image path should be relative to the 'public' directory or an external URL
              alt={`${industry.name} icon`}
              width={50} // Set a fixed width for the image
              height={50} // Set a fixed height for the image
              objectFit="contain" // Ensures the image is contained within the bounds of the div
            />
          </div>
          <div className="content">
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="get-quote">
      <button onClick={() => window.location.href='/contact'} className="quote-button">Get a Quote</button>
    </div>
  </div>
);

Industries.propTypes = {};

Industries.defaultProps = {};

export default Industries;
