import React from 'react';
import "./productlistingcard.style.css";
import ProductImage from '../../../assets/images/dac_nhan_tam.jpg';

const ProductListingCard = () => {
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={ProductImage} alt="product-listing-image" className="product-listing-image"/>
            </div>
            <div className="product-listing-details-container">
                <h3>Book Name</h3>
                <p className="author-name">Author Name</p>
                <p className="pricing">Pricing</p>
                <a href="#" className="product-listing-button">Button</a>
            </div>
        </div>
    )
}
export default ProductListingCard;