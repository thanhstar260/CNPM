import React from "react";
import './bookspage.style.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from "../../components/forms/searchinputForm/SearchInputForm";
import ProductListingAll from "../../components/layouts/productlistingall/ProductListingAll";
import Footer from "../../components/layouts/footer/Footer";

const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>

            <div className="search-container">
                <h2>Tìm kiếm <span className='text-primary'>sách</span></h2>
                <SearchInputForm darkTheme={false}/>

            </div>
            <ProductListingAll />
            <Footer />
        </section>
    )
}

export default BooksPage;