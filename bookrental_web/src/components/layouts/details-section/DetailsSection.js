import React, {useState,useEffect} from 'react';
import './detailsection.style.css';
import BookDetailImg from '../../../assets/images/dam_nghi_lai.jpg';
import {useParams} from 'react-router-dom';
import {BookData} from '../../../util/BookData';

const DetailsSection = () => {
    const{id} = useParams();
    const [bookData, setBookData] = useState({});

    useEffect(() => {
        let newData=BookData.filter((book) => book.id===parseInt(id));
        setBookData(newData[0]);
    }, [])
    return (
        <section>
            <div className='detail-section-container'>
                <div className='flex-container'>
                    <div className='book-img-container'>
                        <img src={bookData.book_url} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className="text-primary">{bookData.author_name}</p>
                        <p classname='book-description'>{bookData.book_description}</p>
                        <p><b>Ngôn ngữ</b>: {bookData.language}</p>
                        <p> <b>Số trang</b>: {bookData.print_length}</p>
                        <h3>{bookData.price} vnd</h3>

                        <a href="#" className="cart-button">Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;