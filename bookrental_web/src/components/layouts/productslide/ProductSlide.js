import React from "react";
import Slider from "react-slick";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlide.css";

const ProductSlider = ({ bookData }) => {
  if (!bookData || bookData.length === 0) {
    return <p>No books available</p>;
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {bookData.map((book) => (
          <ProductListingCard key={book.id} bookData={book} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;