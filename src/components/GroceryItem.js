import React from 'react';

const GroceryItem = ({ item, onDelete }) => {
  return (
    <div className="grocery-item">
      <input type="checkbox" />
      <span>{item}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default GroceryItem;
