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

export const UserContext = createContext({});

const App = () => {
    const auth = getAuth(app);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

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

    return(
        <UserContext.Provider value={authenticatedUser}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

            </Routes>

        </UserContext.Provider>
    )
}

export default App;