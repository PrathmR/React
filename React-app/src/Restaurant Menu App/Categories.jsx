import React from "react";

const Categories = (props) => {
  const filterItems = props.filterItems;

  // construct the UI according to instructions
  return (
    <div className="btn-container">
      <button className="filter-btn">All</button>
      <button className="filter-btn">BreakFast</button>
      <button className="filter-btn">Shakes</button>
    </div>
  );
};

export default Categories;
