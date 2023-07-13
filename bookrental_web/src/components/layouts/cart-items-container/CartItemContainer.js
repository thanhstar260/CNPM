import React, {useContext} from "react";
import './cart-item-container.style.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from '../../../App';

const CartItemsContainer = () => {
    const { cartItems, totalAmount } = useContext(CartContext);

    return (
        <section className="cart-item-container">
            <div className="container">
                {totalAmount === 0 ? (
                    <p class='empty-cart'>Your shopping cart is empty!</p>
                ):(
                    <React.Fragment>
                        <h2>Cart</h2>

                        {cartItems.map((item) => (
                            <CartItemCard key={item.id} bookData={item} />
                        ))}

                        <h2>Total = {totalAmount} vnd</h2>
                        <button className="button">Rent</button>

                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default CartItemsContainer;