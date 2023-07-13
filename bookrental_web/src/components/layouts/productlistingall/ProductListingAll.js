import React, { useState } from 'react';
import './productlistingall.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';
import { Button } from '@chakra-ui/react';
import { ReactComponent as Right } from "../../../assets/images/right_icon.svg";
import { ReactComponent as Left } from "../../../assets/images/left_icon.svg";

const ProductListingAll = ({ booksData }) => {
  console.log(booksData)
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;
  let pageRangeDisplayed = 3; // Số trang sẽ hiển thị xung quanh trang hiện tại
  const totalPages = Math.ceil(booksData.length / booksPerPage);

  if (totalPages === 2) {
    pageRangeDisplayed = 2;
  } else if (totalPages === 1) {
    pageRangeDisplayed = 1;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfRange = Math.floor(pageRangeDisplayed / 2);
    let startPage = currentPage - halfRange;
    let endPage = currentPage + halfRange;

    if (startPage <= 0) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage = 1;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage + 1;
  const currentBooks = booksData.slice(indexOfFirstBook - 1, indexOfLastBook);

  const [isLeftHovered, setLeftHovered] = useState(false);
  const [isRightHovered, setRightHovered] = useState(false);

  const handleLeftMouseEnter = () => {
    setLeftHovered(true);
  };

  const handleLeftMouseLeave = () => {
    setLeftHovered(false);
  };

  const handleRightMouseEnter = () => {
    setRightHovered(true);
  };

  const handleRightMouseLeave = () => {
    setRightHovered(false);
  };

  return (
    <section>
      <div className="product-listing-all-container">
        <div className="container">
          <div className="grid-container">
            {currentBooks.map((book) => (
              <div className="grid-item" key={book.id}>
                <ProductListingCard bookData={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page-turn">
        {currentPage > 1 && (
          <Left
            onClick={handlePreviousPage}
            style={{
              cursor: 'pointer',
              fill: isLeftHovered ? 'var(--primary-color-bright)' : '#ccc',
            }}
            onMouseEnter={handleLeftMouseEnter}
            onMouseLeave={handleLeftMouseLeave}
          >
            Previous
          </Left>
        )}
        {getPageNumbers().map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            style={
              currentPage === pageNumber
                ? {
                    background: 'var(--primary-color-bright)',
                    color: '#fff',
                  }
                : { background: '#eee', color: '#000' }
            }
          >
            {pageNumber}
          </Button>
        ))}
        {currentPage < totalPages && (
          <Right
            onClick={handleNextPage}
            style={{
              cursor: 'pointer',
              fill: isRightHovered ? 'var(--primary-color-bright)' : '#ccc',
            }}
            onMouseEnter={handleRightMouseEnter}
            onMouseLeave={handleRightMouseLeave}
          >
            Next
          </Right>
        )}
      </div>
    </section>
  );
};

export default ProductListingAll;
