import React, { useState } from 'react';
import './index.css';
import GroceryList from './components/GroceryList';

function App() {
  const [groceries, setGroceries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddGrocery = () => {
    if (inputValue.trim() !== '') {
      setGroceries([...groceries, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteGrocery = (index) => {
    const updatedGroceries = groceries.filter((item, i) => i !== index);
    setGroceries(updatedGroceries);
  };

  return (
    <div className="app">
      <h1>Grocery Bud</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add grocery item..."
        />
        <button onClick={handleAddGrocery}>Add</button>
      </div>
      <GroceryList groceries={groceries} onDeleteGrocery={handleDeleteGrocery} />
    </div>
  );
}

export default App;
