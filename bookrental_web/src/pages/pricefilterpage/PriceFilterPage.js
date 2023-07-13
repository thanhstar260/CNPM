import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './pricefilterpage.style.css';
import { BookData } from '../../util/BookData';
import BooksPage from '../bookspage/BooksPage';
import Filter from '../../components/layouts/filter/Filter';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/forms/searchinputForm/SearchInputForm';

const PriceFilterPage = () => {
    const location = useLocation();
    const [priceFilterResult, setPriceFilterResult] = useState([]);

    useEffect(() => {
        const priceFrom = parseInt(new URLSearchParams(location.search).get('priceFrom'));
        const priceTo = parseInt(new URLSearchParams(location.search).get('priceTo'));
        let priceFilterValue = [];

        priceFilterValue = BookData.filter((data) => {
            const price = data.price;
            return price >= priceFrom && price <= priceTo;
        });

        setPriceFilterResult(priceFilterValue);
    }, [location.search])

    return (
        <div>
            {priceFilterResult.length === 0 ? (
                <section>
                    <Navbar darkTheme={true}/>

                    <div className="search-container">
                        <h2>Find the <span className='text-primary'>books </span>that you want</h2>
                        <SearchInputForm darkTheme={false}/>

                    </div>

                    <div className="book-container">
                        <Filter />
                        <p className='filter-notify'>No book is found!</p>
                    </div>
                    <Footer />
                </section>
            ) : (
            <section>
                <BooksPage books={priceFilterResult}/>
            </section>
            )
            }
        </div>
    )
}

export default PriceFilterPage;