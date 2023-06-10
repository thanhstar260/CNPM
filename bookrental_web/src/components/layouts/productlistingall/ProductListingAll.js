import React from 'react';
import './productlistingall.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';

const ProductListingAll = () => {
    return (
        <section>
            <div className='product-listing-all-container'>
                <div className="grid-container">
                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>

                    <div className="grid-item">
                        <ProductListingCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListingAll;