import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../Styles/ModalPages/HireDevelopers.module.scss';
import categories from '../../../public/data/skills/developersData';
import { useRouter } from 'next/router'; // Use Next.js's useRouter for routing

const HireDevelopers = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);  // Store the selected item for modal details
  const router = useRouter();  // Hook for navigation

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);  // Set the selected item for the modal
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    router.push('/hire-talent/step2');  // Navigate to the hire developer process
  };

  if (!showPage) return null;

  return (
    <div className="hire-developers-page">
      <div className="header-section">
        <h3>Hire Developers</h3>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category-header"
              onClick={() => toggleCategory(index)}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className="category-items">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleItemClick(item)}  // Open modal with clicked item
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show Item Detail Modal if activeItem is selected */}
      {activeItem && (
        <div className="item-detail-modal">
          <div className="modal-content">
            <CloseIcon className="close-icon" onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected developer skill will be shown here.</p>
            <button className="primary-btn" onClick={handleActionClick}>
              Hire Developer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireDevelopers;
