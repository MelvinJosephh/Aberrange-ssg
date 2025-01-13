import React, { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import aberrange from "../../../public/logo/aberrange-logo-themed.png";
import Dropdown from "../dropdown";
import "../../styles/layout/Header.module.scss";
import { data, descriptions } from "../../models/hireTalentModel";
import { industriesData } from "../../models/industriesModel";
import { servicesData } from "../../models/servicesModel";
import companiesData from "../../../public/data/companiesData";
import talentData from "../../../public/data/talentData";
import { useSidebar } from "../layout/side-bar";

const Header = () => {
  const { sidebar, toggleSidebar } = useSidebar();
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedArea, setSelectedArea] = useState("Frontend");
  const [showDevAndButton, setShowDevAndButton] = useState(false);

  const unifiedButton = (label, link) => (
    <button className="primary-btn">
      <Link href={link}>{label}</Link>
    </button>
  );

  const renderHireContent = () => (
    <div className="column">
      {!showDevAndButton ? (
        Object.keys(data).map((area) => (
          <p
            key={area}
            className={selectedArea === area ? "active" : ""}
            onClick={() => {
              setSelectedArea(area);
              setShowDevAndButton(true); 
            }}
          >
            {area}
          </p>
        ))
      ) : (
        <>
          <div className="column">
            {data[selectedArea]?.map((dev) => (
              <p
                key={dev}
                onClick={() => {
                  setSelectedDeveloper(dev);
                  setShowDevAndButton(true);
                }}
                className={selectedDeveloper === dev ? "active" : ""}
              >
                {dev}
              </p>
            ))}
          </div>
          <div className="column">
            <h3>{selectedDeveloper || selectedArea} Developer</h3>
            <p>{descriptions[selectedArea]}</p>
            {unifiedButton(`Hire ${selectedDeveloper || selectedArea}`, "/hire-talent/step2")}
          </div>
          <button
            className="reset-selection-btn"
            onClick={() => {
              setSelectedDeveloper(null);
              setShowDevAndButton(false); 
            }}
          >
            Reset Selection
          </button>
        </>
      )}
    </div>
  );

  const renderCompaniesContent = (items) => renderContent(items, "companies");
  const renderTalentContent = (items) => renderContent(items, "talent");

  const renderIndustriesContent = (items) => (
    <div className="column">
      {items.actions.map((action) => (
        <p key={action.name}>
          <Link href={action.link}>{action.name}</Link>
        </p>
      ))}
      {unifiedButton(items.button.label, items.button.link)}
    </div>
  );

  const renderServicesContent = (items) => (
    <div className="column">
      {items.engagementModels.map((service) => (
        <p key={service.title}>
          <Link href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
            {service.title}
          </Link>
        </p>
      ))}
      {unifiedButton("View All Services", "/services")}
    </div>
  );

  const renderContent = (items, type) => (
    <div className="column">
      {items.map((item) => (
        <p key={item.name || item.title}>
          <Link href={item.link || `/services/${item.title.toLowerCase().replace(/ /g, "-")}`}>
            {item.name || item.title}
          </Link>
        </p>
      ))}
      {type === "industries" && unifiedButton("View All Services", "/services")}
    </div>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="#" onClick={() => toggleSidebar(false)}>
            <img src={aberrange} alt="Aberrange Logo" />
          </Link>
        </div>
        <div className={sidebar ? "nav-links-sidebar active" : "nav-links-sidebar"}>
          <ul>
            <li>
              <Dropdown
                title="For Companies"
                items={companiesData}
                renderContent={renderCompaniesContent}
                onClose={() => toggleSidebar(false)}
              />
            </li>
            <li>
              <Dropdown
                title="For Talent"
                items={talentData}
                renderContent={renderTalentContent}
                onClose={() => toggleSidebar(false)}
              />
            </li>
            <li>
              <Link href="/about" onClick={() => toggleSidebar(false)}>
                What we do
              </Link>
            </li>
            <li>
              <Dropdown
                title="Industries"
                items={industriesData}
                renderContent={renderIndustriesContent}
                onClose={() => toggleSidebar(false)}
              />
            </li>
            <li>
              <Dropdown
                title="Services"
                items={servicesData}
                renderContent={renderServicesContent}
                onClose={() => toggleSidebar(false)}
              />
            </li>
            <li>
              <Dropdown
                title="Hire Talent"
                items={industriesData}
                renderContent={renderHireContent}
                onClose={() => toggleSidebar(false)}
              />
            </li>
          </ul>
        </div>
        <button className="navbar-items-icon" onClick={() => toggleSidebar(!sidebar)}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
