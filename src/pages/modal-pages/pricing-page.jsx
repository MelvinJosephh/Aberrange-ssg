import React from 'react';
import '../../Styles/ModalPages/PricingPage.module.scss';
import pricingPlans from '../../../public/data/skills/pricingPlans';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <h1>Find the Right Plan for Your Needs</h1>
        <p>Choose a plan that suits your business. No hidden fees, just great service.</p>
      </header>

      <section className="pricing-container">
        <div className="grid-layout">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h2>{plan.title}</h2>
              <div className="price">
                <span>{plan.price}</span> {plan.frequency && <span>{plan.frequency}</span>}
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href={plan.buttonLink} className="cta-button">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>Have questions about our pricing? Contact our support team for assistance.</p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
