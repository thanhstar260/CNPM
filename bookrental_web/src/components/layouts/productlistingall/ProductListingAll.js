import React from 'react';
import './productlistingall.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';
const ProductListingAll = () => {
    return (
        <section>
            <div className='product-listing-all-container'>
                <div className='container'>
                    <div className="grid-container">
                        {BookData.map((book) => {
                            return(
                                <div className="grid-item">
                                    <ProductListingCard bookData={book}/>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ProductListingAll;