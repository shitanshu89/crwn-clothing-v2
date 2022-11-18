import React from "react";
import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  return (
    <div className="categories-container">
      {category.map(({ title, id, imageUrl }) => (
        <div keys={id} className="category-container">
          {/* <img /> */}
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};
