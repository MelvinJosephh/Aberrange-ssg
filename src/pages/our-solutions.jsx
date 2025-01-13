import React, { useState } from "react";
import "../../Styles/layout/OurSolutions.scss";
import { servicesData } from "../../Models/servicesModel";
import ItemDetail from "./ItemDetail"; // Import the new component
import Link from "next/link"; // Use Next.js's Link component
import { useRouter } from "next/router"; // Use Next.js's useRouter hook for navigation

const OurSolutions = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null); // Store the active item for details
  const router = useRouter(); // Use Next.js router for navigation

  const toggleCategory = (categoryIndex) => {
    setActiveCategory((prev) => (prev === categoryIndex ? null : categoryIndex));
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Directly set the clicked item as the active item
  };

  const handleActionClick = () => {
    closeItemDetail(); 
    router.push('/hire-talent/step2'); // Use Next.js router to navigate
  };

  const closeItemDetail = () => {
    setActiveItem(null); // Close the item detail modal
  };

  return (
    <section className="our-solutions">
      <div className="container">
        <h1 className="section-title">Our Solutions</h1>
        <p className="section-intro">
          Discover the wide range of solutions we offer to empower your business.
        </p>

        {/* Engagement Models */}
        <div className="engagement-models">
          <h2>Engagement Models</h2>
          <div className="cards">
            {servicesData.engagementModels.map((model, index) => (
              <div className="card" key={index}>
                <img src={model.icon} alt={model.title} className="card-icon" />
                <h3 className="card-title">{model.title}</h3>
                <p className="card-description">{model.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="categories">
          {servicesData.categories.map((category, index) => (
            <div
              className={`category-card ${activeCategory === index ? "active" : ""}`}
              key={index}
            >
              <div className="category-header" onClick={() => toggleCategory(index)}>
                <h2 className="category-title">{category.title}</h2>
                <span className="toggle-icon">
                  {activeCategory === index ? "-" : "+"}
                </span>
              </div>
              {activeCategory === index && (
                <div className="subcategory-list">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className="subcategory" key={subIndex}>
                      <h3 className="subcategory-title">{subcategory.title}</h3>
                      <ul className="subcategory-items">
                        {subcategory.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="subcategory-item"
                            onClick={() => handleItemClick(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show Item Detail if activeItem is not null */}
        {activeItem && (
          <div className="item-detail-modal">
            <ItemDetail
              title={activeItem.name}
              description={activeItem.description}
              actionLabel="Hire Talent"
              onActionClick={handleActionClick} 
            />
          </div>
        )}

        {/* Footer CTA */}
        <div className="cta">
          <h2>{servicesData.footer.title}</h2>
          <p>{servicesData.footer.description}</p>
          <Link href="/contact">
            <a className="primary-btn">{servicesData.footer.buttonLabel}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
