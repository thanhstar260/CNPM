import React from "react";
import "./filter.style.css";
import PriceFilterForm from "../../forms/pricefilterForm/PriceFilterForm";
import CategoryFilterForm from "../../forms/categoryfilterForm/CategoryFilterForm";

const Filter = () => {
    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <PriceFilterForm />
            <CategoryFilterForm />
        </div>
    )
}

export default Filter;