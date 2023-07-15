import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetails from "./pages/bookdetailspage/BookDetails";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import SearchPage from "./pages/searchpage/SearchPage";
import NotificationPage from "./pages/notificationspages/NotificationPage";
import { BookData } from "./util/BookData";
import PriceFilterPage from "./pages/pricefilterpage/PriceFilterPage";
import CategoryFilterPage from "./pages/categoryfilterpage/CategoryFilterPage";

export const UserContext = createContext({});
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  totalAmount: 0,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});
export const NotificationContext = createContext({});

const App = () => {
  const auth = getAuth(app);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + parseInt(item.price) * item.quantity;
    });

    setTotalAmount(total);
  }, [cartItems]);

  const addNotification = (notificationData) => {
    setNotifications((prevNotifications) => [...prevNotifications, notificationData]);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <UserContext.Provider value={authenticatedUser}>
      <CartContext.Provider value={{cartItems, setCartItems, totalAmount, increaseQuantity, decreaseQuantity }}>
        <NotificationContext.Provider value={{ notifications, addNotification }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage books={BookData} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/books/price-filter" element={<PriceFilterPage />} />
            <Route
              path="/books/category-filter/:category"
              element={<CategoryFilterPage />}
            />
            <Route path="/book-details/:id" element={<BookDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Routes>
        </NotificationContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
