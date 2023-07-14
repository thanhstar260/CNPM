import React from 'react';
import "./productlistingcard.style.css";
import {Link} from 'react-router-dom';

const ProductListingCard = ({bookData}) => {
    console.log(bookData)
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={bookData.book_url} alt="product-listing-image" className="product-listing-image"/>
            </div>
            <div className="product-listing-details-container">
                <p className="author-name">{bookData.author}</p>
                <h3>{bookData.title}</h3>
            </div>
            <p className="pricing">{bookData.price} vnd</p>
            <div className="card-btn-container">
                <Link to={`/book-details/${bookData.id}`} className="product-listing-button">Product Details</Link>
            </div>
        </div>
    )
}
export default ProductListingCard;