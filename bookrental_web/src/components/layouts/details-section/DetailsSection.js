import React from 'react';
import './detailsection.style.css';
import BookDetailImg from '../../../assets/images/dam_nghi_lai.jpg';

const DetailsSection = () => {
    return (
        <section>
            <div className='detail-section-container'>
                <div className='flex-container'>
                    <div className='book-img-container'>
                        <img src={BookDetailImg} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>BookName</h2>
                        <p className="text-primary">Author Name</p>
                        <p classname='book-description'>Book Description</p>
                        <p>Language</p>
                        <p> Book Length</p>
                        <h3>Price</h3>

                        <a href="#" className="cart-button">Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;