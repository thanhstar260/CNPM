import React from "react";
import './cart-item-card.style.css';
import CartImg from '../cart-item-card/CartItemCard';


const CartItemCard = () => {
    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={CartImg} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>Book Name</h2>
                <p>Author Name</p>
                <h3 className="cart-item-price">Price</h3>
            </div>
        </section>
    )
}