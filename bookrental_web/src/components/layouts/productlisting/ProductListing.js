import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="sub-product-container">
                <a href="#" className="product-link">Sách mới</a>
                <div className="listing-container">
                    {BookData.slice(0,5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>

            <div className="sub-product-container">
                <a href="#" className="product-link">Sách hot</a>
                <div className="listing-container">
                    {BookData.slice(0,5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>

            <div className="sub-product-container">
                <a href="#" className="product-link">Sách phổ biến</a>
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