import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksPage from '../bookspage/BooksPage';
import fetchNewArrivalData from "../../util/NewArrivalData";
import fetchHotData from "../../util/HotData";
import fetchPopularData from "../../util/PopularData";

const CategoryFilterPage = () => {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let categoryData = [];

      if (category === 'new-arrival') {
        categoryData = await fetchNewArrivalData();
      } else if (category === 'hot') {
        categoryData = await fetchHotData();
      } else if (category === 'popular') {
        categoryData = await fetchPopularData();
      }

      setFilteredBooks(categoryData);
      setLoading(false);
    };

    fetchData();
  }, [category]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <BooksPage books={filteredBooks} />
      )}
    </div>
  );
};

export default CategoryFilterPage;
