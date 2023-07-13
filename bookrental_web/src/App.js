import React, {useState,useEffect,createContext} from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/Firebase";
import {getAuth, onAuthStateChanged, onAuthStateChanges} from 'firebase/auth';

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

export const UserContext = createContext({});
export const CartContext = createContext({});
export const NotiContext = createContext({});

const App = () => {
    const auth = getAuth(app);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log(user);
                setAuthenticatedUser(user);
            }else{
                setAuthenticatedUser(null);
            }
        })
    },[])

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total = total + parseInt(item.price);
        })

        setTotalAmount(total);
    },[cartItems])


    return(
        <UserContext.Provider value={authenticatedUser}>
            <CartContext.Provider value={{cartItems, totalAmount, setCartItems}}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage books={BookData}/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/books/price-filter" element={<PriceFilterPage />} />
                    <Route path="/book-details/:id" element={<BookDetails />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notification" element={<NotificationPage />} />
                </Routes>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

export default App;