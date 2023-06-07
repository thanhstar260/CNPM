import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";


const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
                <a href="#" className="product-link">Sách mới</a>
                <div className="listing-container">
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                </div>
            </div>

            <div className="container">
                <a href="#" className="product-link">Sách hot</a>
                <div className="listing-container">
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                </div>
            </div>

            <div className="container">
                <a href="#" className="product-link">Sách phổ biến</a>
                <div className="listing-container">
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                <ProductListingCard />
                </div>
            </div>
            
        </div>
    )
}

export default ProductListing;