import React from "react";
import './bookspage.style.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from "../../components/forms/searchinputForm/SearchInputForm";
import ProductListingAll from "../../components/layouts/productlistingall/ProductListingAll";
import Footer from "../../components/layouts/footer/Footer";
import Filter from "../../components/layouts/filter/Filter";

const BooksPage = ({ books }) => {
    return (
        <section>
            <Navbar darkTheme={true}/>

            <div className="search-container">
                <h2>Find the <span className='text-primary'>books </span>that you want</h2>
                <SearchInputForm darkTheme={false}/>

            </div>

            <div className="book-container">
                <Filter />
                <ProductListingAll booksData={books}/>
            </div>
            <Footer />
        </section>
    )
}

export default BooksPage;