import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ groceries, onDeleteGrocery }) => {
  return (
    <div className="grocery-list">
      {groceries.map((item, index) => (
        <GroceryItem key={index} item={item} onDelete={() => onDeleteGrocery(index)} />
      ))}
    </div>
  );
};

export default GroceryList;
