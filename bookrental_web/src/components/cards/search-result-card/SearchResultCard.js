import React from 'react';
import { Link } from 'react-router-dom';
import './searchresultcard.style.css';

const SearchResultCard = ({ bookData }) => {
    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{bookData.title}</h2>
                <p>{bookData.author}</p>
                
                <Link to={`/book-details/${bookData.id}`} className="button-primary">Product Details</Link>
            </div>
        </section>
    )
}

export default SearchResultCard;