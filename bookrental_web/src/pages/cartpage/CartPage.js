import React, { useContext } from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import CartItemsContainer from "../../components/layouts/cart-items-container/CartItemContainer";
import { NotificationContext } from '../../App';

const CartPage = () => {
    const { addNotification } = useContext(NotificationContext);

    return (
        <section>
            <Navbar darkTheme={true}/>
            <CartItemsContainer addNotification={addNotification} />
            <Footer />
        </section>
    );
}

export default CartPage;
