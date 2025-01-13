import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import "../Styles/components/Dropdown.module.scss";

const Dropdown = ({ title, items = [], renderContent, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsOpen(false);  // Close the dropdown when a link is clicked
    onClose?.();
  };

  return (
    <li className="dropdown-wrapper" ref={dropdownRef}>
      <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>
        {title}
      </a>
      {isOpen && (
        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          {renderContent ? renderContent(items) : (
            <div className="dropdown-sections">
              {items.map(({ title, items }, idx) => (
                <div key={idx} className="dropdown-section">
                  {title && <div className="section-title">{title}</div>}
                  <ul className={items.length ? "simple-list" : "subcategory-list"}>
                    {items.map(({ label, link }, itemIdx) => (
                      <li key={itemIdx} className="subcategory-item">
                        <Link to={link} onClick={handleLinkClick}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  renderContent: PropTypes.func,
  onClose: PropTypes.func,
};

export default Dropdown;
