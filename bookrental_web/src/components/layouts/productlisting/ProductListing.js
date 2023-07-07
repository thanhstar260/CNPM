import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";
import { ReactComponent as SeeAll } from "../../../assets/images/right.svg";
import ProductSlider from "../productslide/ProductSlide";

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="sub-product-container">
                <div className="book-cate">
                    <h2>New Arrival</h2>
                    <div className="see-all">
                        <a href="#" className="product-link">See all</a>
                        <SeeAll />
                    </div>
                </div>
                <div className="listing-container">
                    <ProductSlider />
                </div>
            </div>

            <div className="sub-product-container">
            <div className="book-cate">
                    <h2>Hot</h2>
                    <div className="see-all">
                        <a href="#" className="product-link">See all</a>
                        <SeeAll />
                    </div>
                </div>
                <div className="listing-container">
                    <ProductSlider />
                </div>
            </div>

            <div className="sub-product-container">
            <div className="book-cate">
                    <h2>Popular</h2>
                    <div className="see-all">
                        <a href="#" className="product-link">See all</a>
                        <SeeAll />
                    </div>
                </div>
                <div className="listing-container">
                    <ProductSlider />
                </div>
            </div>
            
        </div>
    )
}

export default ProductListing;