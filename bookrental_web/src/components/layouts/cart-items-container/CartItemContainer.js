import React, { useContext } from "react";
import "./cart-item-container.style.css";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext, NotificationContext, UserContext } from "../../../App";

const CartItemsContainer = () => {
  const { cartItems, setCartItems, totalAmount} = useContext(CartContext);
  const { addNotification } = useContext(NotificationContext);
  const { authenticatedUser } = useContext(UserContext);

  console.log(authenticatedUser)
  
  const handleRent = () => {
    // Perform rent action and generate notification
    const notificationData = {
      books: cartItems,
      totalPrice: totalAmount,
      rentDate: new Date().toLocaleDateString(),
      user_id: authenticatedUser ? authenticatedUser.uid : null
    };

    addNotification(notificationData);

    // Clear the cart items
    setCartItems([]);
  };

  return (
    <section className="cart-item-container">
      <div className="container">
        {totalAmount === 0 ? (
          <p className="empty-cart">Your shopping cart is empty!</p>
        ) : (
          <React.Fragment>
            <h2 className="ur-cart">Your cart</h2>

            {cartItems.map((item) => (
              <CartItemCard key={item.id} bookData={item}/>
            ))}

            <div className="rent-container">
                <h2>Total = {totalAmount} vnd</h2>
                <button className="rent_btn" onClick={handleRent}>
                Rent
                </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default CartItemsContainer;
