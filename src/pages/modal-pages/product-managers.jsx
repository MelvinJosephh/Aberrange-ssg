import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';  // Import useRouter from next/router
import '../../Styles/ModalPages/HireProductManagers.module.scss';  // Import styles
import categories from '../../../public/data/skills/productManagersData';  // Import categories data

const HireProductManagers = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);  // State to store the clicked item
  const router = useRouter();  // Initialize the router hook

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);  // Open the modal with the selected product manager item
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    router.push('/hire-product-manager/step2');  // Navigate to the next step in the hiring process
  };

  if (!showPage) return null;

  return (
    <div className="hire-product-managers-page">
      <div className="header-section">
        <h1>Hire Product Managers</h1>
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
                    onClick={() => handleItemClick(item)}  // Open the modal when an item is clicked
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show the modal when an item is selected */}
      {activeItem && (
        <div className="item-detail-modal">
          <div className="modal-content">
            <CloseIcon className="close-icon" onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected Product Manager role will be shown here.</p>
            <button className="primary-btn" onClick={handleActionClick}>
              Hire Product Manager
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireProductManagers;
