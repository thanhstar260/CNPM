import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pricefilterform.style.css';

const PriceFilterForm = () => {
  const navigate = useNavigate();

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handlePriceFromChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceFrom(value >= 0 ? value : '');
  };

  const handlePriceToChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceTo(value >= 0 ? value : '');
  };

  const redirectToPriceFilterResult = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      navigate(`/books/price-filter?priceFrom=${priceFrom}&priceTo=${priceTo}`);
    }
  };

  return (
    <div>
      <p>Price</p>
      <div className="price-input">
        <input
          type="number"
          className="filter-input"
          placeholder="From"
          value={priceFrom}
          onChange={handlePriceFromChange}
          onKeyDown={redirectToPriceFilterResult}
        />
        <p>-</p>
        <input
          type="number"
          className="filter-input"
          placeholder="To"
          value={priceTo}
          onChange={handlePriceToChange}
          onKeyDown={redirectToPriceFilterResult}
        />
      </div>
    </div>
  );
};

export default PriceFilterForm;
