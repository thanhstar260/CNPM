import React from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";
import { ReactComponent as SeeAll } from "../../../assets/images/right.svg";
import ProductSlider from "../productslide/ProductSlide";
//import { NewArrivalData } from "../../../util/NewArrivalData";
import { HotData } from "../../../util/HotData";
import { PopularData } from "../../../util/PopularData";

const { NewArrivalData } = require('../../../util/NewArrivalData.js');

NewArrivalData()
  .then((bookData) => {
    console.log('New Arrival Data:', bookData);
    // Use the bookData as needed
  })
  .catch((error) => {
    console.error('Error fetching New Arrival Data:', error);
  });

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