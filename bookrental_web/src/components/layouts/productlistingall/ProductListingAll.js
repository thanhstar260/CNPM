import React, {useState} from 'react';
import './productlistingall.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListingAll = () => {
    const [currentPage, setCurrentPage] = useState(1)
	const booksPerPage = 12

    const indexOfLastBook = currentPage * booksPerPage
	const indexOfFirstBook = indexOfLastBook - booksPerPage
	const currentBooks = BookData.slice(indexOfFirstBook, indexOfLastBook)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(BookData.length / booksPerPage)

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
            <div>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					pageNumber => (
						<button
							key={pageNumber}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					)
				)}
			</div>
        </section>
        
    )
}

export default ProductListingAll;