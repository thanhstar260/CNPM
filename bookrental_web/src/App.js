import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetails from "./pages/bookdetailspage/BookDetails";
import Signup from "./pages/signuppage/Signup";
import Login from "./pages/loginpage/Login";
import CartPage from "./pages/cartpage/CartPage";

const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<CartPage />} />

            </Routes>

        </div>
    )
}

export default App;