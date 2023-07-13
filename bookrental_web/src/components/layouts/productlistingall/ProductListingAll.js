import React, {useState} from 'react';
import './productlistingall.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';
import { Button } from '@chakra-ui/react';
import { color } from 'framer-motion';

const ProductListingAll = ({ booksData }) => {
    const [currentPage, setCurrentPage] = useState(1)
	const booksPerPage = 12

    const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(booksData.length / booksPerPage)

    return (
        <section>
            <div className='product-listing-all-container'>
                <div className='container'>
                    <div className="grid-container">
                        {currentBooks.map((book) => {
                            return(
                                <div className="grid-item">
                                    <ProductListingCard bookData={book}/>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <div className='page-turn'>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					pageNumber => (
						<Button
							key={pageNumber}
							onClick={() => handlePageChange(pageNumber)}
                            style={
                                currentPage === pageNumber ? {background: 'var(--primary-color-bright)', color: '#fff'}:{background: '#eee', color: '#000'}
                            }           
						>
							{pageNumber}
						</Button>
					)
				)}
			</div>
        </section>
        
    )
}

export default ProductListingAll;