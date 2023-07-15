import React, { useState, useEffect, useContext } from 'react';
import './detailsection.style.css';
import { useParams, useNavigate } from 'react-router-dom';
import { BookData } from '../../../util/BookData';
import { UserContext, CartContext } from '../../../App';
import ProductSlider from '../productslide/ProductSlide';
import { ReactComponent as SeeAll } from "../../../assets/images/right.svg"

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const user = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, [id]);

  const handleAddToCart = () => {
    if (user) {
      //add to cart
      setCartItems([...cartItems, bookData]);
      alert(`The book ${bookData.title} is added to the cart`);
    } else {
      navigate('/login');
      alert('Please Login or Sign up first..');
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = bookData.sumary?.slice(0, 300);
  const displayDescription = expanded
    ? bookData.sumary
    : truncatedDescription;

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={bookData.book_url} alt="book" />
          </div>

          <div className="book-detail-container">
            <h2>{bookData.title}</h2>
            <p className="text-primary">{bookData.author}</p>
            <p className="book-description">
              {displayDescription}
              {bookData.sumary?.length > 800 && (
                <span className="see-more-link" onClick={toggleExpanded}>
                  {expanded ? <i> see less</i> : <i> ... see more</i>}
                </span>
              )}
            </p>
            <p>
              <b>Language</b>: {bookData.language}
            </p>
            <p>
              <b>Pages</b>: {bookData.print_length}
            </p>
            <p>
              <b>Stock</b>: {bookData.stock}
            </p>

            <h3>{bookData.price} vnd</h3>

            <a onClick={handleAddToCart} className="button-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
      <div className='recommend-container'>
          <div className="sub-product-container-dt">
              <div className="book-cate">
                  <h2>Popular</h2>
                  <div className="see-all">
                      <a href="http://localhost:3000/books/category-filter/new-arrival" className="product-link">See all</a>
                      <SeeAll />
                  </div>
              </div>
              <div className="listing-container">
                  <ProductSlider bookData={BookData}/>
              </div>
          </div>
      </div>
    </section>
  );
};

export default DetailsSection;
