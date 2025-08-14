import React from "react";

const Categories = (props) => {
    const filterItems=props.filterItems
    return (
        <div className="btn-container">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Breakfast</button>
            <button className="filter-btn"><Shakes></Shakes></button>
        </div>
      
    );
};

export default Categories;
