import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="sub-product-container">
                <a href="#" className="product-link">New Arrival</a>
                <div className="listing-container">
                    {BookData.slice(0,5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>

            <div className="sub-product-container">
                <a href="#" className="product-link">Hot</a>
                <div className="listing-container">
                    {BookData.slice(0,5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>

            <div className="sub-product-container">
                <a href="#" className="product-link">Popular</a>
                <div className="listing-container">
                    {BookData.slice(0,5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ProductListing;