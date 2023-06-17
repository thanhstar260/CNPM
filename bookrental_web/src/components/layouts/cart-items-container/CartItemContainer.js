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
                    <h2>Giỏ hàng trống</h2>
                ):(
                    <React.Fragment>
                        <h2>Giỏ hàng</h2>

                        {cartItems.map((item) => (
                            <CartItemCard key={item.id} bookData={item} />
                        ))}

                        <h2>Tổng cộng = {totalAmount} vnd</h2>

                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default CartItemsContainer;