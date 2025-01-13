import React from "react";
import "../../Styles/layout/ItemDetail.module.scss";

const ItemDetail = ({ title, description, actionLabel, onActionClick }) => {
  return (
    <div className="item-detail">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onActionClick}>{actionLabel}</button>
    </div>
  );
};

export default ItemDetail;
