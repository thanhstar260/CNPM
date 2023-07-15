import React, { useContext } from 'react';
import './cart-item-card.style.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ bookData }) => {
    const { cartItems, setCartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRemove = () => {
        setCartItems(cartItems.filter((item) => item.id !== bookData.id));
    };

    const handleIncreaseQuantity = () => {
        increaseQuantity(bookData.id);
    };

    const handleDecreaseQuantity = () => {
        decreaseQuantity(bookData.id);
    };

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{bookData.title}</h2>
                <p>{bookData.author}</p>
                <h3 className="cart-item-price">{bookData.price}</h3>
                <div className="cart-item-quantity">
                    <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
                    <span className="quantity">{bookData.quantity}</span>
                    <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
                </div>
                <button onClick={handleRemove} className='delete_btn'>Remove from Cart</button>
            </div>
        </section>
    );
};

export default CartItemCard;
