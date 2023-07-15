import React, { useEffect, useState } from "react";
import "./productlisting.style.css";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { ReactComponent as SeeAll } from "../../../assets/images/right.svg";
import ProductSlider from "../productslide/ProductSlide";
import fetchNewArrivalData from "../../../util/NewArrivalData";
import fetchHotData from "../../../util/HotData";
import fetchPopularData from "../../../util/PopularData";

const ProductListing = () => {
  const [newArrivalData, setNewArrivalData] = useState([]);
  const [hotData, setHotData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const newArrivalData = await fetchNewArrivalData();
      const hotData = await fetchHotData();
      const popularData = await fetchPopularData();

      setNewArrivalData(newArrivalData);
      setHotData(hotData);
      setPopularData(popularData);
    };

    fetchProductData();
  }, []);

  return (
    <div className="product-listing-container">
      <div className="sub-product-container">
        <div className="book-cate">
          <h2>New Arrival</h2>
          <div className="see-all">
            <a href="http://localhost:3000/books/category-filter/new-arrival" className="product-link">
              See all
            </a>
            <SeeAll />
          </div>
        </div>
        <div className="listing-container">
          <ProductSlider bookData={newArrivalData} />
        </div>
      </div>

      <div className="sub-product-container">
        <div className="book-cate">
          <h2>Hot</h2>
          <div className="see-all">
            <a href="http://localhost:3000/books/category-filter/hot" className="product-link">
              See all
            </a>
            <SeeAll />
          </div>
        </div>
        <div className="listing-container">
          <ProductSlider bookData={hotData} />
        </div>
      </div>

      <div className="sub-product-container">
        <div className="book-cate">
          <h2>Popular</h2>
          <div className="see-all">
            <a href="popular" className="product-link">
              See all
            </a>
            <SeeAll />
          </div>
        </div>
        <div className="listing-container">
          <ProductSlider bookData={popularData} />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
