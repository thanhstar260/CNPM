import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import './searchpage.style.css';
import '../../components/layouts/productlisting/productlisting.style.css';
import { BookData } from '../../util/BookData';
import ProductSlider from '../../components/layouts/productslide/ProductSlide';
import BooksPage from '../bookspage/BooksPage';
import { ReactComponent as SeeAll } from "../../assets/images/right.svg"

const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        let searchValue = [];

        searchValue = BookData.filter((data) => data.title.toLowerCase().includes(location.state.toLowerCase()) || data.author.toLowerCase().includes(location.state.toLowerCase()));

        setSearchResult(searchValue);
    }, [location.state])

    return (
        <div>
            {searchResult.length === 0 ? (
                <section>
                    <Navbar darkTheme={true} />
                    
                    <div className='search-result-container'>
                        <div className="container">
                            <h3>Couldn't find the book that matches your search value.</h3>
                        </div>
                    </div>

                    <div className='recommend-container'>
                        <div className="sub-product-container">
                            <div className="book-cate">
                                <h2>New Arrival</h2>
                                <div className="see-all">
                                    <a href="http://localhost:3000/books/category-filter/new-arrival" className="product-link">See all</a>
                                    <SeeAll />
                                </div>
                            </div>
                            <div className="listing-container">
                                <ProductSlider bookData={BookData}/>
                            </div>
                        </div>
                    </div>
        
                    <Footer />
                </section>
            ) : (
                <BooksPage books={searchResult}/>
            )
            }
        </div>
    )
}

export default SearchPage;