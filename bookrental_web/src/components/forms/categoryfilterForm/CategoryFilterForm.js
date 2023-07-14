import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './categoryfilterform.style.css';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const CategoryFilterForm = () => {
  const [categoryFilterField, setCategoryFilterField] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const category = e.target.value;
    setCategoryFilterField(category);
    navigate(`/books/category-filter/${category}`);
  };

  return (
    <FormControl>
      <FormLabel id="radio-buttons-group">Category</FormLabel>
      <RadioGroup
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={categoryFilterField}
        onChange={handleChange}
      >
        <FormControlLabel value="new-arrival" control={<Radio />} label="New Arrival" />
        <FormControlLabel value="hot" control={<Radio />} label="Hot" />
        <FormControlLabel value="popular" control={<Radio />} label="Popular" />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryFilterForm;
