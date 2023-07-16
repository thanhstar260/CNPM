import React, { useContext } from 'react';
import './cart-item-card.style.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ bookData }) => {
    const { cartItems, setCartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const cartItem = cartItems.find(item => item.id === bookData.id);

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
            <div className='img-content-cart'>
                <div className="cart-item-img-container">
                    <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
                </div>
                <div className="cart-item-content-container">
                    <h2>{bookData.title}</h2>
                    <p style={{ color: 'var(--primary-color-bright)' }}>{bookData.author}</p>
                </div>
            </div>
            <h2 className="cart-item-price">{bookData.price}</h2>
            <div className="cart-item-quantity">
                <p style={{marginBottom: '10px'}}>Days</p>
                <div>
                    <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
                    <span className="quantity">{cartItem.quantity? cartItem.quantity:1}</span>
                    <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
                </div>
            </div>
            <button onClick={handleRemove} className='delete_btn'>Remove from Cart</button>
        </section>
    );
};

export default CartItemCard;
