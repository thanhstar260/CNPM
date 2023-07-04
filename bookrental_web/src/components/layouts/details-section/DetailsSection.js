import React, { useState, useEffect, useContext } from 'react';
import './detailsection.style.css';
import {useParams, useNavigate} from 'react-router-dom';
import {BookData} from '../../../util/BookData';
import { UserContext, CartContext } from '../../../App';


const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    const user = useContext(UserContext);
    const {cartItems, setCartItems} = useContext(CartContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));
        setBookData(newData[0])
    },[id])

    const handleAddToCart = () => {
        if(user) {
            //add to cart
            setCartItems([...cartItems, bookData]);
            alert(`The book ${bookData.book_name} is added to the cart`);
        } else {
            navigate('/login');
            alert("Please Login or Sign up first..");
        }
    }

    return (
        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                    <div className='book-img-container'>
                        <img src={bookData.book_url} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className="text-primary">{bookData.author_name}</p>
                        <p className="book-description">{bookData.book_description}</p>
                        <p><b>Language</b>: {bookData.language}</p>
                        <p><b>Pages</b> : {bookData.print_length}</p>
                        <p><b>Stock</b> : {bookData.stock}</p>

                        <h3>{bookData.price} vnd</h3>

                        <a onClick={handleAddToCart} className="button-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;