import React, { useContext } from 'react';
import { ProductContext } from '../context';

const Categories = () => {
  const valueContext = useContext(ProductContext)
  const {categories, filterItems} = valueContext

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;